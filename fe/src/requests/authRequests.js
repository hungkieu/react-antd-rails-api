import { request } from 'utils'

export const signInRequest = (params) => {
  return request('POST', '/api/v1/users/sign_in', params)
}

export const signUpRequest = (params) => {
  return request('POST', '/api/v1/users', params)
}

export const signOutRequest = () => {
  return request('DELETE', '/api/v1/users/sign_out')
}
