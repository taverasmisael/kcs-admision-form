import React, { Component } from 'react'
import PropTypes from 'prop-types'

import compare from 'just-compare'
import { debounce } from '../../utilities'

import MedicalForm from '../../forms/MedicalForm/MedicalForm'

class MedicalInfo extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onChangeVaccine: PropTypes.func.isRequired,
    onChangeAlergies: PropTypes.func.isRequired,
    onChangeSikness: PropTypes.func.isRequired,
    onToggleDisease: PropTypes.func.isRequired,
    onHardValidate: PropTypes.func.isRequired,
    onValidationError: PropTypes.func.isRequired,
    validations: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    diseases: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string.isRequired, checked: PropTypes.bool.isRequired })
    ),
    alergies: PropTypes.array.isRequired,
    vaccines: PropTypes.object.isRequired,
    sikness: PropTypes.array.isRequired
  }

  onChange = ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v

    this.setState(
      {
        [name]: value
      },
      debounce(this.props.onChange.bind(this, { target: { name, value } }), 2000)
    )
  }
  onChangeVaccine = ({ target }) => {
    const { name, value: v, checked } = target
    const value = v === 'on' ? checked : v
    this.props.onChangeVaccine({ target: { name, value: { value } } })
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
      <MedicalForm
        state={this.state}
        diseases={this.props.diseases}
        alergies={this.props.alergies}
        vaccines={this.props.vaccines}
        sikness={this.props.sikness}
        validations={this.props.validations}
        onChange={this.onChange}
        onValidationError={this.onValidate}
        onChangeAlergies={this.props.onChangeAlergies}
        onChangeSikness={this.props.onChangeSikness}
        onChangeVaccine={this.onChangeVaccine}
        onToggleDesiese={this.props.onToggleDisease}
      />
    )
  }
}
export default MedicalInfo
