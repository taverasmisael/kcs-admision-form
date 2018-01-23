import React, { PureComponent } from 'react'

import ChildForm from '../../forms/ChildForm'

class ChildInfo extends PureComponent {
  static propTypes = {}
  state = {
    name: '',
    birthdate: '2002-01-01T04:00:00.000Z',
    grade: 0,
    age: 0,
    hasSiblings: false,
    hasOtherChildren: false,
    sonNumber: '1',
    siblings: '0',
    siblingsAges: '',
    otherChildren: ''
  }
  onChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({ [event.target.name]: value })
  }
  render() {
    return <ChildForm />
  }
}

ChildInfo.propTypes = {}

export default ChildInfo
