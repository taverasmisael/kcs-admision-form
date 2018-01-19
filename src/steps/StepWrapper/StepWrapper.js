import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Step from 'material-ui/Stepper/Step'
import StepLabel from 'material-ui/Stepper/StepLabel'
import StepContent from 'material-ui/Stepper/StepContent'
import Typography from 'material-ui/Typography'

import StepActions from '../../components/StepActions'

const StepWrapper = WrapedComponent =>
  class Enhancer extends PureComponent {
    static propTypes = {
      stepLabel: PropTypes.shape({
        label: PropTypes.string.isRequired,
        optional: PropTypes.bool.isRequired
      }),
      isLast: PropTypes.bool.isRequired,
      isFirst: PropTypes.bool.isRequired,
      isSkipped: PropTypes.bool.isRequired,
      onNext: PropTypes.func.isRequired,
      onPrev: PropTypes.func.isRequired,
      onSkip: PropTypes.func.isRequired
    }
    render() {
      const { stepLabel, isLast, isFirst, isSkipped, onNext, onPrev, onSkip, ...rest } = this.props
      console.log(isSkipped)
      return (
        <Step key={0} {...(isSkipped ? { ...rest, completed: false } : rest)}>
          <StepLabel optional={stepLabel.optional && <Typography type="caption">Si aplica (opcional)</Typography>}>
            {stepLabel.label}
          </StepLabel>
          <StepContent>
            <WrapedComponent />
            <StepActions
              isStepOptional={stepLabel.optional}
              isLastStep={isLast}
              isFirstStep={isFirst}
              handleBack={onPrev}
              handleSkip={onSkip}
              handleNext={onNext}
            />
          </StepContent>
        </Step>
      )
    }
  }

export default StepWrapper
