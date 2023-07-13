import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import { QUERY_KEYS } from '../../../../../shared/constant/queryKyes'
import { Notify } from '../../../../../shared/components/Notify'
import { handelCreatePublicationModal } from '../../../../../redux/features/ui/uiSlice'
import publicationServices from '../../../../../shared/services/publication'

export const schema = Yup.object().shape({
  description: Yup.string().required('La descripción es requerido!')
})

const initValues = {
  description: ''
}

export const useCreatePublicationDefualtValues = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const create = useCallback(async (values) => {
    try {
      await publicationServices.createPublication(values)
      Notify('PUBLICACIÓN CREADA')
      dispatch(handelCreatePublicationModal())
    } catch (error) {
      Notify(`opps! error ${error.response.data.data ?? 'xd'}`, 'error')
    }
  }, [])

  const { mutate, isLoading } = useMutation(create, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.PUBLICATIONS])
    }
  })

  return {
    isLoading,
    submit: mutate,
    formValues: {
      defaultValues: initValues
    },
    status: 'hola',
    isEditing: !!params.id
  }
}
