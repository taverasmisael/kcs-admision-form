import React from 'react'
import PropTypes from 'prop-types'

import { DatePicker as BaseDatePicker } from 'material-ui-pickers'

import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft'
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight'
import Event from 'material-ui-icons/Event'

import withStyles from 'material-ui/styles/withStyles'

import moment from 'moment'
import 'moment/locale/es-do'
moment.locale('es-do')

const DatePicker = ({ onChange, disableFuture = true, value, ...props }) => (
  <BaseDatePicker
    cancelLabel="Cancelar"
    format="DD MMMM YYYY"
    margin="normal"
    value={value}
    onChange={onChange}
    disableFuture={disableFuture}
    leftArrowIcon={<KeyboardArrowLeft />}
    rightArrowIcon={<KeyboardArrowRight />}
    keyboardIcon={<Event />}
    keyboard
    {...props}
  />
)

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  disableFuture: PropTypes.bool
}

export default withStyles()(DatePicker)
