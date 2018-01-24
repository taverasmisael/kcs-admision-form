import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import SwipeableViews from 'react-swipeable-views'
import AppBar from 'material-ui/AppBar/AppBar'
import Tabs from 'material-ui/Tabs/Tabs'
import Tab from 'material-ui/Tabs/Tab'

import compare from 'just-compare'

import ParentForm from '../../forms/ParentForm'
import TabContainer from '../../components/TabContainer'

import { debounce } from '../../utilities'
import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

export class FamilyInfo extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    fatherInfo: PropTypes.object.isRequired,
    motherInfo: PropTypes.object.isRequired,
    onMotherChange: PropTypes.func.isRequired,
    onFatherChange: PropTypes.func.isRequired
  }

  state = {
    selectedTab: 0
  }
  handleChange = parent => ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v

    this.props.onChange({
      target: {
        name,
        value
      }
    })
  }
  onFatherChange = event => {
    const { name, value: v } = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : v
    this.setState(
      state => ({
        ...state,
        fatherInfo: {
          ...state.fatherInfo,
          [name]: value
        }
      }),
      debounce(this.props.onFatherChange.bind(this, { target: { name, value } }), 4000)
    )
  }

  selectTab = (e, selectedTab) => {
    this.setState({ selectedTab })
  }
  onMotherChange = event => {
    const { name, value: v } = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : v
    this.setState(
      state => ({
        ...state,
        motherInfo: {
          ...state.motherInfo,
          [name]: value
        }
      }),
      debounce(this.props.onMotherChange.bind(this, { target: { name, value } }), 4000)
    )
  }

  componentWillMount() {
    const { fatherInfo, motherInfo } = this.props
    this.setState({ fatherInfo, motherInfo })
  }
  componentWillReceiveProps(nextProps) {
    const { fatherInfo, motherInfo } = nextProps
    if (!compare(fatherInfo, this.state.fatherInfo) && !compare(motherInfo, this.state.motherInfo)) {
      this.setState({ fatherInfo, motherInfo })
    }
  }

  render() {
    const { fatherInfo, motherInfo, selectedTab } = this.state
    const { onFatherChange, onMotherChange } = this
    return (
      <Fragment>
        <AppBar color="default" position="static">
          <Tabs indicatorColor="primary" textColor="primary" value={selectedTab} onChange={this.selectTab}>
            <Tab label="Padre" />
            <Tab label="Madre" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={selectedTab} onChangeIndex={this.selectTab}>
          <TabContainer>
            {selectedTab === 0 ? <ParentForm parent="Padre" state={fatherInfo} onChange={onFatherChange} /> : null}
          </TabContainer>
          <TabContainer>
            {selectedTab === 1 ? <ParentForm parent="Madre" state={motherInfo} onChange={onMotherChange} /> : null}
          </TabContainer>
        </SwipeableViews>
      </Fragment>
    )
  }
}

export default withStyles(styles)(FamilyInfo)
