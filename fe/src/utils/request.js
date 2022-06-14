import axios from 'axios'
import { storage } from 'utils'

const instance = axios.create({
  baseURL: 'http://localhost:3001',
})

const assignHeaders = () => {
  let headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
  }
  const user = storage.user.get()
  if (user?.token) {
    headers['Authorization'] = `Bearer ${user.token}`
  }

  return headers
}

export const request = async (method, url, params) => {
  const body = {
    method,
    url,
    headers: assignHeaders(),
  }

  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    body.data = params
  } else {
    body.params = params
  }

  try {
    const response = await instance(body)

    return response
  } catch (error) {
    alert(error.response.status + ' ' + JSON.stringify(error.response.data))

    return Promise.reject(error.response)
  }
}
