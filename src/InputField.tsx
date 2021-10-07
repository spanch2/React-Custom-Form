import React from 'react'
import { Input, InputGroup, InputLeftAddon, FormControl } from '@chakra-ui/react'

interface InputFieldProps {
    leftAddon: string;
    placeholder: string;
    formElement: string;
}
export function InputField (props: InputFieldProps) {
  return (
        <FormControl id="email" marginTop={4} marginBottom={4}>
            <InputGroup>
                <InputLeftAddon>{props.leftAddon}</InputLeftAddon>
                <Input placeholder={props.placeholder ? props.placeholder : 'Default'} />
            </InputGroup>
        </FormControl>
  )
}
