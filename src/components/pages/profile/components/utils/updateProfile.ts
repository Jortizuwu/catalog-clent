import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { QUERY_KEYS } from '../../../../../shared/constant/queryKyes';
import { Notify } from '../../../../../shared/components/Notify';
import userServices from '../../../../../shared/services/user';
// import authServices from '../../../../../shared/services/auth'

export const schema = Yup.object().shape({
  //   email: Yup.string()
  //     .email('Correo electrónico no valido')
  //     .required('El correo electrónico es requerido!'),
  imagen_perfil: Yup.mixed('no se xd').required('La imagen es requerida!'),
});

const initValues = {
  imagen_perfil: '',
};

export const updateProfileDefaultValues = () => {
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const update = useCallback(
    async (values) => {
      try {
        await userServices.updateProfile(values);
        Notify('informacion actualizada');
      } catch (error) {
        Notify(`opps! error ${error}`, 'error');
      }
    },
    [navigate]
  );

  const { mutate, isLoading } = useMutation(update, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.USER]);
    },
  });

  return {
    isLoading,
    submit: mutate,
    formValues: {
      defaultValues: initValues,
    },
    status: 'hola',
    isEditing: !!params.id,
  };
};
