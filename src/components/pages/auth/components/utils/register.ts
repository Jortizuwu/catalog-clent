import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { QUERY_KEYS } from '../../../../../shared/constant/queryKyes'
import { registerUser } from '../../../../../redux/thunks/auth'
import { Notify } from '../../../../../shared/components/Notify'

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('Correo electrónico no valido')
    .required('El correo electrónico es requerido!'),
  nombre: Yup.string().required('El nombre es requerido!'),
  telefono: Yup.string(),
  apellidos: Yup.string().required('El apellido es requerido!'),
  clave: Yup.string()
    .required('la contraseña es requerida!')
    .min(8, 'La contraseña debe de tener 8 o mas caracteres !')
    .matches(
      /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/,
      'La contraseña debe de tener al menos un dígito, al menos una minúscula y al menos una mayúscula.'
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('clave'), null],
    'Las contraseñas deben coincidir'
  )
})

const initValues = {
  nombre: '',
  telefono: '',
  apellidos: '',
  email: '',
  clave: ''
}

export const useRegisterDefaultValues = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const register = useCallback(
    async (values) => {
      try {
        const data = await dispatch(registerUser(values)).unwrap()
        window.localStorage.setItem('token', data.data?.token)
        Notify(`hola ${data.data?.usuarioData?.nombre}`)
        navigate('/app')
      } catch (error) {
        Notify(`opps! error ${error}`, 'error')
      }
    },
    [navigate]
  )

  const { mutate, isLoading } = useMutation(register, {
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
