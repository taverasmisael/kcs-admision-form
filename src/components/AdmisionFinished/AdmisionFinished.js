import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const AdmisionFinished = ({ classes, onSubmit }) => (
  <React.Fragment>
    <Typography className={classes.instructions}>All steps completed - you&quot;re finished</Typography>
    <Button color="primary" raised onClick={onSubmit} className={classes.button}>
      Enviar
    </Button>
  </React.Fragment>
)

AdmisionFinished.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(AdmisionFinished)
