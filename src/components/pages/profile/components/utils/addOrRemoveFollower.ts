import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'

import { QUERY_KEYS } from '../../../../../shared/constant/queryKyes'
import { Notify } from '../../../../../shared/components/Notify'
import userServices from '../../../../../shared/services/user'
import { useSearchParams } from 'react-router-dom'

export const useFolowerDefualtValues = (isAdding) => {
  const queryClient = useQueryClient()
  const [searchParams] = useSearchParams()
  const qparams = searchParams.get('id')

  const add = useCallback(async () => {
    try {
      await userServices.addFollower(qparams)
      Notify('Siguendo a ')
    } catch (error) {
      console.log(error)
      Notify(`opps! error ${error.response.data.data ?? 'xd'}`, 'error')
    }
  }, [])

  const remove = useCallback(async () => {
    try {
      await userServices.removeFollowing(qparams)
      Notify('Dejeste de seguir a')
    } catch (error) {
      Notify(`opps! error ${error.response.data.data ?? 'xd'}`, 'error')
    }
  }, [])

  const { mutate, isLoading } = useMutation(isAdding ? add : remove, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.USER])
    }
  })

  return {
    isLoading,
    submit: mutate
  }
}
