import React, { Component } from 'react'
import PropTypes from 'prop-types'

import compare from 'just-compare'

import Grid from 'material-ui/Grid/Grid'
import FormControl from 'material-ui/Form/FormControl'
import FormLabel from 'material-ui/Form/FormLabel'
import RadioGroup from 'material-ui/Radio/RadioGroup'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import Radio from 'material-ui/Radio/Radio'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

class PaymentForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.shape({ admisionPaymentModel: PropTypes.string.isRequired }),
    onChange: PropTypes.func.isRequired
  }
  shouldComponentUpdate(nextProps) {
    return !compare(this.props.state, nextProps.state)
  }
  render() {
    const { classes, state, onChange } = this.props
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">
              Forma de pago de <strong>admisión</strong>
            </FormLabel>
            <RadioGroup
              row
              aria-label="Forma de pago de Admisión"
              name="admisionPaymentModel"
              className={classes.group}
              value={state.admisionPaymentModel}
              onChange={onChange}
            >
              <FormControlLabel value="A" control={<Radio />} label="Plan A (1 cuota)" />
              <FormControlLabel value="B" control={<Radio />} label="Plan B (2 cuotas)" />
              <FormControlLabel value="C" control={<Radio />} label="Plan C (3 cuotas)" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" required className={classes.formControl}>
            <FormLabel component="legend">
              Forma de pago de <strong>escolaridad</strong>
            </FormLabel>
            <RadioGroup
              row
              aria-label="Forma de pago de Escolaridad"
              name="schoolarshipPaymentModel"
              className={classes.group}
              value={state.schoolarshipPaymentModel}
              onChange={onChange}
            >
              <FormControlLabel value="A" control={<Radio />} label="Plan A (1 cuota)" />
              <FormControlLabel value="B" control={<Radio />} label="Plan B (2 cuotas)" />
              <FormControlLabel value="C" control={<Radio />} label="Plan C (3 cuotas)" />
              <FormControlLabel value="D" control={<Radio />} label="Plan D (7 cuotas)" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(PaymentForm)
