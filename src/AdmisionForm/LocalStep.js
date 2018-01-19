import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'

import { ChildrenInfo, ExtraInfo, FamilyInfo, ICEInfo, TutorInfo, StepWrapper } from '../steps'

const LocalStep = ({ index, ...props }) => {
  switch (index) {
    case 0:
      return <ChildrenInfo {...props} />
    case 1:
      return <FamilyInfo {...props} />
    case 2:
      return <TutorInfo {...props} />
    case 3:
      return <ICEInfo {...props} />
    case 4:
      return <ExtraInfo {...props} />
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
  ...StepWrapper().propTypes
}

export default LocalStep
