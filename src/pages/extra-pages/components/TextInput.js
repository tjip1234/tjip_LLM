import React from 'react';
import { TextField } from '@mui/material';

const TextInput = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
    />
  );
};

export default TextInput;
