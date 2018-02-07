import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import compare from 'just-compare'

import ChildForm from '../../forms/ChildForm'

import { debounce } from '../../utilities'
class ChildInfo extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onValidationError: PropTypes.func.isRequired,
    validations: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    onHardValidate: PropTypes.func.isRequired
  }

  onChange = ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v
    this.setState({ [name]: value }, debounce(this.props.onChange.bind(this, { target: { name, value } }), 2000))
  }

  handleDateChange = momentDate => {
    const age = new Date().getFullYear() - momentDate.year()
    const birthdate = momentDate.toISOString()
    this.setState(
      state => ({
        childInfo: {
          ...state.childInfo,
          birthdate,
          age
        }
      }),
      () => {
        this.props.onChange({ target: { name: 'age', value: age } })
        debounce(this.props.onChange.bind(this, { target: { name: 'birthdate', value: birthdate } }), 1000)()
        this.props.onValidationError({ value: { error: false, errorText: '' }, name: 'birthdate' })
      }
    )
  }

  onValidate = validation => {
    if (!compare(validation.value, this.props.validations[validation.name]))
      debounce(this.props.onValidationError.bind(this, validation), 1000)()
  }

  componentWillMount() {
    const { state } = this.props
    this.setState(state)
  }
  componentWillUnmount() {
    this.props.onHardValidate(this.state)
  }
  render() {
    return (
      <ChildForm
        state={this.state}
        onChange={this.onChange}
        onValidationError={this.onValidate}
        validations={this.props.childValidations}
        onDateChange={this.handleDateChange}
      />
    )
  }
}
export default ChildInfo
