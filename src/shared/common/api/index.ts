import axios from 'axios'

export const catalogApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

catalogApi.interceptors.request.use(async (confing) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    confing.headers.Authorization = `Bearer ${token}`
  }
  return confing
})
