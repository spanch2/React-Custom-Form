import React, { useState } from 'react'

const useForm = (submit: Function, validate: Function, initialState: React.ComponentState) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      submit()
      setValues(initialState)
    }
  }

  const handleInputChange = (event: React.ChangeEvent) => {
    event.persist()
    const target = event.target as any
    if (target.type === 'checkbox') {
      setValues((values: JSON) => ({ ...values, [target.name]: target.checked }))
    } else if (target.type === 'select') {
      setValues((values: JSON) => ({ ...values, [target.name]: target.value }))
    } else {
      setValues((values: JSON) => ({ ...values, [target.name]: target.value }))
    }
  }

  return [
    handleInputChange,
    handleSubmit,
    values,
    errors
  ]
}
export default useForm
