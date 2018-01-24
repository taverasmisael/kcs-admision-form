import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { ChildInfo, ExtraInfo, FamilyInfo, ICEInfo, TutorInfo, StepWrapper } from '../steps'

const LocalStep = ({ index, states, onChange, ...props }) => {
  switch (index) {
    case 0:
      return <ChildInfo stepIndex={index} {...props} />
    case 1:
      return (
        <FamilyInfo
          stepIndex={index}
          componentProps={{
            fatherInfo: states.fatherInfo,
            onFatherChange: onChange('fatherInfo'),
            motherInfo: states.motherInfo,
            onMotherChange: onChange('motherInfo')
          }}
          {...props}
        />
      )
    case 2:
      return <TutorInfo stepIndex={index} {...props} />
    case 3:
      return <ICEInfo stepIndex={index} {...props} />
    case 4:
      return <ExtraInfo stepIndex={index} {...props} />
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
