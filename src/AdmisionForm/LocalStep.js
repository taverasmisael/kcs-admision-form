import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { ChildInfo, ExtraInfo, FamilyInfo, ICEInfo, TutorInfo, StepWrapper } from '../steps'

const LocalStep = ({ index, states, onChange, onValidate, ...props }) => {
  switch (index) {
    case 0:
      return (
        <ChildInfo
          stepIndex={index}
          componentProps={{
            onChange: onChange('childInfo'),
            onValidationError: onValidate('childValidations'),
            state: states.childInfo
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
            motherInfo: states.motherInfo,
            onMotherChange: onChange('motherInfo'),
            onMotherValidationError: onValidate('fatherValidations')
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
  ...StepWrapper().propTypes
}

export default LocalStep
