import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import MenuItem from 'material-ui/Menu/MenuItem'
import Grid from 'material-ui/Grid'

import TextField from '../../components/TextField'
import NumberField from '../../components/NumberField'
import DatePicker from '../../components/DatePicker'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

import GRADES from './Grades.json'
import Typography from 'material-ui/Typography/Typography'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Checkbox from 'material-ui/Checkbox/Checkbox'

const siblingsInfo = (state, onChange, classes) => (
  <Fragment>
    <Grid item xs={12} sm={6} md={3}>
      <NumberField
        id="sonNumber"
        name="sonNumber"
        label="El/ella es el hijo numero?"
        length={2}
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
        length={2}
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

const ChildForm = ({ state, onChange, onDateChange, classes }) => {
  const { name, grade, birthdate, age, hasSiblings, hasOtherChildren, otherChildren } = state

  return (
    <Fragment>
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
        {hasSiblings ? siblingsInfo(state, onChange, classes) : null}
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
    </Fragment>
  )
}

ChildForm.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    hasSiblings: PropTypes.bool.isRequired,
    hasOtherChildren: PropTypes.bool.isRequired,
    sonNumber: PropTypes.string.isRequired,
    siblings: PropTypes.string.isRequired,
    siblingsAges: PropTypes.string.isRequired,
    otherChildren: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(ChildForm)
