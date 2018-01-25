import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import DefaultTextField from 'material-ui/TextField'

import ValidateValue from './validator'
class TextField extends PureComponent {
  state = {
    error: false,
    errorText: ''
  }
  static propTypes = {
    ...DefaultTextField.propTypes,
    validateOnBlur: PropTypes.bool,
    required: PropTypes.bool,
    validators: PropTypes.arrayOf(PropTypes.string),
    errorMessages: PropTypes.arrayOf(PropTypes.string)
  }
  static defaultProps = {
    required: false,
    validateOnBlur: true,
    validators: [],
    errorMessages: []
  }

  onChange = event => {
    if (this.props.onChange) {
      if (
        !(
          this.props.inputProps &&
          this.props.inputProps.length &&
          event.target.value.length > this.props.inputProps.length
        )
      ) {
        if (this.state.validators.length) this.validateValue(event.target.value)
        this.props.onChange(event)
      }
    }
  }

  onBlur = event => {
    if (this.state.validators.length) this.validateValue(event.target.value)
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }
  validateValue = value => {
    const { validators, errorMessages } = this.state
    const valid = ValidateValue(value, validators, errorMessages)
    this.setState(valid)
  }
  componentWillMount() {
    let { validators, errorMessages, required } = this.props
    const needsRequired = required && !(validators.length && validators.indexOf('required') !== -1)
    if (needsRequired) {
      validators = [...validators, 'required']
      errorMessages = [...errorMessages, 'Campo requerido']
    }
    this.setState({ validators, errorMessages })
  }
  render() {
    const { validators, onChange, errorMessages, validateOnBlur, ...props } = this.props
    const { error, errorText } = this.state
    const errorState = {
      helperText: errorText,
      error
    }
    const InputProps = {
      disableUnderline: true
    }
    const InputLabelProps = {
      shrink: true
    }
    const PropsModifiers = { InputLabelProps, InputProps }

    return (
      <DefaultTextField
        margin="normal"
        {...PropsModifiers}
        {...props}
        onChange={this.onChange}
        onBlur={validateOnBlur && this.onBlur}
        {...errorState}
      />
    )
  }
}

export default TextField
