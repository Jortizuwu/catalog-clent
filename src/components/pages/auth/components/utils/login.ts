import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'

import { QUERY_KEYS } from '../../../../../shared/constant/queryKyes'
import { loginUser } from '../../../../../redux/thunks/auth'
import { Notify } from '../../../../../shared/components/Notify'
// import authServices from '../../../../../shared/services/auth'

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('Correo electrónico no valido')
    .required('El correo electrónico es requerido!'),
  clave: Yup.string().required('La contraseña es requerida!')
})

const initValues = {
  email: '',
  clave: ''
}

export const useLoginDefaultValues = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const login = useCallback(
    async (values) => {
      try {
        const data = await dispatch(loginUser(values)).unwrap()
        window.localStorage.setItem('token', data.data?.token)
        Notify(`hola ${data.data?.usuarioData?.nombre}`)
        navigate('/app')
      } catch (error) {
        Notify(`opps! error ${error}`, 'error')
      }
    },
    [navigate]
  )

  const { mutate, isLoading } = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.AUTH])
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
