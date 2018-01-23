import React from 'react'

import DefaultTextField from 'material-ui/TextField'

const TextField = props => {
  const InputProps = {
    disableUnderline: true
  }
  const InputLabelProps = {
    shrink: true
  }
  const PropsModifiers = { InputLabelProps, InputProps }

  return <DefaultTextField margin="normal" {...PropsModifiers} {...props} />
}

TextField.propTypes = {
  ...DefaultTextField.propTypes
}

export default TextField
