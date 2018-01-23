import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import TextField from '../../components/TextField/TextField'
import Grid from 'material-ui/Grid/Grid'

import Typography from 'material-ui/Typography/Typography'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

const ExtraForm = ({ classes, state, onChange }) => (
  <Fragment>
    <Typography type="headline">Información Adicionale</Typography>
    <Grid container spacing={16} className={classes.inputContainer}>
      <Grid item xs={12}>
        <TextField
          id="iceName"
          name="name"
          label="¿Existe alguna condición conductual o espiritual de alguno de sus hijos que debamos conocer?"
          className={classes.textField + ' ' + classes.textarea}
          inputProps={{ className: classes.textarea }}
          value={state.name}
          onChange={onChange}
          multiline
        />
      </Grid>
    </Grid>
  </Fragment>
)

ExtraForm.propTypes = {
  classes: PropTypes.object.isRequired,
  state: PropTypes.shape({ aditionalInfo: PropTypes.string.isRequired }),
  onChange: PropTypes.func.isRequired
}

export default withStyles(styles)(ExtraForm)
