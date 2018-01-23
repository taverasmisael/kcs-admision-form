import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Stepper from 'material-ui/Stepper'

import LocalStep from './LocalStep'

import AdmisionFinished from '../components/AdmisionFinished'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../App/styles'

import StepsLabels from './StepsLabels.json'

class AdmisionForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    currentStep: 0,
    skipped: new Set()
  }
  isStepperComplete = () => this.state.currentStep === StepsLabels.length

  isStepOptional = step => StepsLabels[step].optional

  isStepSkipped = step => this.state.skipped.has(step)
  mapSteps = stepsLabels =>
    stepsLabels.map((step, index) =>
      LocalStep({
        index,
        key: index,
        isFirst: index === 0,
        isLast: index === stepsLabels.length - 1,
        isSkipped: this.isStepSkipped(index),
        stepLabel: step,
        onSelectStep: this.handleSelectStep,
        onNext: this.handleNext,
        onPrev: this.handlePrev,
        onSkip: this.handleSkip
      })
    )
  handleFormSubmit = () => console.log('Finished')
  handleSelectStep = currentStep => () => this.setState({ currentStep })
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

  handlePrev = () => {
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
  render() {
    const { currentStep } = this.state
    return (
      <main>
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
