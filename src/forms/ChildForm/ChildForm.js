import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'material-ui/Menu/MenuItem'
import Grid from 'material-ui/Grid'

import TextField from '../../components/TextField'
import DatePicker from '../../components/DatePicker'

import compare from 'just-compare'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

import GRADES from '../../lists/grades'
import Typography from 'material-ui/Typography/Typography'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Checkbox from 'material-ui/Checkbox/Checkbox'
import FormBoundary from '../FormBoundary/FormBoundary'

class ChildForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.shape({
      name: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      hasSiblings: PropTypes.bool.isRequired,
      hasOtherChildren: PropTypes.bool.isRequired,
      sonNumber: PropTypes.string.isRequired,
      siblings: PropTypes.string.isRequired,
      siblingsAges: PropTypes.string.isRequired,
      otherChildren: PropTypes.string.isRequired
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onValidationError: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return !compare(this.props.state, nextProps.state)
  }
  render() {
    const { state, onChange, onDateChange, classes, onValidationError, validations } = this.props
    const { name, grade, birthdate, age, hasSiblings, hasOtherChildren, otherChildren } = state

    return (
      <FormBoundary onValidationError={onValidationError} validations={validations}>
        <Typography type="headline">Información del Niño</Typography>
        <Grid container spacing={16} className={classes.inputContainer}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="name"
              name="name"
              label="Nombre(s)"
              className={classes.textField}
              value={name}
              onChange={onChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="grade"
              name="grade"
              label="Grado solicitado"
              className={classes.textField}
              value={grade}
              onChange={onChange}
              select
              required
            >
              {GRADES.map((grade, index) => (
                <MenuItem key={index} value={grade.value}>
                  {grade.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DatePicker
              id="birthdate"
              name="birthdate"
              label="Fecha de nacimiento"
              className={classes.textField}
              value={birthdate}
              onChange={onDateChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="age"
              name="age"
              label="Edad"
              className={classes.textField}
              value={age}
              onChange={onChange}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.checkbox}>
            <FormControlLabel
              control={<Checkbox name="hasSiblings" checked={hasSiblings} onChange={onChange} />}
              classes={{
                root: classes.switchLabel
              }}
              label="¿Tiene hermanos?"
            />
          </Grid>
          {hasSiblings ? <this.siblingsInfo /> : null}
          <Grid item xs={12} sm={6} md={3} className={classes.checkbox}>
            <FormControlLabel
              control={<Checkbox name="hasOtherChildren" checked={hasOtherChildren} onChange={onChange} />}
              classes={{
                root: classes.switchLabel
              }}
              label="¿Viven más ninños? (no hermanos)"
            />
          </Grid>
          {hasOtherChildren ? (
            <Grid item xs={12} sm={hasSiblings ? 6 : 12} md={hasSiblings ? 9 : 6}>
              <TextField
                id="otherChildren"
                name="otherChildren"
                label="Parentesco"
                className={classes.textField}
                value={otherChildren}
                onChange={onChange}
              />
            </Grid>
          ) : null}
        </Grid>
      </FormBoundary>
    )
  }

  siblingsInfo = () => (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="sonNumber"
          name="sonNumber"
          label="El/ella es el hijo numero?"
          maxLength={2}
          className={this.props.classes.textField}
          value={this.props.state.sonNumber}
          onChange={this.props.onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="siblings"
          name="siblings"
          label="Cuantos hermanos/as tiene?"
          maxLength={2}
          className={this.props.classes.textField}
          value={this.props.state.siblings}
          onChange={this.props.onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="siblingsAges"
          name="siblingsAges"
          label="Edad en de los hermanos"
          placeholder="En orden. Ej: 12, 10, 8, 5"
          className={this.props.classes.textField}
          value={this.props.state.siblingsAges}
          onChange={this.props.onChange}
          required
        />
      </Grid>
    </Fragment>
  )
}
export default withStyles(styles)(ChildForm)
