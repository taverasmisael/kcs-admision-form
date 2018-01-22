import React from 'react'
import PropTypes from 'prop-types'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const TabContainer = ({ classes, children }) => <div className={classes.container}> {children}</div>

TabContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element
}

export default withStyles(styles)(TabContainer)
