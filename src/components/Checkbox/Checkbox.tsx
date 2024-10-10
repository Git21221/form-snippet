import * as React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
  Typography,
} from "@mui/material";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChange} disabled={disabled} />
      }
      label={label}
    />
  );
};

interface CheckboxGroupProps {
  options: { label: string; value: string }[];
  selectedValues: string[];
  onChange: (selectedValues: string[]) => void;
  disabled?: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  selectedValues,
  onChange,
  disabled,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((val) => val !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <FormGroup>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={
            <Checkbox
              checked={selectedValues.includes(option.value)}
              onChange={handleChange}
              value={option.value}
              disabled={disabled}
            />
          }
          label={option.label}
        />
      ))}
    </FormGroup>
  );
};

const CheckboxDemo: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  return (
    <Box>
      <Typography variant="h6">Single Checkbox</Typography>
      <CustomCheckbox
        label="Accept Terms and Conditions"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <Typography variant="h6" sx={{ mt: 2 }}>
        Checkbox Group
      </Typography>
      <CheckboxGroup
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        selectedValues={selectedValues}
        onChange={(values) => setSelectedValues(values)}
      />
    </Box>
  );
};

export { CustomCheckbox, CheckboxGroup };
export default CheckboxDemo;
