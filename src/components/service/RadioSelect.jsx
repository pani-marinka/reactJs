import React from 'react';
import { FormControl, FormLabel, RadioGroup, Radio, Stack } from '@chakra-ui/react';
import { useState } from 'react';

//toDo custom label
export default function RadioSelect({ onPositionChange }) {
    const [position, setPosition] = useState("Frontend Developer");

    const handlePositionChange = (value) => {
      setPosition(value);
      onPositionChange(value);
    };
   

  return (
  
      <FormControl>
        <FormLabel htmlFor="position" className="radio-form-label">Select your position</FormLabel>
        <RadioGroup onChange={handlePositionChange} value={position} >
          <Stack className="radio-group" direction="column" spacing={4}>
            <Radio value="Frontend Developer" colorScheme="purple">Frontend Developer</Radio>
            <Radio value="Backend Developer" colorScheme="purple">Backend Developer</Radio>
            <Radio value="Designer" colorScheme="purple">Designer</Radio>
            <Radio value="QA" colorScheme="purple">QA</Radio>
          </Stack>
        </RadioGroup>       
      </FormControl>

  );
}