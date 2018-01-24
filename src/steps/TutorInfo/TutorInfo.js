import React, { PureComponent } from 'react'

import compare from 'just-compare'
import { debounce } from '../../utilities'
import TutorForm from '../../forms/TutorForm/TutorForm'

class TutorInfo extends PureComponent {
  componentWillMount() {
    this.setState(this.props.state)
  }
  componentWillReceiveProps(nextProps) {
    const { state } = this
    if (!compare(state, nextProps.state)) {
      this.setState(state)
    }
  }

  onChange = ({ target }) => {
    const { name, value: v } = target
    const value = target.type === 'checkbox' ? target.checked : v
    this.setState(
      state => ({
        ...state,
        [name]: value
      }),
      debounce(this.props.onChange.bind(this, { target: { name, value } }), 2000)
    )
  }
  render() {
    return <TutorForm state={this.state} onChange={this.onChange} />
  }
}

export default TutorInfo
