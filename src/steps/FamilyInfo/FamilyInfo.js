import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import SwipeableViews from 'react-swipeable-views'
import AppBar from 'material-ui/AppBar/AppBar'
import Tabs from 'material-ui/Tabs/Tabs'
import Tab from 'material-ui/Tabs/Tab'

import ParentForm, { ParentModel } from '../../components/ParentForm'
import TabContainer from '../../components/TabContainer'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

export class FamilyInfo extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    father: ParentModel,
    mother: ParentModel,
    selectedParent: 0
  }
  handleChange = parent => ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v
    const prevState = this.state[parent]
    this.setState({
      [parent]: {
        ...prevState,
        [name]: value
      }
    })
  }

  selectParent = (e, selectedParent) => {
    this.setState({ selectedParent })
  }
  render() {
    const { father, mother, selectedParent } = this.state
    return (
      <Fragment>
        <AppBar color="default" position="static">
          <Tabs indicatorColor="primary" textColor="primary" value={selectedParent} onChange={this.selectParent}>
            <Tab label="Padre" />
            <Tab label="Madre" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={selectedParent} onChangeIndex={this.selectParent}>
          <TabContainer>
            <ParentForm parent="Padre" state={father} onChange={this.handleChange('father')} />
          </TabContainer>
          <TabContainer>
            <ParentForm parent="Madre" state={mother} onChange={this.handleChange('mother')} />
          </TabContainer>
        </SwipeableViews>
      </Fragment>
    )
  }
}

export default withStyles(styles)(FamilyInfo)
