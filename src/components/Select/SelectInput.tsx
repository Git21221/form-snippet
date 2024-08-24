import * as React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Controller, useFormContext, ValidateResult } from "react-hook-form";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  ListItemText,
  MenuItem,
} from "@mui/material";

type Option = {
  value: string;
  label: string;
};

type InputProps = {
  name: string;
  label: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  options?: Option[];
  sx?: Record<string, any>;
  minLength?: number;
  maxLength?: number;
  pattern?: {
    value: RegExp;
    message: string;
  };
  multiple?: {
    checkBox?: boolean;
  };
  customValidation?: (value: any) => ValidateResult | Promise<ValidateResult>;
  fullWidth?: boolean;
};

function SelectInput({
  name,
  label,
  defaultValue,
  disabled,
  readOnly,
  required,
  variant,
  size,
  options,
  sx,
  minLength = 0,
  maxLength = 150,
  pattern,
  customValidation,
  multiple,
  fullWidth,
}: InputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const placeholderText = label.toLowerCase().includes("select")
    ? label
    : `Select a ${label}`;

  const handleRenderValue = (selected: any) =>
    Array.isArray(selected)
      ? selected
          .map(
            (value) => options?.find((option) => option.value === value)?.label
          )
          .join(", ")
      : selected;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || (multiple ? [] : "")}
      rules={{
        required: required && `${label} is required`,
        minLength: minLength && {
          value: minLength,
          message: `${label} must be at least ${minLength} characters`,
        },
        maxLength: maxLength && {
          value: maxLength,
          message: `${label} must not exceed ${maxLength} characters`,
        },
        pattern: pattern && {
          value: pattern.value,
          message: pattern.message,
        },
        validate: customValidation,
      }}
      render={({ field }) => (
        <FormControl
          error={!!errors[name]}
          required={required}
          disabled={disabled}
          fullWidth={fullWidth}
          variant={variant || "outlined"}
          size={size || "small"}
          sx={{ minWidth: !fullWidth ? 120 : "auto", ...sx }}
        >
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            {...field}
            labelId={`${name}-label`}
            multiple={!!multiple}
            label={label}
            inputProps={{ readOnly }}
            onChange={(event: SelectChangeEvent<typeof field.value>) => {
              field.onChange(event);
            }}
            renderValue={handleRenderValue}
          >
            <MenuItem disabled value="">
              {placeholderText}
            </MenuItem>
            {options &&
              options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {multiple?.checkBox && (
                    <Checkbox checked={field.value?.includes(option.value)} />
                  )}
                  {multiple ? (
                    <ListItemText primary={option.label} />
                  ) : (
                    option.label
                  )}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>{errors[name]?.message?.toString()}</FormHelperText>
        </FormControl>
      )}
    />
  );
}

export { SelectInput };
