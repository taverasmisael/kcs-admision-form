import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { ChildInfo, ExtraInfo, FamilyInfo, ICEInfo, TutorInfo, StepWrapper, PaymentInfo } from '../../steps'

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
            onChangeChild: onChange('childInfo'),
            onHardChildValidate: onHardStateValidation('childInfo'),
            onChangeMedical: onChange('medicalInfo'),
            onHardMedicalValidate: onHardStateValidation('medicalInfo'),
            onChangeVaccine: onChange('vaccines'),
            onChangeAlergies: onChangeAlergies,
            onValidationChildError: onValidate('childValidations'),
            onValidationMedicalError: onValidate('medicalValidations'),
            onChangeSikness: onChangeSikness,
            onToggleDisease: onToggleDisease,
            childValidations: states.childValidations,
            medicalValidations: states.medicalValidations,
            childInfo: states.childInfo,
            medicalInfo: states.medicalInfo,
            diseases: states.diseases,
            alergies: states.alergies,
            vaccines: states.vaccines,
            sikness: states.sikness
          }}
          {...props}
        />
      )
    case 1:
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
    case 2:
      return (
        <FamilyInfo
          stepIndex={index}
          componentProps={{
            fatherInfo: states.fatherInfo,
            onFatherChange: onChange('fatherInfo'),
            onFatherValidationError: onValidate('fatherValidations'),
            fatherValidations: states.fatherValidations,
            onHardFatherValidate: onHardStateValidation('fatherInfo'),
            motherInfo: states.motherInfo,
            onMotherChange: onChange('motherInfo'),
            onMotherValidationError: onValidate('motherValidations'),
            onHardMotherValidate: onHardStateValidation('motherInfo'),
            motherValidations: states.motherValidations
          }}
          {...props}
        />
      )
    case 3:
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
    case 4:
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
    case 5:
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
