import { catalogApi } from '../../common/api'

const projectService = {
  getSales: async () => {
    const { data } = await catalogApi.get('getSales.php')
    const Sale = data
    return Sale
  }
}

export default projectService
