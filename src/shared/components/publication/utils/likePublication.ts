import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { QUERY_KEYS } from '../../../constant/queryKyes'
import likeServices from '../../../services/likes'
import { Notify } from '../../Notify'

export const useAddLikePublication = (publicationId, isAdding) => {
  const queryClient = useQueryClient()

  const add = useCallback(async () => {
    try {
      await likeServices.addLikePublication(publicationId)
      Notify('lIKE AGREGADO')
    } catch (error) {
      Notify(`opps! error ${error.response.data.data ?? 'xd'}`, 'error')
    }
  }, [])

  const remove = useCallback(async () => {
    try {
      await likeServices.removeLikePublication(publicationId)
      Notify('lIKE REMOVIDO')
    } catch (error) {
      Notify(`opps! error ${error.response.data.data ?? 'xd'}`, 'error')
    }
  }, [])

  const { mutate, isLoading } = useMutation(!isAdding ? add : remove, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.LIKES])
    }
  })

  return {
    isLoading,
    submit: mutate
  }
}
