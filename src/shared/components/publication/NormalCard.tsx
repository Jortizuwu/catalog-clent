import { yupResolver } from '@hookform/resolvers/yup';
import {
  UilHeart,
  UilMessage,
  UilTrashAlt,
  UilExclamationTriangle,
} from '@iconscout/react-unicons';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SliderComponent from 'react-slick';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/es';
import { useSelector } from 'react-redux';

import { useGetCommnetsByPublicationId } from '../../hooks/react-query/comments';
import { FieldError } from '../form/FieldError';
import LazyImage from '../LazyImg';
import {
  schema,
  useCreateCommentDefualtValues,
} from './utils/commentPublication';
import { useAddLikePublication } from './utils/likePublication';
import { Loader } from '../Loader';
import { PopupComponent } from '../Popup';
import { Link } from 'react-router-dom';

dayjs.extend(relativeTime);
dayjs.locale('es');

const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
  dots: true,
  lazyLoad: true,
};

const Commet = ({ data }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { submit } = useCreateCommentDefualtValues(
    null,
    data.id_comentario,
    false
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="media flex justify-between items-start py-1">
      <div className="antialiased flex w-full">
        <img
          className="rounded-full object-cover h-8 w-8 mr-2 mt-1 "
          src={`http://localhost:8080/api/v1/auth/usuario/ver/imagen/perfil/${data?.usuario?.id_usuario}`}
        />
        <div className="w-full">
          <div className="relative rounded-lg px-4 py-2 w-full bg-light-secondary dark:bg-dark-secondary">
            <span className="font-semibold capitalize text-sm leading-relaxed">
              {data?.usuario?.nombre}
            </span>
            <span className="ml-2 dark:text-dark-secondary text-xs">
              {dayjs(data?.fecha).fromNow()}
            </span>
            <p className="text-xs leading-snug md:leading-normal">
              {data?.descripcion}
            </p>

            <PopupComponent handelOpen={handleOpenPopup}>
              {userInfo?.id_usuario === data?.usuario?.id_usuario && (
                <button
                  onClick={submit}
                  className="w-full p-1 mt-2 text-lg font-medium rounded-sm bg-light-secondary flex justify-between hover:text-red-400"
                >
                  borrar <UilTrashAlt className="inline-flex" />
                </button>
              )}
              <button className="w-full p-1 mt-2 text-lg font-medium rounded-sm bg-light-secondary flex justify-between hover:text-red-400">
                reportar <UilExclamationTriangle className="inline-flex" />
              </button>
            </PopupComponent>
          </div>
          <div className="flex items-center">
            <span className="text-xs">14 w</span>
            <button className="flex items-center py-2 mr-3" href="#">
              <UilHeart height="15px" />
              <span className="text-xs">12</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Commets = ({ publicationId }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [laodComments, setLaodComments] = useState(false);
  const [page, setPage] = useState(0);

  const {
    formValues: { defaultValues },
    submit,
    isLoading,
  } = useCreateCommentDefualtValues(publicationId, null, true);

  const { comments, isLoading: isLoadingCommnets } =
    useGetCommnetsByPublicationId(publicationId, page, laodComments);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'all',
    initialValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleLoadCommnets = () => {
    setPage((state) => state + 1);
    setLaodComments(true);
  };

  if (isLoading && isLoadingCommnets) return <Loader />;

  return (
    <div className="pt-2">
      <section className="relative ">
        <section className="max-h-56 overflow-y-scroll scrollbar">
          {comments?.map((val) => (
            <Commet key={val.id_comentario} data={val} />
          ))}
        </section>
        <div className="mb-2 flex justify-end text-left">
          <button
            type="button"
            onClick={handleLoadCommnets}
            className="block text-center rounded-lg font-medium text-xs hover:underline"
          >
            Show more comments
          </button>
        </div>
      </section>
      <form
        onSubmit={handleSubmit((e) => {
          submit(e);
          reset();
        })}
        className="relative"
      >
        <div className="flex">
          <img
            className="w-10 h-10 object-cover rounded-full shadow mr-2"
            alt="user"
            src={`http://localhost:8080/api/v1/auth/usuario/ver/imagen/perfil/${userInfo?.id_usuario}`}
          />
          <textarea
            name="descripcion"
            {...register('descripcion')}
            className="resize-none h-10 focus:h-40 w-full bg-light-secondary dark:bg-dark-secondary rounded-md p-2 focus:outline-none transition-[height]"
            type="text"
            placeholder="Write a comment"
          />
        </div>
        <div className="ml-12">
          {errors.descripcion && (
            <FieldError error={errors.descripcion?.message} />
          )}
        </div>

        <button
          type="submit"
          className="flex hover:bg-light-primary dark:hover:bg-dark-primary rounded-full p-2 absolute right-3 top-3 -mt-3 items-center"
        >
          <UilMessage />
        </button>
      </form>
    </div>
  );
};

export const PublicationNormalCard = ({ data }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { submit } = useAddLikePublication(data.id, data.like);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative shadow-lg ring-1 ring-light-secondary dark:ring-dark-secondary rounded-lg max-w-lg mt-4">
      <div className="flex px-2 py-2 justify-between items-center">
        <Link
          className="flex gap-2 "
          to={`/profile?id=${data.usuario?.id_usuario}`}
        >
          <img
            src={`http://localhost:8080/api/v1/auth/usuario/ver/imagen/perfil/${data.usuario?.id_usuario}`}
            className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full object-cover"
          />
          <div className="">
            <span className="text-md font-semibold capitalize hover:underline">
              {data.usuario?.nombre}
            </span>
            <span className="block dark:text-dark-text-secondary text-xs">
              {dayjs(data?.fecha).fromNow()}
            </span>
          </div>
        </Link>
        <PopupComponent handelOpen={handleOpenPopup}>
          {userInfo?.id_usuario === data?.usuario?.id_usuario && (
            <button
              // onClick={submit}
              className="w-full p-1 mt-2 text-lg font-medium rounded-sm bg-light-secondary flex justify-between hover:text-red-400"
            >
              borrar <UilTrashAlt className="inline-flex" />
            </button>
          )}
          <button className="w-full p-1 mt-2 text-lg font-medium rounded-sm bg-light-secondary flex justify-between hover:text-red-400">
            reportar <UilExclamationTriangle className="inline-flex" />
          </button>
        </PopupComponent>
      </div>

      <div className="mb-2 overflow-hidden relative md:max-w-full ring-1 ring-light-secondary dark:ring-dark-secondary">
        <SliderComponent {...settings} draggable>
          {data?.imagenes.map((val, idx) => (
            <LazyImage
              key={idx}
              src={`http://localhost:8080/api/v1/auth/publicacion/normal/imagenes/${val}`}
            />
          ))}
        </SliderComponent>
      </div>

      <section className="text-xs md:text-base px-4 py-2 divide-y space-y-2 dark:divide-dark-secondary/70">
        <p className="text-justify text-sm py-2 ">{data.descripcion}</p>
        <div className="flex w-full">
          <div className="mt-3 mx-5 flex flex-row text-xs">
            <div className="flex font-normal rounded-md mb-2 mr-4 items-center">
              Comentarios:
              <span className="ml-1 text-ms"> {data.comentarios}</span>
            </div>
            <div className="flex font-normal rounded-md mb-2 mr-4 items-center">
              Visto: <span className="ml-1 text-ms"> 60k</span>
            </div>
          </div>
          <div className="mt-3 mx-5 w-full flex justify-end text-xs">
            <div className="flex  rounded-md mb-2 mr-4 items-center">
              <button
                onClick={submit}
                className="mr-2 p-0.5 text-center transition-all hover:text-light-primary hover:bg-dark-primary dark:hover:text-dark-primary dark:hover:bg-white rounded-full cursor-pointer"
              >
                {data.like ? (
                  <UilHeart className="inline-flex md:w-auto" color="red" />
                ) : (
                  <UilHeart className="inline-flex md:w-auto" />
                )}
              </button>
              Likes: <div className="ml-1  text-ms"> {data.likes}</div>
            </div>
          </div>
        </div>
        <Commets publicationId={data.id} />
      </section>
    </div>
  );
};
