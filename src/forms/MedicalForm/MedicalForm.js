import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid/Grid'
import Typography from 'material-ui/Typography/Typography'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Checkbox from 'material-ui/Checkbox/Checkbox'

import FormBoundary from '../FormBoundary/FormBoundary'
import TextField from '../../components/TextField'
import TelField from '../../components/TelField'
import DatePicker from '../../components/DatePicker/DatePicker'
import DiseasesBox from '../../components/DiseasesBox'
import VaccineCard from '../../components/VaccineCard'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'
class MedicalForm extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      bloodType: PropTypes.string.isRequired,
      doctorName: PropTypes.string.isRequired,
      doctorPhone: PropTypes.string.isRequired
    }).isRequired,
    vaccines: PropTypes.shape({}),
    sikness: PropTypes.arrayOf(PropTypes.object),
    diseases: PropTypes.arrayOf(PropTypes.object),
    alergies: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func.isRequired,
    onChangeAlergies: PropTypes.func.isRequired,
    onChangeSikness: PropTypes.func.isRequired,
    onChangeVaccine: PropTypes.func.isRequired,
    onToggleDesiese: PropTypes.func.isRequired
  }
  onDateChange = momentDate => {
    const value = momentDate.toISOString()
    this.props.onChange({ target: { name: 'operationDate', value } })
  }
  render() {
    const {
      state,
      diseases,
      vaccines,
      alergies,
      sikness,
      onChange,
      onChangeSikness,
      onChangeVaccine,
      onToggleDesiese,
      onChangeAlergies,
      onValidationError,
      validations,
      classes
    } = this.props
    const lastSikness = sikness[sikness.length - 1]
    const lastAlergy = alergies[alergies.length - 1]
    return (
      <FormBoundary onValidationError={onValidationError} validations={validations}>
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
              required
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <TextField
              id="bloodType"
              name="bloodType"
              label="Tipo de sangre"
              length="4"
              className={classes.textField}
              value={state.bloodType}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <TextField
              id="doctorName"
              name="doctorName"
              label="Nombre del pediatra"
              className={classes.textField}
              value={state.doctorName}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TelField
              id="doctorPhone"
              name="doctorPhone"
              label="Teléfono del pediatra"
              className={classes.textField}
              value={state.doctorPhone}
              onChange={onChange}
              required
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
        <Typography type="title">¿Padece de alguna de estas alergias?</Typography>
        <Grid container spacing={16} className={classes.inputContainer}>
          <DiseasesBox diseases={alergies} onChange={onChangeAlergies} />
          {lastAlergy.checked ? (
            <Grid item xs={6} sm={9} md={6}>
              <TextField
                id="specialAlergy"
                name="specialAlergy"
                label="Por favor especificar"
                className={classes.textField}
                value={state.specialAlergy}
                onChange={onChange}
              />
            </Grid>
          ) : null}
        </Grid>
        <Grid container spacing={16} className={classes.inputContainer}>
          <Grid item xs={12}>
            <TextField
              id="medication"
              name="medication"
              label="Medicamento(s) que use"
              className={classes.textField}
              value={state.medication}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} className={classes.inputContainer}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="hasOperation"
                  title="Ha sido operado"
                  checked={state.hasOperation}
                  onChange={onChange}
                />
              }
              label="¿El alumno ha sido intervenido quirúrgicamente?"
            />
          </Grid>
          {state.hasOperation ? (
            <Grid container spacing={16}>
              <Grid item xs={8}>
                <TextField
                  id="operationName"
                  name="operationName"
                  label="¿De qué fue la cirujía?"
                  className={classes.textField}
                  value={state.operationName}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={4}>
                <DatePicker
                  id="operationDae"
                  name="operationDae"
                  label="Fecha"
                  className={classes.textField}
                  value={state.operationDate}
                  onChange={this.onDateChange}
                />
              </Grid>
            </Grid>
          ) : null}
          <Typography type="title">Información Extra</Typography>
          <Grid item xs={12}>
            <TextField
              id="medicalExtra"
              name="medicalExtra"
              label="Alguna otra información que pueda ser importante para Dpto. de Enfermería:"
              className={classes.textField + ' ' + classes.textarea}
              inputProps={{ className: classes.textarea }}
              value={state.medicalExtra}
              onChange={onChange}
              multiline
            />
          </Grid>
        </Grid>
      </FormBoundary>
    )
  }
}

export default withStyles(styles)(MedicalForm)
