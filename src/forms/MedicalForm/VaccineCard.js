import React from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid/Grid'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Checkbox from 'material-ui/Checkbox/Checkbox'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

const VaccineCard = ({ vacineList = [], onChange, classes }) =>
  vacineList.map((disease, index) => {
    return (
      <Grid key={index} item xs={6} sm={3} md={2} className={classes.checkbox}>
        <FormControlLabel
          control={<Checkbox name={disease.label} title={disease.label} checked={disease.checked} onChange={onChange} />}
          label={disease.label}
        />
      </Grid>
    )
  })

VaccineCard.propTypes = {
  vacineList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  ),
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VaccineCard)
