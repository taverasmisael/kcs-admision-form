import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
import ParentForm, { ParentModel } from '../../components/ParentForm'
export class FamilyInfo extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    father: ParentModel,
    mother: ParentModel
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
  render() {
    const { father, mother } = this.state
    return (
      <Fragment>
        <ParentForm parent="Padre" state={father} onChange={this.handleChange('father')} />
        <ParentForm parent="Madre" state={mother} onChange={this.handleChange('mother')} />
      </Fragment>
    )
  }
}

export default withStyles(styles)(FamilyInfo)
