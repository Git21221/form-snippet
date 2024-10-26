import { useState, type ReactElement } from 'react';
import { Controller, useFormContext, type ValidateResult } from 'react-hook-form';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Type definitions
type InputVariant = 'outlined' | 'filled' | 'standard';
type InputSize = 'small' | 'medium';
type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color';

interface MultilineConfig {
  staticRow?: number;
  flexible?: number; // Changed to number to specify max rows
}

interface ValidationPattern {
  value: RegExp;
  message: string;
}

interface InputProps {
  sx?: Record<string, any>;
  label: string;
  name: string;
  type?: InputType;
  variant?: InputVariant;
  size?: InputSize;
  disabled?: boolean;
  readOnly?: boolean;
  minLength?: number;
  maxLength?: number;
  fullWidth?: boolean;
  pattern?: ValidationPattern;
  customValidation?: (value: any) => ValidateResult | Promise<ValidateResult>;
  required?: boolean;
  defaultValue?: string;
  multiline?: MultilineConfig;
  startIcon?: string | ReactElement;
  endIcon?: string | ReactElement;
  autoComplete?: 'on' | 'off';
}

// Constants
const DEFAULT_MIN_LENGTH = 0;
const DEFAULT_MAX_LENGTH = 150;
const DEFAULT_VARIANT: InputVariant = 'outlined';
const DEFAULT_SIZE: InputSize = 'small';

export const Input = ({
  sx,
  type = 'text',
  label,
  name,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  disabled = false,
  readOnly = false,
  minLength = DEFAULT_MIN_LENGTH,
  maxLength = DEFAULT_MAX_LENGTH,
  fullWidth = false,
  pattern,
  customValidation,
  required = false,
  defaultValue = '',
  multiline,
  startIcon,
  endIcon,
  autoComplete,
}: InputProps): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordClick = () => setShowPassword((prev) => !prev);
  
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const getInputType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return type;
  };

  const renderPasswordToggle = () => (
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleShowPasswordClick}
      onMouseDown={handleMouseDownPassword}
      edge="end"
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  );

  const renderEndAdornment = () => {
    if (!endIcon && type !== 'password') return null;

    return (
      <InputAdornment position="end">
        {type === 'password' ? renderPasswordToggle() : endIcon}
      </InputAdornment>
    );
  };

  const renderStartAdornment = () => {
    if (!startIcon) return null;

    return <InputAdornment position="start">{startIcon}</InputAdornment>;
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
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
          {...field}
          sx={sx}
          type={getInputType()}
          disabled={disabled}
          id={name}
          label={label}
          fullWidth={fullWidth}
          variant={variant}
          size={size}
          value={field.value || ''}
          error={!!errors[name]}
          helperText={errors[name]?.message as string}
          onBlur={field.onBlur}
          required={required}
          autoComplete={autoComplete}
          multiline={!!multiline}
          rows={multiline?.staticRow}
          maxRows={multiline?.flexible}
          InputProps={{
            readOnly,
            startAdornment: renderStartAdornment(),
            endAdornment: renderEndAdornment(),
          }}
        />
      )}
    />
  );
};
