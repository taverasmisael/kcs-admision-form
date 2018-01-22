import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'
import Grid from 'material-ui/Grid'

import DatePicker from '../../components/DatePicker'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

import GRADES from './Grades.json'
import Typography from 'material-ui/Typography/Typography'

class ChildForm extends PureComponent {
  state = {
    name: '',
    birthdate: '2002-01-01T04:00:00.000Z',
    grade: 0,
    age: 0,
    sonNumber: 0
  }
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
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
  render() {
    const { name, grade, birthdate, age } = this.state
    const { classes } = this.props
    return (
      <form autoComplete="off" noValidate>
        <div className={classes.container}>
          <Typography type="headline">Información del niño</Typography>
          <Grid container>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                id="name"
                name="name"
                label="Nombre(s)"
                margin="normal"
                className={classes.textField}
                value={name}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                disabled
              />
            </Grid>
          </Grid>
        </div>
      </form>
    )
  }
}

export default withStyles(styles)(ChildForm)
