import React from 'react'
import { FormControl, FormLabel, Switch } from '@chakra-ui/react'

interface InputSwitchProps {
    label: string;
    formElement: string;
}
export function InputSwitch (props: InputSwitchProps) {
  return (
        <FormControl display="flex" alignItems="center" marginTop={4} marginBottom={4}>
            <FormLabel htmlFor={props.formElement} mb="0">
                {props.label}
            </FormLabel>
            <Switch id={props.formElement} />
        </FormControl>
  )
}
