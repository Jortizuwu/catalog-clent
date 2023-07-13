import { useCallback } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'

import { QUERY_KEYS } from '../../../../../shared/constant/queryKyes'
import { Notify } from '../../../../../shared/components/Notify'
import publicationServices from '../../../../../shared/services/publication'

export const schema = Yup.object().shape({
  descripcion: Yup.string().required('La descripción es requerida!'),
  modalidadTrabajo: Yup.object().shape({
    label: Yup.string().required('hola'),
    value: Yup.string().required('hola')
  }),
  lugarTrabajo: Yup.string().required('El lugar trabajo es requerido!'),
  maxSalario: Yup.number('solo valor numérico')
    .min(1000, 'el valor mínimo es de 1000')
    .required('El salario máximo es requerido!'),
  minSalario: Yup.number('solo valor numérico')
    .min(1000, 'el valor mínimo es de 1000')
    .required('El salario mínimo es requerido!')
})

const initValues = {
  descripcion: '',
  modalidadTrabajo: {
    label: '',
    value: ''
  },
  lugarTrabajo: '',
  maxSalario: 0,
  minSalario: 0
}

export const usePublicationJobsDefaultValues = () => {
  const params = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const create = useCallback(
    async (values) => {
      try {
        await publicationServices.createPublicationJobs({
          ...values,
          modalidadTrabajo: values.modalidadTrabajo.value
        })
        Notify('Oferta de empleo creada')
        navigate('/jobs')
      } catch (error) {
        console.log(error)
        Notify(`opps! error ${error}`, 'error')
      }
    },
    [navigate]
  )

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
