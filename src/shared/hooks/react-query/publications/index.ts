import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import publicationServices from '../../../services/publication';
import { QUERY_KEYS } from '../../../constant/queryKyes';
import { useState } from 'react';

export const useGetPublication = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const qparams = searchParams.get('id');

  const { data: publications, isLoading } = useQuery(
    [QUERY_KEYS.USER, params.id || qparams],
    () => publicationServices.getPublications(params.id || qparams),
    {
      enabled: !!params.id || !!qparams,
    }
  );

  return {
    publications: [],
    isLoading,
  };
};

export const useGetPublications = () => {
  const { data: publications, isLoading } = useQuery(
    [QUERY_KEYS.PUBLICATIONS],
    () => publicationServices.getPublications()
    // {
    //   enabled: window.localStorage.getItem('token')
    // }
  );

  return {
    publications: [],
    isLoading,
  };
};

export const useGetPublicationsByUserId = (page) => {
  const [searchParams] = useSearchParams();
  const qparams = searchParams.get('id');
  const location = useLocation();
  const [empty, setEmpty] = useState(false);

  const [publications, setPublications] = useState([]);

  const { isLoading } = useQuery(
    [QUERY_KEYS.PUBLICATIONS, qparams, page],
    () => publicationServices.getPublicationsByUserId(qparams, page),
    {
      enabled: !!qparams && location.pathname.includes('profile') && !empty,
      refetchOnWindowFocus: false,
      onSuccess: (pages) => {
        setPublications([...publications, ...pages.content]);
        setEmpty(pages.empty);
      },
    }
  );

  return {
    publications,
    isLoading,
  };
};
