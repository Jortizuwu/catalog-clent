import React from 'react'
import CurrencyInput from 'react-currency-input-field'
import { Controller } from 'react-hook-form'
import { FieldError } from './FieldError'

export const AmountLabel = ({ control, labelName = '', name, errors }) => {
  return (
    <div className='w-full space-y-2'>
      <label className='px-1 text-sm'>{labelName}</label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, ...rest } }) => (
          <CurrencyInput
            prefix='COP $ '
            id={name}
            name={name}
            className='border-2 focus:ring-2 ring-dark-text-primary border-dark-text-primary'
            placeholder='Please enter a number'
            defaultValue={100000}
            decimalsLimit={2}
            onValueChange={(e) => {
              onChange(e)
            }}
          />
        )}
      />
      {errors[name] && <FieldError error={errors[name].message} />}
    </div>
  )
}
