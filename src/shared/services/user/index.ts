import { catalogApi } from '../../common/api'

const userServices = {
  getUserById: async (id) => {
    try {
      const response = await catalogApi.get(`auth/usuario/${id}`)
      const user = {
        ...response.data.data
      }
      return user
    } catch (error) {
      return error
    }
  },
  getFollowers: async () => {
    try {
      const response = await catalogApi.get(
        'auth/usuario/seguidos?pagina=1&elementos=10'
      )
      return response.data.data.content
    } catch (error) {
      return error
    }
  },
  updateProfile: async (values) => {
    const data = new FormData()
    data.append('imagen_perfil', values.imagen_perfil[0])

    const response = await catalogApi.post('auth/usuario/imagen/perfil', data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data.data
  },
  addFollower: async (id) => {
    await catalogApi.post(`auth/usuario/seguir?id=${id}`)
  },
  removeFollower: async (id) => {
    await catalogApi.post(`auth/usuario/eliminar/seguidor/${id}`)
  },
  removeFollowing: async (id) => {
    await catalogApi.post(`auth/usuario/eliminar/seguido/${id}`)
  }
}

export default userServices
