import React, { PureComponent } from 'react'
import ExtraForm from '../../forms/ExtraForm/ExtraForm';

class ExtraInfo extends PureComponent {
  static propTypes = {}
  state = { aditionalInfo: '' }
  onChange = event => this.setState({ [event.target.name]: event.target.value})

  render() {
    return <ExtraForm onChange={this.onChange} state={this.state} />
  }
}

export default ExtraInfo
