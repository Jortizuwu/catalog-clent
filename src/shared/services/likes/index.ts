import { catalogApi } from '../../common/api'

const likeServices = {
  addLikePublication: async (publicationId, values) => {
    await catalogApi.post(`auth/interaccion/like/${publicationId}`, values)
  },
  removeLikePublication: async (publicationId, values) => {
    await catalogApi.post(`auth/interaccion/like/eliminar/${publicationId}`, values)
  }
}

export default likeServices
