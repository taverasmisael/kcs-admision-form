import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import TextField from '../../components/TextField/TextField'
import Grid from 'material-ui/Grid/Grid'

import TelField from '../../components/TelField/TelField'
import Typography from 'material-ui/Typography/Typography'

import compare from 'just-compare'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

class ICEForm extends Component {
  shouldComponentUpdate(nextProps) {
    return !compare(this.props.state, nextProps.state)
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      relationship: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      cellphone: PropTypes.string.isRequired,
      workPhone: PropTypes.string.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    const { classes, state, onChange } = this.props
    return (
      <Fragment>
        <Typography type="headline">Contacto de Emergencia</Typography>
        <Grid container spacing={16} className={classes.inputContainer}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="iceName"
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
              id="iceRelationship"
              name="relationship"
              label="Parentezco con el estudiante"
              className={classes.textField}
              value={state.relationship}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              id="iceRelationship"
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
            <TelField
              id="icePhone"
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
              id="iceCellphone"
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
            <TelField
              id="iceWorkPhone"
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
  }
}

export default withStyles(styles)(ICEForm)
