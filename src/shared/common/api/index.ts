import axios from 'axios'

export const catalogApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string
})

catalogApi.interceptors.request.use( (confing) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    confing.headers.Authorization = `Bearer ${token}`
  }
  return confing
})
