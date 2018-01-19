import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper'
import Typography from 'material-ui/Typography/Typography'

import { ChildrenInfo, ExtraInfo, FamilyInfo, ICEInfo, MedicalCondition, TutorInfo } from '../steps'

import AdmisionFinished from '../components/AdmisionFinished'
import StepActions from '../components/StepActions'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

import StepsLabels from './StepsLabels.json'

class AdmisionForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    currentStep: 0,
    skipped: new Set()
  }
  isStepperComplete = () => this.state.currentStep === StepsLabels.length

  isStepOptional = step => StepsLabels[step].optional

  isStepSkipped = step => this.state.skipped.has(step)
  mapSteps = stepsLabels =>
    stepsLabels.map((step, index) => (
      <Step key={index}>
        <StepLabel
          {...(this.isStepSkipped(index) ? { completed: false } : {})}
          optional={step.optional && <Typography type="caption">Si aplica (opcional)</Typography>}
        >
          {step.label}
        </StepLabel>
        <StepContent>{this.renderStep(index)}</StepContent>
      </Step>
    ))

  renderStep = step => (
    <React.Fragment>
      <this.renderStepContent step={step} />
      <StepActions
        step={step}
        isLastStep={step === StepsLabels.length - 1}
        isStepOptional={this.isStepOptional(step)}
        handleBack={this.handleBack}
        handleSkip={this.handleSkip}
        handleNext={this.handleNext}
      />
    </React.Fragment>
  )
  handleFormSubmit = () => console.log('Finished')

  handleNext = () => {
    let { skipped, currentStep } = this.state
    if (this.isStepSkipped(currentStep)) {
      skipped = new Set(skipped.values())
      skipped.delete(currentStep)
    }
    this.setState({
      currentStep: currentStep + 1,
      skipped
    })
  }

  handleBack = () => {
    this.setState({
      currentStep: this.state.currentStep - 1
    })
  }

  handleSkip = () => {
    let { currentStep, skipped } = this.state
    if (!this.isStepOptional(currentStep)) {
      throw new Error("You can't skip a step that isn't optional.")
    }
    skipped = new Set(skipped.values())
    skipped.add(currentStep)
    this.setState({
      currentStep: currentStep + 1,
      skipped
    })
  }

  renderStepContent = ({ step }) => {
    switch (step) {
      case 0:
        return <ChildrenInfo />
      case 1:
        return <FamilyInfo />
      case 2:
        return <TutorInfo />
      case 3:
        return <ICEInfo />
      case 4:
        return <ExtraInfo />
      default:
        return (
          <Typography type="caption" color="error">
            Error: Paso desconocido
          </Typography>
        )
    }
  }
  render() {
    const { classes } = this.props
    const { currentStep } = this.state
    return (
      <main className={classes.container}>
        <Stepper orientation="vertical" activeStep={currentStep}>
          {this.mapSteps(StepsLabels)}
        </Stepper>
        <React.Fragment>
          {this.isStepperComplete() && <AdmisionFinished onSubmit={this.handleFormSubmit} />}
        </React.Fragment>
      </main>
    )
  }
}

export default withStyles(styles)(AdmisionForm)
