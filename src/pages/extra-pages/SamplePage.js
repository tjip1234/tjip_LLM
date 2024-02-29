import React, { useState } from 'react';
import TextInput from './components/TextInput'; 
import FileInput from './components/FileInput'; 
import SelectInput from './components/SelectInput'; // Adjust the path as necessary
import { Button, Box } from '@mui/material';

const SamplePage = () => {
  const [inputConfig, setInputConfig] = useState({
    prompt: '',
    folderPath: ''
  });
  const [selectedLLM, setSelectedLLM] = useState('llama2');
  const [outputConfig, setOutputConfig] = useState('');

  const llmOptions = [{ value: 'llama2', label: 'LLaMA 2 13b'}, { value: 'mistral', label: 'Mixtral 8x7b' }]; // Add more options as needed

  const handleChange = (name) => (event) => {
    setInputConfig({ ...inputConfig, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', { inputConfig, selectedLLM, outputConfig });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <h1>LLM Pipeline Configuration</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Input Prompt"
          value={inputConfig.prompt}
          onChange={handleChange('prompt')}
        />
        <FileInput
          label="Input Folder"
          onChange={(files) => setInputConfig({ ...inputConfig, folderPath: files[0] })}
        />
        <SelectInput
          label="Select LLM"
          value={selectedLLM}
          onChange={(e) => setSelectedLLM(e.target.value)}
          options={llmOptions}
        />
        <TextInput
          label="Output Configuration"
          value={outputConfig}
          onChange={(e) => setOutputConfig(e.target.value)}
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Submit Pipeline
        </Button>
      </form>
    </Box>
  );
};

export default SamplePage;
