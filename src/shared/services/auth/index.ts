import { catalogApi } from '../../common/api'

const authServices = {
  login: async (values) => {
    const response = await catalogApi.post('login', values)
    return response.data
  },
  register: async (values) => {
    const response = await catalogApi.post('register', values)
    return response.data
  }
}

export default authServices
