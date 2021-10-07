import React from 'react'
import { FormControl, Select } from '@chakra-ui/react'

interface InputSelectProps {
    placeholder: string;
    options: string[];
    formElement: string;
}
export function InputSelect (props: InputSelectProps) {
  return (
    <FormControl id="country" marginTop={4} marginBottom={4}>
      <Select placeholder={props.placeholder}>
        {props.options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </Select>
    </FormControl>
  )
}
