import React from 'react';
import { useDispatch } from 'react-redux';
import { catalogApi } from '../../common/api';
// import { UilEllipsisH, UilImageUpload } from '@iconscout/react-unicons'

import { handelCreatePublicationModal } from '../../../redux/features/ui/uiSlice';
import { useSelector } from 'react-redux';
export const CreatePublicationCard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(handelCreatePublicationModal());
  };

  return (
    <section
      onClick={handleClick}
      className="hover:cursor-pointer w-full border flex flex-col gap-2 border-light-secondary dark:border-dark-secondary shadow-md rounded-lg p-2"
    >
      <div className="flex gap-2">
        <div className="h-9 w-10">
          <img
            src={`${catalogApi}auth/usuario/ver/imagen/perfil/${userInfo.id_usuario}`}
            className="block h-full rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="w-full text-start p-2 bg-light-secondary dark:bg-dark-secondary font-light text-xs rounded-lg">
          crear publicación
        </div>
      </div>
    </section>
  );
};
