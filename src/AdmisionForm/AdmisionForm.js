import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Stepper from 'material-ui/Stepper'

import LocalStep from './LocalStep'

import AdmisionFinished from '../components/AdmisionFinished'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../App/styles'

import { throttle } from '../utilities'

import StepsLabels from './StepsLabels.json'
import { ChildModel, ChildValidations } from '../forms/ChildForm'
import { ParentModel, ParentValidations } from '../forms/ParentForm'
import { TutorModel, TutorValidations } from '../forms/TutorForm'
import { ICEModel, ICEValidations } from '../forms/ICEForm'
import { ExtraModel } from '../forms/ExtraForm'

class AdmisionForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    currentStep: 0,
    skipped: new Set(),
    childInfo: ChildModel,
    childValidations: ChildValidations,
    fatherInfo: ParentModel,
    fatherValidations: ParentValidations,
    motherInfo: ParentModel,
    motherValidations: ParentValidations,
    tutorInfo: TutorModel,
    tutorValidations: TutorValidations,
    ICEInfo: ICEModel,
    ICEValidations: ICEValidations,
    extraInfo: ExtraModel
  }

  isStepperComplete = () => this.state.currentStep === StepsLabels.length

  isStepOptional = step => StepsLabels[step].optional

  isStepSkipped = step => this.state.skipped.has(step)
  mapSteps = stepsLabels =>
    stepsLabels.map((step, index) =>
      LocalStep({
        index,
        states: this.state,
        key: index,
        isFirst: index === 0,
        isLast: index === stepsLabels.length - 1,
        isSkipped: this.isStepSkipped(index),
        stepLabel: step,
        onChange: this.handleChanges,
        onValidate: this.handleValidations,
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

  handleChanges = slice =>
    throttle(({ target }) => {
      const { name, value: v } = target
      const value = target.type === 'checkbox' ? target.checked : v
      const prevState = this.state[slice]
      this.setState({
        [slice]: {
          ...prevState,
          [name]: value
        }
      })
    }, 2000)

  handleValidations = slice =>
    throttle(({ name, value }) => {
      const prevState = this.state[slice]
      console.log('handling', name)
      this.setState(
        {
          [slice]: {
            ...prevState,
            [name]: value
          }
        },
        () => {
          const currentState = this.state[slice]
          const keys = Object.keys(currentState)
          let isValid = true
          keys.forEach(k => {
            const isError = currentState[k].error === undefined ? false : currentState[k].error
            isValid = isError === isValid ? true : false
          })
          isValid = keys.length % 2 ? isValid === false : isValid
          this.setState({
            [slice]: {
              ...currentState,
              isValid
            }
          })
        }
      )
    }, 2000)

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
