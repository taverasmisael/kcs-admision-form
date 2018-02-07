import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import PaymentForm from '../../forms/PaymentForm'
import Typography from 'material-ui/Typography/Typography'

class PaymentInfo extends PureComponent {
  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render() {
    return (
      <Fragment>
        <Typography paragraph gutterBottom type="headline">
          ¿Cual es el acuerdo de pago de elegido como familia?
        </Typography>
        <PaymentForm state={this.props.state} onChange={this.props.onChange} />
      </Fragment>
    )
  }
}

export default PaymentInfo
