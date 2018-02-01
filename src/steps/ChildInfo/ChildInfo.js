import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import compare from 'just-compare'

import ChildForm from '../../forms/ChildForm'

import { debounce } from '../../utilities'
import AppBar from 'material-ui/AppBar/AppBar'
import Tabs from 'material-ui/Tabs/Tabs'
import Tab from 'material-ui/Tabs/Tab'
import TabContainer from '../../components/TabContainer/TabContainer'
import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews'
import MedicalForm from '../../forms/MedicalForm/MedicalForm'
class ChildInfo extends PureComponent {
  static propTypes = {
    onChangeChild: PropTypes.func.isRequired,
    onChangeMedical: PropTypes.func.isRequired,
    onValidationError: PropTypes.func.isRequired,
    validations: PropTypes.arrayOf(
      PropTypes.shape({ error: PropTypes.bool.isRequired, errorMessage: PropTypes.string.isRequired })
    ),
    childInfo: PropTypes.object.isRequired,
    medicalInfo: PropTypes.object.isRequired,
    diseases: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string.isRequired, checked: PropTypes.bool.isRequired })
    )
  }
  state = {
    selectedTab: 0
  }

  onChangeMedical = ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v

    this.setState(
      {
        medicalInfo: {
          ...this.state.medicalInfo,
          [name]: value
        }
      },
      debounce(this.props.onChangeMedical.bind(this, { target: { name, value } }), 2000)
    )
  }

  onChangeChild = ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v
    this.setState(
      {
        childInfo: {
          ...this.state.childInfo,
          [name]: value
        }
      },
      debounce(this.props.onChangeChild.bind(this, { target: { name, value } }), 2000)
    )
  }

  onChangeVaccine = ({ target }) => {
    const { name, value: v, checked } = target
    const value = v === 'on' ? checked : v
    this.props.onChangeVaccine({ target: { name, value: { value } } })
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
        this.props.onChangeChild({ target: { name: 'age', value: age } })
        debounce(this.props.onChangeChild.bind(this, { target: { name: 'birthdate', value: birthdate } }), 1000)()
        this.props.onValidationChildError({ value: { error: false, errorText: '' }, name: 'birthdate' })
      }
    )
  }

  onValidateChild = validation => {
    if (!compare(validation.value, this.props.childValidations[validation.name]))
      debounce(this.props.onValidationChildError.bind(this, validation), 1000)()
  }
  onValidateMedical = validation => {
    if (!compare(validation.value, this.props.medicalValidations[validation.name]))
      debounce(this.props.onValidationMedicalError.bind(this, validation), 1000)()
  }

  componentWillMount() {
    const { medicalInfo, childInfo } = this.props
    this.setState({ medicalInfo, childInfo })
  }

  selectTab = (e, selectedTab) => {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab, medicalInfo, childInfo } = this.state
    return (
      <Fragment>
        <AppBar color="default" position="static">
          <Tabs indicatorColor="primary" textColor="primary" value={selectedTab} onChange={this.selectTab}>
            <Tab label="Información del Niño" />
            <Tab label="Información Medica" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={selectedTab} onChangeIndex={this.selectTab}>
          <TabContainer>
            {selectedTab === 0 ? (
              <ChildForm
                state={childInfo}
                onChange={this.onChangeChild}
                onValidationError={this.onValidateChild}
                validations={this.props.childValidations}
                onDateChange={this.handleDateChange}
              />
            ) : null}
          </TabContainer>
          <TabContainer>
            {selectedTab === 1 ? (
              <MedicalForm
                state={medicalInfo}
                diseases={this.props.diseases}
                alergies={this.props.alergies}
                vaccines={this.props.vaccines}
                sikness={this.props.sikness}
                validations={this.props.medicalValidations}
                onChange={this.onChangeMedical}
                onValidationError={this.onValidateMedical}
                onChangeAlergies={this.props.onChangeAlergies}
                onChangeSikness={this.props.onChangeSikness}
                onChangeVaccine={this.onChangeVaccine}
                onToggleDesiese={this.props.onToggleDisease}
              />
            ) : null}
          </TabContainer>
        </SwipeableViews>
      </Fragment>
    )
  }
}

ChildInfo.propTypes = {}

export default ChildInfo
