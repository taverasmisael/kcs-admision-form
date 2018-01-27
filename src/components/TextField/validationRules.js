const isEmpty = value => value === '' || value === undefined || value == null

const negate = fun => (...params) => !fun(...params)

export const required = negate(isEmpty)
export const isEmail = email => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
export const maxlength = (val, len) => val.length <= len
export const minlength = (val, len) => val.length >= len
