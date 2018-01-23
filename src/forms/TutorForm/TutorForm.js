import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import TextField from '../../components/TextField/TextField'
import Grid from 'material-ui/Grid/Grid'
import MenuItem from 'material-ui/Menu/MenuItem'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../ParentForm/styles'

import { CivilStatus } from '../ParentForm/Data.json'
import TelField from '../../components/TelField/TelField'
import Typography from 'material-ui/Typography/Typography'

const TutorForm = ({ classes, state, onChange }) => (
  <Fragment>
    <Typography type="headline">Datos del Tutor</Typography>
    <Grid container spacing={16} className={classes.inputContainer}>
      <Grid item xs={12} md={4}>
        <TextField
          id="tutorName"
          name="name"
          label="Nombre Completo"
          className={classes.textField}
          value={state.name}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="tutorRelationship"
          name="realtionship"
          label="Parentezco con el estudiante"
          className={classes.textField}
          value={state.relationship}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="tutorCivilStatus"
          name="civilStatus"
          label="Estado Civil"
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
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="tutorAddress"
          name="address"
          label="Dirección"
          className={classes.textField}
          value={state.address}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TelField
          id="tutorPhone"
          name="phone"
          label="Teléfono Casa"
          type="tel"
          className={classes.textField}
          value={state.phone}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TelField
          id="tutorCellphone"
          name="cellphone"
          label="Celular"
          type="tel"
          className={classes.textField}
          value={state.cellphone}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="tutorEmail"
          name="email"
          label="Correo Electronico"
          type="email"
          className={classes.textField}
          value={state.email}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="tutorWork"
          name="workAddress"
          label="Lugar de Trabajo"
          className={classes.textField}
          value={state.workAddress}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TelField
          id="tutorWorkPhone"
          name="workPhone"
          label="Teléfono Trabajo"
          type="tel"
          className={classes.textField}
          value={state.workPhone}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  </Fragment>
)

TutorForm.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    realtionship: PropTypes.string.isRequired,
    civilStatus: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    cellphone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    workAddress: PropTypes.string.isRequired,
    workPhone: PropTypes.string.isRequired
  }).isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(TutorForm)
