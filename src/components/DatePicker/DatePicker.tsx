import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

interface DatePickerProps {
  name: string;
  label: string;
  defaultValue?: Date | null;
}

const DatePicker: React.FC<DatePickerProps> = ({
  name,
  label,
  defaultValue,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || null}
      render={({ field, fieldState }) => (
        <MUIDatePicker
          {...field}
          label={label}
          onChange={(date) => field.onChange(date)}
          slotProps={{
            textField: {
              fullWidth: true,
              error: !!fieldState.error,
              helperText: fieldState.error?.message,
            },
          }}
        />
      )}
    />
  );
};

export default DatePicker;
