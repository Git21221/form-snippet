import * as React from "react";
import { Controller, useFormContext, ValidateResult } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type InputProps = {
  sx?: Record<string, any>;
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
  fullWidth?: boolean;
  pattern?: {
    value: RegExp;
    message: string;
  };
  customValidation?: (value: any) => ValidateResult | Promise<ValidateResult>;
  required?: boolean;
  defaultValue?: string;
  multiline?: any;
  startIcon?: string | React.ReactElement;
  endIcon?: string | React.ReactElement;
  autoComplete?: "on" | "off";
};

function Input({
  sx,
  type,
  label,
  name,
  variant,
  size,
  disabled,
  readOnly,
  minLength = 0,
  maxLength = 150,
  fullWidth,
  pattern,
  customValidation,
  required,
  defaultValue,
  multiline,
  startIcon,
  endIcon,
  autoComplete,
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
        <TextField
          sx={sx}
          type={showPassword && type === "password" ? "text" : type || "text"}
          disabled={disabled}
          {...field}
          id={name}
          label={label}
          fullWidth={fullWidth}
          variant={variant || "outlined"}
          size={size || "small"}
          value={field.value || ""}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          onBlur={field.onBlur}
          required={required}
          autoComplete={autoComplete}
          multiline={!!multiline}
          {...(multiline?.staticRow && { rows: multiline.staticRow })}
          {...(multiline?.flexible && { maxRows: multiline.flexible })}
          InputProps={{
            readOnly,
            ...(startIcon && {
              startAdornment: (
                <InputAdornment position="start">{startIcon}</InputAdornment>
              ),
            }),
            ...(endIcon && {
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
            }),
          }}
        />
      )}
    />
  );
}

export { Input };
