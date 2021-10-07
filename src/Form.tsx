import React from 'react'
import { InputField } from './InputField'
import { InputSwitch } from './InputSwitch'
import { InputSelect } from './InputSelect'
import { FormButton } from './FormButton'
import { Text } from '@chakra-ui/react'
import './Form.css'

export default function Form () {
  return (
        <div className="form">
            <Text fontSize="7xl" fontWeight="700" marginBottom={10}>Custom Form</Text>
            <InputField leftAddon={'Name'} placeholder={'Chad Chaddington'} formElement={'Name'} />
            <InputSwitch label={'I want to learn frontend'} formElement={'Frontend'} />
            <InputSwitch label={'I want to learn backend'} formElement={'Backend'} />
            <InputSelect
                placeholder={'I am a...'}
                options={['Freshman', 'Sophomore', 'Junior', 'Senior']}
                formElement={'Year'}
            />
            <FormButton label={'Submit'} />
        </div>
  )
}
