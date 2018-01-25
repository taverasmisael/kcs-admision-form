import * as ValidationRules from './validationRules'

export default (value, validators, messages) => {
  let error = false
  let errorText = ''

  validators.forEach((v, idx) => {
    const [name, param] = v.split(':')
    const validator = ValidationRules[name]
    if (validator) {
      const isValid = validator(value, param)
      error = error || !isValid
      if (!isValid) {
        errorText += messages[idx]
      }
    }
  })

  return {
    error,
    errorText
  }
}
