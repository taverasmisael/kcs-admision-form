import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import {
  ChildInfo,
  ExtraInfo,
  FatherInfo,
  MotherInfo,
  ICEInfo,
  TutorInfo,
  StepWrapper,
  PaymentInfo,
  MedicalInfo
} from '../../steps'

const LocalStep = ({
  index,
  states,
  onChange,
  onValidate,
  onChangeSikness,
  onChangeAlergies,
  onToggleDisease,
  onHardStateValidation,
  ...props
}) => {
  switch (index) {
    case 0:
      return (
        <ChildInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('childInfo'),
            onHardValidate: onHardStateValidation('childInfo'),
            onValidationError: onValidate('childValidations'),
            validations: states.childValidations,
            state: states.childInfo
          }}
          {...props}
        />
      )
    case 1:
      return (
        <MedicalInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('medicalInfo'),
            onChangeVaccine: onChange('vaccines'),
            onChangeAlergies: onChangeAlergies,
            onChangeSikness: onChangeSikness,
            onToggleDisease: onToggleDisease,
            onHardValidate: onHardStateValidation('medicalInfo'),
            onValidationError: onValidate('medicalValidations'),
            validations: states.medicalValidations,
            state: states.medicalInfo,
            diseases: states.diseases,
            alergies: states.alergies,
            vaccines: states.vaccines,
            sikness: states.sikness
          }}
          {...props}
        />
      )
    case 2:
      return (
        <ExtraInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('extraInfo'),
            onValidationError: onValidate('extraValidations'),
            onHardValidate: onHardStateValidation('extraInfo'),
            validations: states.extraValidations,
            state: states.extraInfo
          }}
          {...props}
        />
      )
    case 3:
      return (
        <FatherInfo
          stepIndex={index}
          componentProps={{
            state: states.fatherInfo,
            onChange: onChange('fatherInfo'),
            onValidationError: onValidate('fatherValidations'),
            validations: states.fatherValidations,
            onHardValidate: onHardStateValidation('fatherInfo'),
          }}
          {...props}
        />
      )
    case 4:
      return (
        <MotherInfo
          stepIndex={index}
          componentProps={{
            state: states.motherInfo,
            onChange: onChange('motherInfo'),
            onValidationError: onValidate('motherValidations'),
            validations: states.motherValidations,
            onHardValidate: onHardStateValidation('motherInfo'),
          }}
          {...props}
        />
      )
    case 5:
      return (
        <TutorInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('tutorInfo'),
            onValidationError: onValidate('tutorValidations'),
            onHardValidate: onHardStateValidation('tutorInfo'),
            validations: states.tutorValidations,
            state: states.tutorInfo
          }}
          {...props}
        />
      )
    case 6:
      return (
        <ICEInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('ICEInfo'),
            onValidationError: onValidate('ICEValidations'),
            onHardValidate: onHardStateValidation('ICEInfo'),
            validations: states.ICEValidations,
            state: states.ICEInfo
          }}
          {...props}
        />
      )
    case 7:
      return (
        <PaymentInfo
          stepIndex={index}
          componentProps={{ state: states.paymentInfo, onChange: onChange('paymentInfo') }}
          {...props}
        />
      )
    default:
      return (
        <Typography type="caption" color="error">
          Error: Paso desconocido
        </Typography>
      )
  }
}

LocalStep.propTypes = {
  index: PropTypes.number.isRequired,
  states: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
  onToggleDisease: PropTypes.func.isRequired,
  onHardStateValidation: PropTypes.func.isRequired,
  ...StepWrapper().propTypes
}

export default LocalStep
