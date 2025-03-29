import { userAxios } from "./axiosInstance"

export const authService = {
  login: async (credentials) => {
    try {
      const response = await userAxios.post('/api/api/auth/login', credentials,{withCredentials:true})
      return response
    } catch (error) {
      throw new Error(error.message || 'Login failed')
    }
  },
  logout: () => {
    localStorage.removeItem('authToken')
  }
}