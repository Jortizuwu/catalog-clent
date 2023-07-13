import { catalogApi } from '../../common/api'

const commentServices = {
  createComment: async (publicationId, values) => {
    const response = await catalogApi.post(
      `auth/interaccion/comentario/${publicationId}`,
      values
    )
    return response.data.data
  },
  deleteComment: async (commentID) => {
    await catalogApi.post(`auth/interaccion/comentario/eliminar/${commentID}`)
  },

  getCommetsByPublicationId: async (id, page = 1) => {
    const response = await catalogApi.get(
      `auth/interaccion/comentario/todos/${id}?pagina=${page}&elementos=2`
    )
    return response.data.data
  }
}

export default commentServices
