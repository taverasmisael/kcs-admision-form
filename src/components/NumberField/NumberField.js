import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import FormControl from 'material-ui/Form/FormControl'
import Input from 'material-ui/Input/Input'
import InputLabel from 'material-ui/Input/InputLabel'

import NumberMask from './NumberMask'

const NumberField = ({ value, label, name, id, onChange, className, ...props }) => (
  <FormControl margin="dense" className={className}>
    <InputLabel htmlFor={id} shrink>
      {props.required ? <Fragment>{label}&thinsp;*</Fragment> : label}
    </InputLabel>
    <Input
      {...props}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      inputComponent={NumberMask}
      inputProps={{
        length: props.length
      }}
      disableUnderline
    />
  </FormControl>
)

NumberField.propTypes = {
  value: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  ...Input.propTypes
}

export default NumberField
