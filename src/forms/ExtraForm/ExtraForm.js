import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import TextField from '../../components/TextField/TextField'
import Grid from 'material-ui/Grid/Grid'

import Typography from 'material-ui/Typography/Typography'
import compare from 'just-compare'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'

class ExtraForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    state: PropTypes.shape({ aditionalInfo: PropTypes.string.isRequired }),
    onChange: PropTypes.func.isRequired
  }
  shouldComponentUpdate(nextProps) {
    return !compare(this.props.state, nextProps.state)
  }
  render() {
    const { classes, state, onChange } = this.props
    return (
      <Fragment>
        <Typography type="headline">Información Adicional</Typography>
        <Grid container spacing={16} className={classes.inputContainer}>
          <Grid item xs={12}>
            <TextField
              id="aditionalInfo"
              name="aditionalInfo"
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
  }
}

export default withStyles(styles)(ExtraForm)
