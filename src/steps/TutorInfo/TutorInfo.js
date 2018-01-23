import React, { PureComponent } from 'react'
import TutorForm from '../../forms/TutorForm/TutorForm'

class TutorInfo extends PureComponent {
  state = {
    name: '',
    realtionship: '',
    civilStatus: '',
    phone: '',
    cellphone: '',
    email: '',
    address: '',
    workAddress: '',
    workPhone: ''
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value })
  render() {
    return <TutorForm state={this.state} onChange={this.onChange} />
  }
}

export default TutorInfo
