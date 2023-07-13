import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import userServices from '../../../services/user'
import { QUERY_KEYS } from '../../../constant/queryKyes'

export const useGetUser = () => {
  const [searchParams] = useSearchParams()
  const params = useParams()
  const qparams = searchParams.get('id')

  const { data: user, isLoading } = useQuery(
    [QUERY_KEYS.USER, params.id || qparams],
    () => userServices.getUserById(params.id || qparams),
    {
      enabled: !!params.id || !!qparams
    }
  )

  return {
    user,
    isLoading
  }
}

export const useGetUserFollowers = () => {
  const { data: followers, isLoading } = useQuery([QUERY_KEYS.USER], () =>
    userServices.getFollowers()
  )

  return {
    followers,
    isLoading
  }
}
