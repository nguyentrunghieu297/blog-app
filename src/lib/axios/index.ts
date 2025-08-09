import authApi from '@/service/auth'
import axios from 'axios'

export const TOKEN_KEY = 'blog_app_token'
export const REFRESH_TOKEN_KEY = 'blog_app_refresh_token'

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api'
})

apiInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const logOutApp = async () => {
  const resp = await authApi.logOut()
  if (resp.msg === 'logout') {
    localStorage.clear()
    window.location.reload()
  }
}

export default apiInstance
