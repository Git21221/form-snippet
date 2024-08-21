import * as React from "react";
import { Controller, useFormContext, ValidateResult } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
  pattern?: any;
  customValidation?: (value: any) => ValidateResult | Promise<ValidateResult>;
  required?: boolean;
  defaultValue?: string;
  multiline?: any;
  startIcon?: string | React.ReactElement;
  endIcon?: string | React.ReactElement;
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
  pattern = {},
  customValidation,
  required,
  defaultValue,
  multiline,
  startIcon,
  endIcon,
}: InputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPasswordClick = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) =>
    e.preventDefault();
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
          value: pattern?.value,
          message: pattern?.message,
        },
        validate: customValidation,
      }}
      render={({ field }) => (
        <TextField
          type={showPassword && type === "password" ? "text" : type || "text"}
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
          multiline={!!multiline}
          {...(multiline?.staticRow
            ? {
                rows: multiline.staticRow,
              }
            : multiline?.flexible
              ? {
                  maxRows: multiline.flexible,
                }
              : {})}
          InputProps={{
            readOnly,
            ...(startIcon
              ? {
                  startAdornment: (
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
                  ),
                }
              : {}),
            ...(endIcon
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      {type === "password" ? (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPasswordClick}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ) : (
                        endIcon
                      )}
                    </InputAdornment>
                  ),
                }
              : {}),
          }}
        />
      )}
    />
  );
}

export { Input };
