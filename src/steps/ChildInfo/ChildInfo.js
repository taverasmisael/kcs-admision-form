import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import compare from 'just-compare'

import ChildForm from '../../forms/ChildForm'

import { debounce } from '../../utilities'
class ChildInfo extends PureComponent {
  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }
  state = {}

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

  onValidationError = validation => {
    if (!compare(validation.value, this.props.validations[validation.name]))
      debounce(this.props.onValidationError.bind(this, validation), 2000)()
  }

  componentWillMount() {
    this.setState(this.props.state)
  }
  componentWillReceiveProps(nextProps) {
    const { state } = this
    if (!compare(state, nextProps.state)) {
      this.setState(state)
    }
  }
  handleDateChange = momentDate => {
    const age = new Date().getFullYear() - momentDate.year()
    const birthdate = momentDate.toISOString()
    this.setState(
      state => ({
        ...state,
        birthdate,
        age
      }),
      () => {
        debounce(this.props.onChange.bind(this, { target: { name: 'birthdate', value: birthdate } }), 1000)()
        this.props.onChange({ target: { name: 'age', value: age } })
      }
    )
  }

  render() {
    return (
      <Fragment>
        <ChildForm
          state={this.state}
          onChange={this.onChange}
          onValidationError={this.onValidationError}
          onDateChange={this.handleDateChange}
        />
      </Fragment>
    )
  }
}

ChildInfo.propTypes = {}

export default ChildInfo
