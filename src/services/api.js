import fetch from 'unfetch'
import { objectToFormData } from '../utilities'

const SendEmail = async data => {
  const body = objectToFormData(data)
  const response = await fetch(`/send-email/`, {
    method: 'POST',
    body
  })
  const result = await response.json()
  return result
}

export { SendEmail }
