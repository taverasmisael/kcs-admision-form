import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
import CircularProgress from 'material-ui/Progress/CircularProgress'

const AdmisionFinished = ({ classes, loading, onSubmit }) => (
  <Fragment>
    <Typography className={classes.instructions}>All steps completed - you&quot;re finished</Typography>
    <div className={classes.wrapper}>
      <Button raised color="primary" className={classes.button} disabled={loading} onClick={onSubmit}>
        Enviar
      </Button>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  </Fragment>
)

AdmisionFinished.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(AdmisionFinished)
