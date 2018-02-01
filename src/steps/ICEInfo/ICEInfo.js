import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { debounce } from '../../utilities'
import compare from 'just-compare'

import ICEForm from '../../forms/ICEForm'

class ICEInfo extends PureComponent {
  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onHardValidate: PropTypes.func.isRequired,
  }

  onValidationError = validation => {
    if (!compare(validation.value, this.props.validations[validation.name]))
      debounce(this.props.onValidationError.bind(this, validation), 1000)()
  }
  onChange = ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v
    this.setState(
      state => ({
        ...state,
        [name]: value
      }),
      debounce(this.props.onChange.bind(this, { target: { name, value } }), 2000)
    )
  }
  componentWillMount() {
    this.setState(this.props.state)
  }
  componentWillUnmount() {
    this.props.onHardValidate(this.state)
  }
  render() {
    return (
      <ICEForm
        state={this.state}
        onChange={this.onChange}
        onValidationError={this.onValidationError}
        validations={this.props.validations}
      />
    )
  }
}

export default ICEInfo
