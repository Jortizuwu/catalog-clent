import React from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { FieldError } from './FieldError'

export const SelectLabel = ({
  options,
  control,
  labelName = '',
  name,
  errors
}) => {
  return (
    <div className='w-full space-y-2'>
      <label className='px-1 text-sm'>{labelName}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            classNames={{
              control: (state) =>
                'block p-2 pl-4 w-full dark:bg-dark-secondary dark:text-dark-text-secondary ring-dark-text-primary ring-2'
            }}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#ffb9fa',
                primary: '#ffb9fa'
              }
            })}
            styles={{
              option: (provided) => ({
                ...provided,
                color: 'black',
                backgroundColor: 'white'
              }),
              control: (provided) => ({
                ...provided,
                color: 'black',
                borderRadius: '0.5rem'
              }),
              singleValue: (provided) => ({
                ...provided,
                color: 'black'
              })
            }}
          />
        )}
      />
      {errors[name] && <FieldError error={errors[name].message} />}
    </div>
  )
}
