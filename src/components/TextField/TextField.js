import React from 'react'
import PropTypes from 'prop-types'

import DefaultTextField from 'material-ui/TextField'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'

const TextField = ({ classes, ...props }) => {
  const InputProps = {
    disableUnderline: true,
    classes: {
      root: classes.textFieldRoot,
      input: classes.textFieldInput
    }
  }
  const InputLabelProps = {
    shrink: true
  }
  const PropsModifiers = { InputLabelProps, InputProps }

  return <DefaultTextField margin="normal" {...PropsModifiers} {...props} />
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  ...DefaultTextField.propTypes
}

export default withStyles(styles)(TextField)
