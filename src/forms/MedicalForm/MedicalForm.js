import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

const MedicalForm = ({ state, grade, onChange, classes }) => {
  return <h1>MEDICAL</h1>
}
MedicalForm.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  grade: PropTypes.number
}

export default withStyles(styles)(MedicalForm)
