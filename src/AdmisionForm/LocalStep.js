import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { ChildInfo, ExtraInfo, FamilyInfo, ICEInfo, TutorInfo, StepWrapper } from '../steps'

const LocalStep = ({ index, states, onChange, onValidate, onChangeSikness, onToggleDisease, ...props }) => {
  switch (index) {
    case 0:
      return (
        <ChildInfo
          stepIndex={index}
          componentProps={{
            onChangeChild: onChange('childInfo'),
            onChangeMedical: onChange('medicalInfo'),
            onChangeVaccine: onChange('vaccines'),
            onValidationError: onValidate('childValidations'),
            onChangeSikness: onChangeSikness,
            onToggleDisease: onToggleDisease,
            validations: states.childValidations,
            childInfo: states.childInfo,
            medicalInfo: states.medicalInfo,
            diseases: states.diseases,
            vaccines: states.vaccines,
            sikness: states.sikness
          }}
          {...props}
        />
      )
    case 1:
      return (
        <FamilyInfo
          stepIndex={index}
          componentProps={{
            fatherInfo: states.fatherInfo,
            onFatherChange: onChange('fatherInfo'),
            onFatherValidationError: onValidate('fatherValidations'),
            fatherValidations: states.fatherValidations,
            motherInfo: states.motherInfo,
            onMotherChange: onChange('motherInfo'),
            onMotherValidationError: onValidate('motherValidations'),
            motherValidations: states.motherValidations
          }}
          {...props}
        />
      )
    case 2:
      return (
        <TutorInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('tutorInfo'),
            onValidationError: onValidate('tutorValidations'),
            validations: states.tutorValidations,
            state: states.tutorInfo
          }}
          {...props}
        />
      )
    case 3:
      return (
        <ICEInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('ICEInfo'),
            onValidationError: onValidate('ICEValidations'),
            validations: states.ICEValidations,
            state: states.ICEInfo
          }}
          {...props}
        />
      )
    case 4:
      return (
        <ExtraInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('extraInfo'),
            onValidationError: onValidate('extraValidations'),
            validations: states.extraValidations,
            state: states.extraInfo
          }}
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
  ...StepWrapper().propTypes
}

export default LocalStep
