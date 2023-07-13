import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import projectServices from '../../../services/projects'
import { QUERY_KEYS } from '../../../constant/queryKyes'

export const useGetSale = () => {
  const params = useParams()

  const { data: sale, isLoading } = useQuery(
    [QUERY_KEYS.PROJECTS, params.id],
    () => projectServices.getSales(params.id),
    {
      enabled: !!params.id
    }
  )

  return {
    sale,
    isLoading
  }
}

export const useGetSales = () => {
  const { data: sales = [], isLoading } = useQuery(QUERY_KEYS.PROJECTS, () =>
    projectServices.getSales()
  )
  return {
    sales,
    isLoading
  }
}
