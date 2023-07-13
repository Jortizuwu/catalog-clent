import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { SelectLabel } from '../../../../shared/components/form/SelectLabel';
import { InputLabel } from '../../../../shared/components/form/InputLabel';
import { AmountLabel } from '../../../../shared/components/form/AmountLabel';
import { schema, usePublicationJobsDefaultValues } from './utils/create';

const options = [
  { value: 'GATO', label: 'gato' },
  { value: 'PERRO', label: 'perro' },
];

const Create = () => {
  const {
    formValues: { defaultValues },
    isLoading,
    submit,
  } = usePublicationJobsDefaultValues();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'all',
    initialValues: defaultValues,
    resolver: yupResolver(schema),
  });

  console.log(errors);

  if (isLoading) <h1>Loading...</h1>;

  return (
    <main className="bg-light-primary dark:text-dark-text-secondary dark:bg-dark-primary min-h-screen space-y-4">
      <h1 className="text-lg text-center md:text-xl lg:text-2xl">
        Crear publicación de empleo
      </h1>
      <section className="py-2 space-y-4 max-w-5xl mx-auto">
        <form onSubmit={handleSubmit(submit)} className="space-y-4 h-full ">
          <section className="flex w-full gap-4">
            <InputLabel
              label="Titulo"
              errors={errors}
              register={register}
              name="titulo"
              placeholder="titulo"
            />
            <SelectLabel
              control={control}
              name="modalidadTrabajo"
              errors={errors}
              options={options}
              labelName="Modalidad de trabajo"
            />
          </section>
          <InputLabel
            errors={errors}
            register={register}
            label="Lugar de trabajo"
            name="lugarTrabajo"
            placeholder="Lugar trabajo"
          />
          <section className="flex w-full gap-4">
            <AmountLabel
              errors={errors}
              control={control}
              name="minSalario"
              labelName="Salario mínimo"
            />
            <AmountLabel
              errors={errors}
              control={control}
              name="maxSalario"
              labelName="Salario máximo"
            />
          </section>
          <section className="space-y-4">
            <div className="w-full space-y-2">
              <label className="block text-sm font-medium">Descripción</label>
              <textarea
                type="text"
                {...register('descripcion')}
                className="resize-none h-48 border-2 w-full rounded-md p-2 dark:bg-dark-secondary focus:outline-none focus:ring-2 ring-dark-text-primary border-dark-text-primary"
                placeholder="crear publicación"
              />
            </div>
          </section>
          <section className="flex justify-end items-center gap-3">
            <button
              className="px-3 py-2 md:px-4 md:py-3 rounded-lg bg-dark-text-accent transition-all focus:ring-2 ring-dark border-dark-text-primary hover:shadow-md hover:shadow-dark-text-accent text-white font-bold"
              type="submit"
            >
              Crear
            </button>
          </section>
        </form>
      </section>
    </main>
  );
};

export default Create;
