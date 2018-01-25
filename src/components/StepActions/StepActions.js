import React from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
const StepActions = ({ classes, isFirstStep, isStepOptional, isLastStep, isNextDisabled, handleBack, handleSkip, handleNext }) => (
  <React.Fragment>
    <Button disabled={isFirstStep} onClick={handleBack} className={classes.button}>
      Atrás
    </Button>
    {isStepOptional && (
      <Button color="primary" onClick={handleSkip} className={classes.button}>
        Saltar
      </Button>
    )}
    <Button raised color="primary" onClick={handleNext} disabled={isNextDisabled}  className={classes.button}>
      {isLastStep ? 'Terminar' : 'Siguiente'}
    </Button>
  </React.Fragment>
)

StepActions.propTypes = {
  classes: PropTypes.object.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isStepOptional: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,
  isNextDisabled: PropTypes.bool.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleSkip: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
}

export default withStyles(styles)(StepActions)
