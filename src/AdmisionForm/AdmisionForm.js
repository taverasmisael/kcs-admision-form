import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Stepper from 'material-ui/Stepper'
import LocalStep from '../components/LocalStep'
import AdmisionFinished from '../components/AdmisionFinished'

import { throttle } from '../utilities'
import { SendEmail } from '../services/api'
import MapInfo from '../services/mapInfo'

import { ChildModel, ChildValidations } from '../forms/ChildForm'
import { MedicalModel, MedicalValidations } from '../forms/MedicalForm'
import { ParentModel, ParentValidations } from '../forms/ParentForm'
import { TutorModel, TutorValidations } from '../forms/TutorForm'
import { ICEModel, ICEValidations } from '../forms/ICEForm'
import { ExtraModel } from '../forms/ExtraForm'
import { PaymentModel } from '../forms/PaymentForm'

import stepsList from '../lists/steps'
import diseasesList from '../lists/diseases'
import siknessList from '../lists/sikness'
import vaccinesList from '../lists/vaccines'
import alergiesList from '../lists/alergies'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../App/styles'

class AdmisionForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    currentStep: 0,
    sendingEmail: false,
    skipped: new Set(),
    emailSucces: 0,
    emailError: '',
    childInfo: ChildModel,
    childValidations: ChildValidations,
    medicalInfo: MedicalModel,
    medicalValidations: MedicalValidations,
    diseases: diseasesList,
    alergies: alergiesList,
    sikness: siknessList,
    vaccines: vaccinesList,
    fatherInfo: ParentModel,
    fatherValidations: ParentValidations,
    motherInfo: ParentModel,
    motherValidations: ParentValidations,
    tutorInfo: TutorModel,
    tutorValidations: TutorValidations,
    ICEInfo: ICEModel,
    ICEValidations: ICEValidations,
    extraInfo: ExtraModel,
    paymentInfo: PaymentModel
  }

  isStepperComplete = () => this.state.currentStep === stepsList.length

  isStepOptional = step => stepsList[step].optional

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
        onChangeSikness: this.handleChangeSikness,
        onChangeAlergies: this.handleChangeAlergies,
        onValidate: this.handleValidations,
        onToggleDisease: this.handleToggleDisease,
        onSelectStep: this.handleSelectStep,
        onNext: this.handleNext,
        onPrev: this.handlePrev,
        onSkip: this.handleSkip
      })
    )

  handleResetForm = () => {
    this.setState({
      childInfo: ChildModel,
      childValidations: ChildValidations,
      sendingEmail: false,
      emailSucces: 0,
      emailError: '',
      currentStep: 0
    })
  }
  handleFormSubmit = () => {
    const info = MapInfo(this.state)
    const emailSucces = this.state.paymentInfo.admisionPaymentModel !== 'D' ? 1 : 2
    this.setState({ sendingEmail: true, emailSucces: 0, emailError: '' })
    SendEmail(info)
      .then(response => {
        this.setState({ sendingEmail: false, emailSucces })
      })
      .catch(err => {
        this.setState({ sendingEmail: false, emailError: err.message })
      })
  }
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

  handleChangeAlergies = ({ target }) => {
    const { name, checked } = target
    let alergies = this.state.alergies
    if (name === 'Otro' && checked) {
      alergies = alergies.map(s => (s.label !== name ? { ...s, checked: false } : { ...s, checked }))
    } else {
      alergies = alergies.map(
        s => (s.label === name ? { ...s, checked } : s.label === 'Otro' ? { ...s, checked: false } : s)
      )
    }
    this.setState({ alergies })
  }
  handleChangeSikness = ({ target }) => {
    const { name, checked } = target
    let sikness
    if (name === 'Otro' && checked) {
      sikness = this.state.sikness.map(s => (s.label !== name ? { ...s, checked: false } : { ...s, checked }))
    } else {
      sikness = this.state.sikness.map(
        s => (s.label === name ? { ...s, checked } : s.label === 'Otro' ? { ...s, checked: false } : s)
      )
    }
    this.setState({ sikness })
  }

  handleToggleDisease = ({ target }) => {
    const { name, checked } = target
    const diseases = this.state.diseases.map(d => (d.label === name ? { ...d, checked } : d))
    this.setState({ diseases })
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
      this.setState(
        {
          [slice]: {
            ...prevState,
            [name]: value
          }
        },
        () => {
          const currentState = this.state[slice]
          let isValid = !Object.keys(currentState).find(k => k !== 'isValid' && currentState[k].error)
          this.setState({
            [slice]: {
              ...currentState,
              isValid: { error: !isValid }
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
          {this.mapSteps(stepsList)}
        </Stepper>
        <React.Fragment>
          {this.isStepperComplete() && (
            <AdmisionFinished
              loading={this.state.sendingEmail}
              error={this.state.emailError}
              success={this.state.emailSucces}
              onSubmit={this.handleFormSubmit}
              resetForm={this.handleResetForm}
            />
          )}
        </React.Fragment>
      </main>
    )
  }
}

export default withStyles(styles)(AdmisionForm)
