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
    selectedTab: 1
  }

  onChange = slice => ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v
    const onChange = slice === 'childInfo' ? this.props.onChangeChild : this.props.onChangeMedical
    this.setState(
      state => ({
        ...state,
        [slice]: {
          ...state[slice],
          [name]: value
        }
      }),
      debounce(onChange.bind(this, { target: { name, value } }), 2000)
    )
  }

  onChangeVaccine = ({ target }) => {
    const { name, value } = target
    this.props.onChangeVaccine({ target: { name, value: { value } } })
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
        this.props.onValidationError({ value: { error: false, errorText: '' }, name: 'birthdate' })
      }
    )
  }

  onValidationError = validation => {
    if (!compare(validation.value, this.props.validations[validation.name]))
      debounce(this.props.onValidationError.bind(this, validation), 1000)()
  }

  componentWillMount() {
    const { medicalInfo, childInfo } = this.props
    this.setState({ medicalInfo, childInfo })
  }
  componentWillReceiveProps(nextProps) {
    const { state } = this
    if (!compare(state, nextProps.state)) {
      this.setState(state)
    }
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
                onChange={this.onChange('childInfo')}
                onValidationError={this.onValidationError}
                validations={this.props.validations}
                onDateChange={this.handleDateChange}
              />
            ) : null}
          </TabContainer>
          <TabContainer>
            {selectedTab === 1 ? (
              <MedicalForm
                state={medicalInfo}
                diseases={this.props.diseases}
                vaccines={this.props.vaccines}
                onChangeVaccine={this.onChangeVaccine}
                onToggleDesiese={this.props.onToggleDisease}
                onChange={this.onChange('medicalInfo')}
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
