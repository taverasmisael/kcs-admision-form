import React, { PureComponent } from 'react'
import MaskedInput from 'react-text-mask'

const TelRegex = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

export default class TelMask extends PureComponent {
  render() {
    return <MaskedInput mask={TelRegex} placeholderChar={'\u2000'} type="tel" showMask {...this.props} />
  }
}
