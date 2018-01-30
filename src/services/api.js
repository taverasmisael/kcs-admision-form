import fetch from 'unfetch'
import { objectToFormData } from '../utilities'

const SendEmail = async data => {
  const body = objectToFormData(data)
  try {
    const response = await fetch(`/send-email/`, {
      method: 'POST',
      body
    })
    if (response.ok) {
      const result = await response.json()
      return result
    } else {
      throw new Error(response.status)
    }
  } catch (error) {
    throw error
  }
}

export { SendEmail }
