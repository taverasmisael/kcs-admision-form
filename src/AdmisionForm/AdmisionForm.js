import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withStyles from 'material-ui/styles/withStyles'

import styles from './styles'

export class AdmisionForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    const { classes } = this.props
    return (
      <main className={classes.container}>
        Admision from
      </main>
    )
  }
}

export default withStyles(styles)(AdmisionForm)
