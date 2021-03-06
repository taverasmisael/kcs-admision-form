import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { debounce } from '../../utilities'
import ExtraForm from '../../forms/ExtraForm'

class ICEInfo extends PureComponent {
  static propTypes = {
    state: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onHardValidate: PropTypes.func.isRequired,
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
  componentWillMount() {
    this.setState(this.props.state)
  }
  componentWillUnmount() {
    this.props.onHardValidate(this.state)
  }
  render() {
    return <ExtraForm state={this.state} onChange={this.onChange} />
  }
}

export default ICEInfo
