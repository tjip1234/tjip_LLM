import React from 'react';
import { FormControl, InputLabel, Button } from '@mui/material';

const FileInput = ({ label, onChange }) => {
  // Handle file input change
  const handleFileChange = (event) => {
    // Call the passed onChange function with the selected file(s)
    onChange(event.target.files);
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel shrink htmlFor="file-input">{label}</InputLabel>
      <Button
        variant="contained"
        component="label"
        sx={{ mt: 2 }}
      >
        Upload File
        <input
          type="file"
          hidden
          onChange={handleFileChange}
          id="file-input"
        />
      </Button>
    </FormControl>
  );
};

export default FileInput;
