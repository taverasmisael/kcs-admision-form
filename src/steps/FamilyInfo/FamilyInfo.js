import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import Switch from 'material-ui/Switch/Switch'
import FormControlLabel from 'material-ui/Form/FormControlLabel'

const EDUCATIVELEVES = [{ value: 0, label: 'Kinder' }]
const CIVILSTATUS = [
  { value: 0, label: 'Soltero' },
  { value: 1, label: 'Casado' },
  { value: 2, label: 'Union Libre' },
  { value: 3, label: 'Divorciado' },
  { value: 4, label: 'Viudo' }
]

export class FamilyInfo extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    lastname: '',
    name: '',
    civilStatus: '',
    educativeLevel: '',
    address: '',
    sector: '',
    phone: '',
    cellphone: '',
    workName: '',
    workPosition: '',
    workPhone: '',
    workPhoneExt: '',
    churchName: '',
    pastorName: '',
    churchService: '',
    isChristian: true
  }

  handleChange = ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v

    this.setState({ [name]: value })
  }

  renderSelectItems = grades =>
    grades.map((grade, index) => (
      <MenuItem key={index} value={grade.value}>
        {grade.label}
      </MenuItem>
    ))
  render() {
    const { classes } = this.props
    const {
      lastname,
      name,
      civilStatus,
      educativeLevel,
      address,
      sector,
      phone,
      cellphone,
      workName,
      workPosition,
      workPhone,
      workPhoneExt,
      pastorName,
      churchService,
      churchName,
      isChristian
    } = this.state
    return (
      <Fragment>
        <Fragment>
          <Typography type="headline">Padre</Typography>
          <Grid container spacing={16} className={classes.inputContainer}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="lastname"
                name="lastname"
                label="Apellidos"
                margin="normal"
                className={classes.textField}
                value={lastname}
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="name"
                name="name"
                label="Nombres"
                margin="normal"
                className={classes.textField}
                value={name}
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="civilStatus"
                name="civilStatus"
                label="Estado Civil"
                margin="normal"
                className={classes.textField}
                value={civilStatus}
                onChange={this.handleChange}
                select
                required
              >
                {this.renderSelectItems(CIVILSTATUS)}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="educativeLevel"
                name="educativeLevel"
                label="Nivel Educativo"
                margin="normal"
                className={classes.textField}
                value={educativeLevel}
                onChange={this.handleChange}
                select
                required
              >
                {this.renderSelectItems(EDUCATIVELEVES)}
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={16} className={classes.inputContainer}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                id="address"
                name="address"
                label="Dirección"
                margin="normal"
                className={classes.textField}
                value={address}
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                id="sector"
                name="sector"
                label="Sector"
                margin="normal"
                className={classes.textField}
                value={sector}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="phone"
                name="phone"
                label="Tel. Casa"
                type="tel"
                margin="normal"
                className={classes.textField}
                value={phone}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="cellphone"
                name="cellphone"
                label="Celular"
                type="tel"
                margin="normal"
                className={classes.textField}
                value={cellphone}
                onChange={this.handleChange}
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={16} className={classes.inputContainer}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="workName"
                name="workName"
                label="Lugar de trabajo"
                margin="normal"
                className={classes.textField}
                value={workName}
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="workPosition"
                name="workPosition"
                label="Puesto que ocupa"
                margin="normal"
                className={classes.textField}
                value={workPosition}
                onChange={this.handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="workPhone"
                name="workPhone"
                label="Tel. Oficina"
                type="tel"
                margin="normal"
                className={classes.textField}
                value={workPhone}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="workPhoneExt"
                name="workPhoneExt"
                label="Ext."
                type="tel"
                margin="normal"
                className={classes.textField}
                value={workPhoneExt}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={16} className={classes.inputContainer}>
            <Grid item xs={12} sm={6} md={3} className={classes.checkbox}>
              <FormControlLabel
                control={
                  <Switch
                    name="isChristian"
                    checked={isChristian}
                    onChange={this.handleChange}
                    aria-label="Es usted Cristiano?"
                  />
                }
                label="¿Es usted cristiano?"
              />
            </Grid>
            {isChristian ? <this.ChristianInfo /> : null}
          </Grid>
        </Fragment>
        <Fragment>
          <Typography type="headline">Madre</Typography>
        </Fragment>
      </Fragment>
    )
  }
  ChristianInfo = () => (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="churchName"
          name="churchName"
          label="Iglesia a la que asiste"
          margin="normal"
          className={this.props.classes.textField}
          value={this.state.churchName}
          onChange={this.handleChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="pastorName"
          name="pastorName"
          label="Nombre del pastor"
          margin="normal"
          className={this.props.classes.textField}
          value={this.state.pastorName}
          onChange={this.handleChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="churchService"
          name="churchService"
          label="Area de servicio en la iglesia"
          margin="normal"
          className={this.props.classes.textField}
          value={this.state.churchService}
          onChange={this.handleChange}
          required
        />
      </Grid>
    </Fragment>
  )
}

export default withStyles(styles)(FamilyInfo)
