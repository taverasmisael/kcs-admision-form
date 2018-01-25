import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Step from 'material-ui/Stepper/Step'
import StepButton from 'material-ui/Stepper/StepButton'
import StepContent from 'material-ui/Stepper/StepContent'
import Typography from 'material-ui/Typography'

import compare from 'just-compare'

import StepActions from '../../components/StepActions'

const StepWrapper = WrapedComponent =>
  class Enhancer extends PureComponent {
    static propTypes = {
      componentProps: PropTypes.object,
      stepIndex: PropTypes.number.isRequired,
      stepLabel: PropTypes.shape({
        label: PropTypes.string.isRequired,
        optional: PropTypes.bool.isRequired
      }),
      isLast: PropTypes.bool.isRequired,
      isFirst: PropTypes.bool.isRequired,
      isSkipped: PropTypes.bool.isRequired,
      onSelectStep: PropTypes.func.isRequired,
      onNext: PropTypes.func.isRequired,
      onPrev: PropTypes.func.isRequired,
      onSkip: PropTypes.func.isRequired
    }
    render() {
      const {
        stepIndex,
        stepLabel,
        isLast,
        isFirst,
        isSkipped,
        onSelectStep,
        onNext,
        onPrev,
        onSkip,
        componentProps,
        ...props
      } = this.props
      const isNextDisabled = !(componentProps.validations && componentProps.validations.isValid)
      return (
        <Step key={stepIndex} {...(isSkipped ? { ...props, completed: false } : props)}>
          <StepButton
            onClick={onSelectStep(stepIndex)}
            optional={
              stepLabel.optional && (
                <Typography type="caption" align="left">
                  Si aplica (opcional)
                </Typography>
              )
            }
          >
            {stepLabel.label}
          </StepButton>
          <StepContent>
            <WrapedComponent {...componentProps} />
            <StepActions
              isStepOptional={stepLabel.optional}
              isNextDisabled={isNextDisabled}
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
