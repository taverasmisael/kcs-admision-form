import React, { PureComponent } from 'react'

import ICEForm from '../../forms/ICEForm'

class ICEInfo extends PureComponent {
  static propTypes = {}
  state = {
    name: '',
    email: '',
    relationship: '',
    phone: '',
    cellphone: '',
    workPhone: ''
  }
  onChange = event => this.setState({ [event.target.name]: event.target.value })

  render() {
    return <ICEForm state={this.state} onChange={this.onChange} />
  }
}

export default ICEInfo
