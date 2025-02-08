import React, { useState } from 'react';
import { Button, Box, Input } from '@chakra-ui/react';

export default function FileUploadForm() {
  const [filePath, setFilePath] = useState('');


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFilePath(file.name); // Показуємо лише ім'я файлу
    }
  };

  return (
    <Box p={4}>
      <form>
        <Input 
          type="file" 
          display="none" 
          id="file-upload" 
          onChange={handleFileChange}
        />
        <Button 
          as="label" 
          htmlFor="file-upload" 
          colorScheme="teal" 
          width="200px"
        >
          UPLOAD
        </Button>
        {filePath && (
          <Box mt={4}>
            <strong>File selected:</strong> {filePath}
          </Box>
        )}
      </form>
    </Box>
  );
}
