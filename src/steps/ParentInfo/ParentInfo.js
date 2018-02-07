import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import compare from 'just-compare'
import { debounce } from '../../utilities'

import ParentForm from '../../forms/ParentForm'

class ParentInfo extends PureComponent {
  static propTypes = {
    state: PropTypes.object.isRequired,
    validations: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onValidationError: PropTypes.func.isRequired,
    onHardValidate: PropTypes.func.isRequired,
    parent: PropTypes.string.isRequired
  }
  onChange = event => {
    const { name, value: v } = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : v
    this.setState({ [name]: value }, debounce(this.props.onChange.bind(this, { target: { name, value } }), 4000))
  }
  onValidationError = validation => {
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
      <ParentForm
        parent={this.props.parent}
        state={this.state}
        onChange={this.onChange}
        validations={this.props.fatherValidations}
        onValidationError={this.onValidationError}
      />
    )
  }
}

export default ParentInfo
