import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import * as Yup from 'yup'
import { QUERY_KEYS } from '../../../constant/queryKyes'
import commentServices from '../../../services/comments'
import { Notify } from '../../Notify'

export const schema = Yup.object().shape({
  descripcion: Yup.string().required('El comentario es requerido!')
})

const initValues = {
  descripcion: ''
}

export const useCreateCommentDefualtValues = (
  publicationId,
  commentId,
  isAdding
) => {
  const queryClient = useQueryClient()

  const create = useCallback(async (values) => {
    try {
      await commentServices.createComment(publicationId, values)
      Notify('COMENTARIO CREADO')
    } catch (error) {
      Notify(`opps! error ${error.response.data.data ?? 'xd'}`, 'error')
    }
  }, [])

  const remove = useCallback(async () => {
    try {
      await commentServices.deleteComment(commentId)
      Notify('COMENTARIO ELIMINADO')
    } catch (error) {
      Notify(`opps! error ${error.response.data.data ?? 'xd'}`, 'error')
    }
  }, [])

  const { mutate, isLoading } = useMutation(isAdding ? create : remove, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.COMMENTS])
    }
  })

  return {
    isLoading,
    submit: mutate,
    formValues: {
      defaultValues: initValues
    },
    status: 'hola'
  }
}
