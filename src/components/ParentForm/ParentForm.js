import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Switch from 'material-ui/Switch'

import { AcademicLevels, CivilStatus } from './Data.json'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
import MenuItem from 'material-ui/Menu/MenuItem'

const ParentForm = ({ parent, state, classes, onChange }) => {
  return (
    <Fragment>
      <Typography type="headline">{parent}</Typography>
      <Grid container spacing={16} className={classes.inputContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}Lastname`}
            name="lastname"
            label="Apellidos"
            margin="normal"
            className={classes.textField}
            value={state.lastname}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}Name`}
            name="name"
            label="Nombres"
            margin="normal"
            className={classes.textField}
            value={state.name}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}CivilStatus`}
            name="civilStatus"
            label="Estado Civil"
            margin="normal"
            className={classes.textField}
            value={state.civilStatus}
            onChange={onChange}
            select
            required
          >
            {CivilStatus.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}EducativeLevel`}
            name="educativeLevel"
            label="Nivel Educativo"
            margin="normal"
            className={classes.textField}
            value={state.educativeLevel}
            onChange={onChange}
            select
            required
          >
            {AcademicLevels.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={16} className={classes.inputContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id={`${parent}Address`}
            name="address"
            label="Dirección"
            margin="normal"
            className={classes.textField}
            value={state.address}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            id={`${parent}Sector`}
            name="sector"
            label="Sector"
            margin="normal"
            className={classes.textField}
            value={state.sector}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}Phone`}
            name="phone"
            label="Tel. Casa"
            type="tel"
            margin="normal"
            className={classes.textField}
            value={state.phone}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}Cellphone`}
            name="cellphone"
            label="Celular"
            type="tel"
            margin="normal"
            className={classes.textField}
            value={state.cellphone}
            onChange={onChange}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={16} className={classes.inputContainer}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}WorkName`}
            name="workName"
            label="Lugar de trabajo"
            margin="normal"
            className={classes.textField}
            value={state.workName}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}WorkPosition`}
            name="workPosition"
            label="Puesto que ocupa"
            margin="normal"
            className={classes.textField}
            value={state.workPosition}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}WorkPhone`}
            name="workPhone"
            label="Tel. Oficina"
            type="tel"
            margin="normal"
            className={classes.textField}
            value={state.workPhone}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            id={`${parent}WorkPhoneExt`}
            name="workPhoneExt"
            label="Ext."
            type="tel"
            margin="normal"
            className={classes.textField}
            value={state.workPhoneExt}
            onChange={onChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={16} className={classes.inputContainer}>
        <Grid item xs={12} sm={6} md={3} className={classes.checkbox}>
          <FormControlLabel
            control={
              <Switch
                name="isChristian"
                checked={state.isChristian}
                onChange={onChange}
                aria-label="Es usted Cristiano?"
              />
            }
            label="¿Es usted cristiano?"
          />
        </Grid>
        {state.isChristian ? christianInfo(parent, state, onChange, classes) : null}
      </Grid>
    </Fragment>
  )
}

function christianInfo(parent, state, handleChange, classes) {
  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id={`${parent}ChurchName`}
          name="churchName"
          label="Iglesia a la que asiste"
          margin="normal"
          className={classes.textField}
          value={state.churchName}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id={`${parent}PastorName`}
          name="pastorName"
          label="Nombre del pastor"
          margin="normal"
          className={classes.textField}
          value={state.pastorName}
          onChange={handleChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id={`${parent}ChurchService`}
          name="churchService"
          label="Area de servicio en la iglesia"
          margin="normal"
          className={classes.textField}
          value={state.churchService}
          onChange={handleChange}
          required
        />
      </Grid>
    </Fragment>
  )
}

ParentForm.propTypes = {
  parent: PropTypes.string.isRequired,
  state: PropTypes.shape({
    lastname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    civilStatus: PropTypes.string.isRequired,
    educativeLevel: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    sector: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    cellphone: PropTypes.string.isRequired,
    workName: PropTypes.string.isRequired,
    workPosition: PropTypes.string.isRequired,
    workPhone: PropTypes.string.isRequired,
    workPhoneExt: PropTypes.string.isRequired,
    churchName: PropTypes.string.isRequired,
    pastorName: PropTypes.string.isRequired,
    churchService: PropTypes.string.isRequired,
    isChristian: PropTypes.bool.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(ParentForm)
