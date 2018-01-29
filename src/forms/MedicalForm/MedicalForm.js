import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid/Grid'
import Typography from 'material-ui/Typography/Typography'

import TextField from '../../components/TextField'
import TelField from '../../components/TelField'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'
import DiseasesBox from './DiseasesBox'
import VaccineCard from './VaccineCard'

const MedicalForm = props => {
  const {
    state,
    grade,
    diseases,
    vaccines,
    sikness,
    onChange,
    onChangeSikness,
    onChangeVaccine,
    onToggleDesiese,
    classes
  } = props
  const lastSikness = sikness[sikness.length - 1]
  return (
    <Fragment>
      <Typography type="headline">Condición Medica</Typography>
      <Grid container spacing={16} className={classes.inputContainer}>
        <Grid item xs={12} sm={8} md={10}>
          <TextField
            id="fullName"
            name="fullName"
            label="Nombre Completo"
            className={classes.textField}
            value={state.fullName}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <TextField
            id="childGrade"
            name="childGrade"
            label="Grado"
            className={classes.textField}
            value={grade}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="bloodType"
            name="bloodType"
            label="Tipo de sangre"
            length="4"
            className={classes.textField}
            value={state.bloodType}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="doctorName"
            name="doctorName"
            label="Nombre del pediatra"
            className={classes.textField}
            value={state.doctorName}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TelField
            id="doctorPhone"
            name="doctorPhone"
            label="Teléfono del pediatra"
            className={classes.textField}
            value={state.doctorPhone}
            onChange={onChange}
          />
        </Grid>
      </Grid>
      <Typography type="title">Enfermedades que ha tenido</Typography>
      <Grid container spacing={16} className={classes.inputContainer}>
        <DiseasesBox diseases={diseases} onChange={onToggleDesiese} />
      </Grid>
      <Grid container spacing={16} className={classes.inputContainer}>
        <VaccineCard vaccines={vaccines} onChange={onChangeVaccine} />
      </Grid>
      <Typography type="title">¿Padece de alguna de estas enfermedades?</Typography>
      <Grid container spacing={16} className={classes.inputContainer}>
        <DiseasesBox diseases={sikness} onChange={onChangeSikness} />
        {lastSikness.checked ? (
          <Grid item xs={6} sm={9} md={6}>
            <TextField
              id="specialSikness"
              name="specialSikness"
              label="Por favor especificar"
              className={classes.textField}
              value={state.specialSikness}
              onChange={onChange}
            />
          </Grid>
        ) : null}
      </Grid>
    </Fragment>
  )
}
MedicalForm.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    bloodType: PropTypes.string.isRequired,
    doctorName: PropTypes.string.isRequired,
    doctorPhone: PropTypes.string.isRequired
  }).isRequired,
  grade: PropTypes.number,
  vaccines: PropTypes.shape({}),
  sikness: PropTypes.arrayOf(PropTypes.object),
  diseases: PropTypes.arrayOf(PropTypes.object),
  onChangeSikness: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeVaccine: PropTypes.func.isRequired,
  onToggleDesiese: PropTypes.func.isRequired
}

export default withStyles(styles)(MedicalForm)
