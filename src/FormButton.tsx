import React from 'react'
import { Button } from '@chakra-ui/react'

interface FormButtonProps {
    label: string;
}
export function FormButton (props: FormButtonProps) {
  return <Button colorScheme="blue" marginTop={1}>{props.label}</Button>
}
