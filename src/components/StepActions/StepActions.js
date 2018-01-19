import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
const StepActions = ({ step, classes, isStepOptional, isLastStep, handleBack, handleSkip, handleNext }) => (
  <React.Fragment>
    <Button disabled={step === 0} onClick={handleBack} className={classes.button}>
      Atrás
    </Button>
    {isStepOptional && (
      <Button color="primary" onClick={handleSkip} className={classes.button}>
        Saltar
      </Button>
    )}
    <Button raised color="primary" onClick={handleNext} className={classes.button}>
      {isLastStep ? 'Terminar' : 'Siguiente'}
    </Button>
  </React.Fragment>
)

StepActions.propTypes = {
  step: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  isStepOptional: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleSkip: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
}

export default withStyles(styles)(StepActions)
