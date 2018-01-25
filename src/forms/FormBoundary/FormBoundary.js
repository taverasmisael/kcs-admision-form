import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

class FormBoundary extends PureComponent {
  static childContextTypes = {
    onValidationError: PropTypes.func
  }

  getChildContext() {
    return {
      onValidationError: this.props.onValidationError
    }
  }
  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}

export default FormBoundary
