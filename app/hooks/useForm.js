import { useState } from "react"

export const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = async (event, submitCallback) => {
    event.preventDefault()
    setIsSubmitting(true)
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      await submitCallback(values)
    }
    setIsSubmitting(false)
  }

  return { values, errors, isSubmitting, handleChange, handleSubmit }
}

