import * as React from "react";
// import styles from "./input.module.css";
import { Controller, useFormContext, ValidateResult } from "react-hook-form";
import TextField from "@mui/material/TextField";

type InputProps = {
  label: string;
  name: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color";
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  disabled?: boolean;
  readOnly?: boolean;
  minLength?: number;
  maxLength?: number;
  validation?: any;
  customValidation?: (value: any) => ValidateResult | Promise<ValidateResult>;
  required?: boolean;
  defaultValue?: string;
};

function Input({
  type,
  label,
  name,
  variant,
  size,
  disabled,
  readOnly,
  minLength = 0,
  maxLength = 150,
  validation = {},
  customValidation,
  required,
  defaultValue,
}: InputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || ""}
        rules={{
          required: required && `${label} is required`,
          minLength: {
            value: minLength,
            message: `${label} must be at least ${minLength} characters`,
          },
          maxLength: {
            value: maxLength,
            message: `${label} must not exceed ${maxLength} characters`,
          },
          pattern: {
            value: validation?.pattern?.value,
            message: validation?.pattern?.message,
          },
          validate: customValidation,
        }}
        render={({ field }) => (
          <TextField
            type={type || "text"}
            disabled={disabled}
            {...field}
            id={name}
            label={label}
            fullWidth
            variant={variant || "outlined"}
            size={size || "small"}
            value={field.value || ""}
            error={!!errors[name]}
            helperText={errors[name]?.message as string}
            onBlur={field.onBlur}
            required={required}
            autoComplete="on"
            inputProps={{
              readOnly,
            }}
          />
        )}
      />
  );
}

export { Input };
