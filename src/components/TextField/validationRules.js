const isExistent = value => value !== null && value !== undefined

const isEmpty = value => value === '' || value === undefined || value == null

const isEmptyTrimed = value => {
  if (typeof value === 'string') {
    return value.trim() === ''
  }
  return true
}

const negate = fun => (...params) => !fun(...params)

export const required = negate(isEmpty)
export const maxlength = (val, len) => val.length <= len
export const minlength = (val, len) => val.length >= len
