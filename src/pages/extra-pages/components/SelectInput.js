import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SelectInput = ({ label, value, onChange, options }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
