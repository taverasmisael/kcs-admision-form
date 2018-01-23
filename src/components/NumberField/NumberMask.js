import React, { PureComponent } from 'react'
import MaskedInput from 'react-text-mask'

const NumberRegex = (len = 4) => {
  const mask = new Array(len)
  mask.fill(/\d/)
  return mask
}

export default class NumberMask extends PureComponent {
  state = {
    mask: []
  }
  componentDidMount() {
    this.setState({ mask: NumberRegex(this.props.length) })
  }

  render() {
    return <MaskedInput mask={this.state.mask} type="tel" showMask placeholderChar={'\u2000'} {...this.props} />
  }
}
