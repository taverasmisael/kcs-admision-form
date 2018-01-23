import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'material-ui/Menu/MenuItem'
import Grid from 'material-ui/Grid'

import TextField from '../../components/TextField'
import NumberField from '../../components/NumberField'
import DatePicker from '../../components/DatePicker'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../ParentForm/styles'

import GRADES from './Grades.json'
import Typography from 'material-ui/Typography/Typography'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Checkbox from 'material-ui/Checkbox/Checkbox'

class ChildForm extends PureComponent {
  state = {
    name: '',
    birthdate: '2002-01-01T04:00:00.000Z',
    grade: 0,
    age: 0,
    hasSiblings: false,
    hasOtherChildren: false,
    sonNumber: '1',
    siblings: '0',
    siblingsAges: '',
    otherChildren: ''
  }
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  onChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({ [event.target.name]: value })
  }

  handleDateChange = birthdate => {
    const age = new Date().getFullYear() - birthdate.year()
    this.setState({ birthdate, age })
  }

  renderGrades = grades =>
    grades.map((grade, index) => (
      <MenuItem key={index} value={grade.value}>
        {grade.label}
      </MenuItem>
    ))
  siblingsInfo = (state, onChange, classes) => (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <NumberField
          id="sonNumber"
          name="sonNumber"
          label="El/ella es el hijo numero?"
          length={3}
          className={classes.textField}
          value={state.sonNumber}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <NumberField
          id="siblings"
          name="siblings"
          label="Cuantos hermanos/as tiene?"
          className={classes.textField}
          value={state.siblings}
          onChange={onChange}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="siblingsAges"
          name="siblingsAges"
          label="Edad en de los hermanos"
          placeholder="En orden. Ej: 12, 10, 8, 5"
          className={classes.textField}
          value={state.siblingsAges}
          onChange={onChange}
          required
        />
      </Grid>
    </Fragment>
  )
  render() {
    const { name, grade, birthdate, age, hasSiblings, hasOtherChildren, otherChildren } = this.state
    const { classes } = this.props
    return (
      <Fragment>
        <Typography type="headline">Información del Niño</Typography>
        <Grid container spacing={16} className={classes.inputContainer}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="name"
              name="name"
              label="Nombre(s)"
              margin="normal"
              className={classes.textField}
              value={name}
              onChange={this.onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="grade"
              name="grade"
              label="Grado solicitado"
              margin="normal"
              className={classes.textField}
              value={grade}
              onChange={this.onChange}
              select
            >
              {this.renderGrades(GRADES)}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DatePicker
              id="birthdate"
              name="birthdate"
              label="Fecha de nacimiento"
              margin="normal"
              className={classes.textField}
              value={birthdate}
              onChange={this.handleDateChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              id="age"
              name="age"
              label="Edad"
              margin="normal"
              className={classes.textField}
              value={age}
              onChange={this.onChange}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.checkbox}>
            <FormControlLabel
              control={<Checkbox name="hasSiblings" checked={hasSiblings} onChange={this.onChange} />}
              classes={{
                root: classes.switchLabel
              }}
              label="¿Tiene hermanos?"
            />
          </Grid>
          {hasSiblings ? this.siblingsInfo(this.state, this.onChange, classes) : null}
          <Grid item xs={12} sm={6} md={3} className={classes.checkbox}>
            <FormControlLabel
              control={<Checkbox name="hasOtherChildren" checked={hasOtherChildren} onChange={this.onChange} />}
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
                margin="normal"
                className={classes.textField}
                value={otherChildren}
                onChange={this.onChange}
                disabled
              />
            </Grid>
          ) : null}
        </Grid>
      </Fragment>
    )
  }
}

export default withStyles(styles)(ChildForm)
