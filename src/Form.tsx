import React, { useState } from 'react'
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Switch,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody
} from '@chakra-ui/react'
import './Form.css'
import useForm from './useForm'

export default function Form () {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [customFields, setCustomFields] = useState<any[]>([])

  const [handleInputChange, handleSubmit, values, errors] = useForm(submit, validate,
    {
      name: '',
      frontend: false,
      backend: false,
      year: ''
    }
  )

  function submit () {
    console.log(values)
    setCustomFields([])
  }

  function validate (values: React.ComponentState) {
    const errors: {[k: string]: string} = {}
    if (values.name === '') {
      errors.name = 'Required'
    }
    if (values.year === '') {
      errors.year = 'Required'
    }
    return errors
  }

  const [handleNewInputChange, handleNewInputSubmit, newInputValues, newInputErrors] = useForm(addNewInput, validateNewInput,
    {
      name: ''
    }
  )

  function addNewInput () {
    setCustomFields((fields: string[]) => [...fields, newInputValues.name])
    onClose()
  }

  function validateNewInput (values: React.ComponentState) {
    const errors: {[k: string]: string} = {}
    if (values.name === '') {
      errors.name = 'Required'
    }
    return errors
  }

  return (
        <div className="form">
            <Text fontSize="6xl" fontWeight="700" marginBottom={10}>Custom Form</Text>
            <form onSubmit={handleSubmit}>
                <FormControl id="name" marginTop={4} marginBottom={4} isInvalid={errors.name !== undefined}>
                    <InputGroup>
                        <InputLeftAddon>Name</InputLeftAddon>
                        <Input placeholder="Chad Chaddington" onChange={handleInputChange} name="name" value={values.name}/>
                    </InputGroup>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl display="flex" alignItems="center" marginTop={4} marginBottom={4}>
                    <FormLabel htmlFor="Frontend" mb="0">
                        I want to learn frontend
                    </FormLabel>
                    <Switch id="Frontend" onChange={handleInputChange} name="frontend" isChecked={values.frontend}/>
                </FormControl>
                <FormControl display="flex" alignItems="center" marginTop={4} marginBottom={4}>
                    <FormLabel htmlFor="Backend" mb="0">
                        I want to learn backend
                    </FormLabel>
                    <Switch id="Backend" onChange={handleInputChange} name="backend" isChecked={values.backend}/>
                </FormControl>
                <FormControl id="year" marginTop={4} marginBottom={4} isInvalid={errors.year !== undefined}>
                    <Select placeholder='I am a...' onChange={handleInputChange} name="year" value={values.year}>
                        {['Freshman', 'Sophomore', 'Junior', 'Senior'].map((opt, i) => (
                            <option key={i}>{opt}</option>
                        ))}
                    </Select>
                    <FormErrorMessage>{errors.year}</FormErrorMessage>
                </FormControl>
                {customFields.map((inputName) =>
                    <FormControl key={inputName} marginTop={4} marginBottom={4}>
                        <InputGroup>
                            <InputLeftAddon>{inputName}</InputLeftAddon>
                            <Input onChange={handleInputChange} name={inputName}/>
                        </InputGroup>
                    </FormControl>
                )}
                <Button colorScheme="blue" marginTop={1} type="submit">Submit</Button>
                <Button colorScheme="blue" variant='outline' marginTop={1} marginLeft={4} onClick={onOpen}>Add a Text Input</Button>
            </form>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>New Text Input...</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleNewInputSubmit}>
                        <FormControl isInvalid={newInputErrors.name !== undefined}>
                        <InputGroup>
                            <InputLeftAddon>Name</InputLeftAddon>
                            <Input placeholder="NewInputOne" onChange={handleNewInputChange} name="name" value={newInputValues.name}/>
                        </InputGroup>
                        <Button colorScheme='blue' marginTop={5} marginBottom={3} type="submit">Add Input</Button>
                        </FormControl>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>

  )
}
