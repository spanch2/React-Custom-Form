import React, { useEffect, useState } from 'react'

const useForm = (submit: Function, validate: Function, initialState: React.ComponentState) => {
  interface Errors {
    name?: string
    year?: string
  }
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({} as Errors)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit()
      setValues(initialState)
    }
  }, [errors])

  const handleSubmit = (event: React.FormEvent) => {
    if (event) {
      event.preventDefault()
      setIsSubmitting(true)
      setErrors(validate(values))
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

  return {
    handleInputChange,
    handleSubmit,
    values,
    errors
  }
}
export default useForm
