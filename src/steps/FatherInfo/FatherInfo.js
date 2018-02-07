import React from 'react'
import PropTypes from 'prop-types'

import ParentInfo from '../ParentInfo'

const FatherInfo = props => <ParentInfo parent="Padre" {...props} />

FatherInfo.propTypes = {
  state: PropTypes.object.isRequired,
  validations: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onValidationError: PropTypes.func.isRequired,
  onHardValidate: PropTypes.func.isRequired
}

export default FatherInfo
