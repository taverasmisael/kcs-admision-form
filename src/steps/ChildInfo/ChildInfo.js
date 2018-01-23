import React, { PureComponent, Fragment } from 'react'

import SwipeableViews from 'react-swipeable-views'
import AppBar from 'material-ui/AppBar/AppBar'
import Tabs from 'material-ui/Tabs/Tabs'
import Tab from 'material-ui/Tabs/Tab'

import ChildForm from '../../forms/ChildForm'
import MedicalForm from '../../forms/MedicalForm'
import TabContainer from '../../components/TabContainer/TabContainer'

import DiseasesList from '../../forms/MedicalForm/DiseasesList.json'

class ChildInfo extends PureComponent {
  static propTypes = {}
  state = {
    selectedTab: 0,
    personalInfo: {
      name: '',
      birthdate: '2002-01-01T04:00:00.000Z',
      grade: 0,
      age: 0,
      hasSiblings: false,
      hasOtherChildren: false,
      sonNumber: '1',
      siblings: '0',
      siblingsAges: '',
      otherChildren: ''
    },
    medicalCondition: {
      fullName: '',
      bloodType: '',
      doctorName: '',
      doctorPhone: ''
    },
    diseasesList: DiseasesList
  }

  onChange = slice => ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v
    const prevState = this.state[slice]
    this.setState({
      [slice]: {
        ...prevState,
        [name]: value
      }
    })
  }

  onToggleDesiese = ({ target }) => {
    const diseasesList = this.state.diseasesList.map(
      disease => (disease.label === target.name ? { ...disease, checked: target.checked } : disease)
    )
    this.setState({ diseasesList })
  }
  handleDateChange = birthdate => {
    const age = new Date().getFullYear() - birthdate.year()
    const prevState = this.state.personalInfo
    this.setState({ personalInfo: { ...prevState, birthdate, age } })
  }

  selectTab = (e, selectedTab) => {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab, personalInfo, medicalCondition, diseasesList } = this.state
    return (
      <Fragment>
        <AppBar color="default" position="static">
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            scrollable
            scrollButtons="on"
            value={selectedTab}
            onChange={this.selectTab}
          >
            <Tab label="Información Personal" />
            <Tab label="Condicion Medica" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={selectedTab} onChangeIndex={this.selectTab}>
          <TabContainer>
            <ChildForm
              state={personalInfo}
              onChange={this.onChange('personalInfo')}
              onDateChange={this.handleDateChange}
            />
          </TabContainer>
          <TabContainer>
            <MedicalForm
              state={medicalCondition}
              grade={personalInfo.grade}
              diseases={diseasesList}
              onChange={this.onChange('medicalCondition')}
              onToggleDesiese={this.onToggleDesiese}
            />
          </TabContainer>
        </SwipeableViews>
      </Fragment>
    )
  }
}

ChildInfo.propTypes = {}

export default ChildInfo
