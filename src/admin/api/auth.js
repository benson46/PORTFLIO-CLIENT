import { adminAxios } from "../../lib/api/adminAxios"

export const authService = {
  async login(credentials) {
    const response = await adminAxios.post('/auth/login', credentials)
    localStorage.setItem('access_token', response.accessToken)
    return response
  },

  async logout() {
    await adminAxios.post('/auth/logout')
    localStorage.removeItem('access_token')
  },

  // async checkSession() {
  //   const { data } = await adminAxios.get('/auth/check')
  //   return data.user
  // }
}