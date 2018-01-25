import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextField from '../TextField'

const maxInt = len => Number(new Array(len).fill(9).join(''))
const minInt = len => Number(new Array(len).fill(1).join(''))

const NumberField = ({ maxLength, minLength, ...props }) => {
  let validators = []
  let errorMessages = []
  let validationProps = {}
  if (maxLength) {
    validators = [...validators, `maxlength:${maxLength}`]
    errorMessages = [...errorMessages, `Debe tener máximo ${maxLength} digitos`]
    validationProps = { ...validationProps, maxLength, length: maxLength, max: maxInt(maxLength) }
  } else if (minLength) {
    validators = [...validators, `minlength:${minLength}`]
    errorMessages = [...errorMessages, `Debe tener máximo ${minLength} digitos`]
    validationProps = { ...validationProps, minLength, min: minInt(minLength) }
  }
  return (
    <TextField
      {...props}
      type="number"
      validators={validators}
      errorMessages={errorMessages}
      inputProps={validationProps}
    />
  )
}

NumberField.propTypes = {
  maxlength: PropTypes.number,
  minlength: PropTypes.number,
  ...TextField.propTypes
}

export default NumberField
