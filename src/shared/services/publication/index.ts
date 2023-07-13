import { catalogApi } from '../../common/api';

const publicationServices = {
  // normal
  createPublication: async (values) => {
    const data = new FormData();
    data.append('descripcion', values.description);
    if (values.images) {
      values.images.forEach((element) => {
        data.append('imagenes', element);
      });
    }

    const response = await catalogApi.post(
      'auth/publicacion/normal/nueva',
      data,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data.data;
  },

  getPublications: async () => {
    // const response = await catalogApi.get('auth/publicacion/normal/todas')
    const response = await catalogApi.get(
      'auth/publicacion/normal/todas?pagina=1&elementos=20'
    );
    return response.data.data.content;
  },
  getPublicationsByUserId: async (id, page) => {
    const response = await catalogApi.get(
      `auth/publicacion/normal/usuario/${id}?pagina=${page}&elementos=2`
    );
    return response.data.data;
  },

  // jobs
  createPublicationJobs: async (values) => {
    const response = await catalogApi.post(
      'auth/publicacion/empleo/nueva',
      values
    );
    return response.data.data;
  },
};

export default publicationServices;
