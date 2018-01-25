import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import DefaultTextField from 'material-ui/TextField'

import ValidateValue from './validator'
class TextField extends PureComponent {
  state = {
    error: false,
    errorText: '',
    validators: []
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

  static contextTypes = {
    onValidationError: PropTypes.func,
    validations: PropTypes.object
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
        if (this.state.validators.length) this.validateValue(event.target)
        this.props.onChange(event)
      }
    }
  }

  onBlur = event => {
    if (this.state.validators.length) this.validateValue(event.target)
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }
  validateValue = ({ value, name }) => {
    const { validators, errorMessages } = this.state
    const validation = ValidateValue(value, validators, errorMessages)
    this.setState(validation)
    if (this.context.onValidationError) this.context.onValidationError({ name, value: validation })
  }
  componentWillMount() {
    if (!this.props.select) {
      let { validators, errorMessages, required, name } = this.props
      const needsRequired = required && !(validators.length && validators.indexOf('required') !== -1)
      let state = {}
      if (needsRequired) {
        validators = [...validators, 'required']
        errorMessages = [...errorMessages, 'Campo requerido']
        state = { validators, errorMessages }
      }
      if (this.context.validations && this.context.validations[name]) {
        const { error, errorText } = this.context.validations[name]
        state = { ...state, error, errorText }
      }
      this.setState(state)
    }
  }
  render() {
    const { validators, onChange, errorMessages, validateOnBlur, ...props } = this.props
    const { error, errorText } = this.state
    const errorState = error
      ? {
          helperText: errorText,
          error
        }
      : {}
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
