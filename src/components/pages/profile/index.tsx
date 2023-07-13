import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { UilUserPlus, UilEditAlt } from '@iconscout/react-unicons';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Loader } from '../../../shared/components/Loader';
import { CreatePublicationCard } from '../../../shared/components/publication/CreatePublicationCard';
import { PublicationNormalCard } from '../../../shared/components/publication/NormalCard';
import { useGetPublicationsByUserId } from '../../../shared/hooks/react-query/publications';
import {
  useGetUser,
  useGetUserFollowers,
} from '../../../shared/hooks/react-query/user';
import { CreatePublicationFrom } from '../app/components/CreatePublication';
import { useFolowerDefualtValues } from './components/utils/addOrRemoveFollower';
import { UpdateProfile } from './components/Form';

const routes = [
  { name: 'Mis publicaciones', id: 0 },
  { name: 'mis cursos', id: 1 },
  { name: 'mis empleos', id: 2 },
  { name: 'mis seguidores', id: 3 },
  { name: 'editar perfil', id: 4 },
];

const UserFollowers = () => {
  const { followers, isLoading } = useGetUserFollowers();
  if (isLoading) return <Loader />;
  return (
    <section className="w-4/5 grid grid-cols-2 gap-4">
      {followers.map((val) => (
        <div
          key={val.id}
          className="flex justify-between bg-dark-secondary p-4 rounded-md"
        >
          <div className="flex">
            <img
              src="https://picsum.photos/200/200"
              className="h-14 w-14 rounded-full"
            />
            <div className=" px-3 font-semibold">
              <span className="text-sm">{val.nombre}</span>
              <div className="text-xs font-light">@{`${val.nombre}`}</div>
            </div>
          </div>

          <div className="py-2">
            <button className="font-bold bg-dark-text-primary text-md rounded-full py-1 px-4">
              un follow
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

const UserPiblications = () => {
  const [page, setPage] = useState(1);

  const { publications, isLoading } = useGetPublicationsByUserId(page);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]);

  if (isLoading && publications.length === 0) return <Loader />;

  return (
    <section className="h-auto w-3/4 md:basis-1/2 space-y-2 md:space-y-4">
      <CreatePublicationCard />
      <main className="space-y-4 mt-4 gap-4 flex justify-center flex-col items-center">
        {publications?.map((val, idx) => (
          <PublicationNormalCard data={val} key={idx} />
        ))}
      </main>
      <CreatePublicationFrom />
    </section>
  );
};

const Tabs = [
  {
    Component: <UserPiblications key="userpublications" />,
    id: 0,
  },
  {
    Component: <UserPiblications key="userpublications" />,
    id: 1,
  },
  {
    Component: <UserPiblications key="userpublications" />,
    id: 2,
  },
  {
    Component: <UserFollowers key="followers" />,
    id: 3,
  },
  {
    Component: <UpdateProfile key="update" />,
    id: 4,
  },
];

const TabMenu = () => {
  const [searchParams] = useSearchParams();
  const { userInfo } = useSelector((state) => state.auth);
  const qparams = searchParams.get('id');

  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      <div className="flex font-bold sticky top-16 p-4 z-50 backdrop-blur-md text-light-text-secondary dark:text-dark-text-secondary dark:bg-dark-primary/60 bg-white/60 w-full dark:bg-dark-primary">
        {routes.map((val) => (
          <button
            key={val.id}
            className={`mx-auto capitalize  ${
              val.id === activeTab && 'border-dark-text-primary border-b-2 '
            }`}
            onClick={() => handleClick(val.id)}
          >
            {val.name}
          </button>
        ))}
      </div>
      <section className="flex justify-center flex-col items-center">
        {Tabs[activeTab].Component}
      </section>
    </div>
  );
};

const Profile = () => {
  const { user, isLoading } = useGetUser();
  const { userInfo } = useSelector((state) => state.auth);
  const { submit } = useFolowerDefualtValues(true);
  const navigate = useNavigate();

  const handleUpdateProfle = () => {
    navigate(`update/${userInfo.id_usuario}`);
  };

  if (isLoading) return <Loader />;

  return (
    <section className="relative max-w-3xl mx-auto my-3 bg-light-primary text-light-text-secondary dark:bg-dark-primary dark:text-dark-text-secondary">
      <div className="flex flex-col justify-center items-center my-5 ">
        <div className="w-36 h-36">
          <img
            className="bg-cover object-cover bg-center bg-no-repeat rounded-full h-full w-full"
            src={
              `http://localhost:8080/api/v1/auth/usuario/ver/imagen/perfil/${user.id}`
              // 'https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png'
            }
            alt=""
          />
        </div>
        <span className="my-3 capitalize">{`${user?.nombre} ${user?.apellidos}`}</span>
        <div className="flex justify-center items-center gap-2 my-3">
          <div className="font-semibold text-center mx-4">
            <p className="">102</p>
            <span className="">Followers</span>
          </div>
          <div className="font-semibold text-center mx-4">
            <p className="">102</p>
            <span className="">Posts</span>
          </div>
          <div className="font-semibold text-center mx-4">
            <p className="">102</p>
            <span className="">Folowing</span>
          </div>
        </div>

        <section className="space-x-5">
          {user.id === userInfo.id_usuario ? (
            <button
              onClick={handleUpdateProfle}
              className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400"
            >
              Editar perfil <UilEditAlt className="inline-flex" />
            </button>
          ) : (
            <button
              className="my-5 px-5 py-2 font-semibold text-sm border border-gray-400"
              onClick={submit}
            >
              seguir <UilUserPlus className="inline-flex" />
            </button>
          )}
        </section>

        <p className="mb-3">{user?.descripcion}</p>
      </div>
      <TabMenu />
    </section>
  );
};

export default Profile;
