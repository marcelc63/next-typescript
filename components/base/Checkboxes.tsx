import * as React from 'react'
import {
  UseFormRegister,
  FieldValues,
  DeepMap,
  FieldError,
} from 'react-hook-form'

import Checkbox from '~/components/base/Checkbox'

interface ICheckbox {
  label: string
  value: string
}

interface ICheckboxes {
  items: Array<ICheckbox>
  name: string
  className?: string
  register: UseFormRegister<FieldValues>
  errors?: DeepMap<FieldValues, FieldError>
}

const Checkboxes: React.FC<ICheckboxes> = ({
  items,
  name,
  className,
  register,
  errors,
}) => {
  return (
    <>
      <div className={`flex flex-row items-center ${className}`}>
        {items.map((item: ICheckbox, index: number) => {
          return (
            <Checkbox
              key={index}
              label={item.label}
              name={name}
              value={item.value}
              register={register}
              className="mr-4"
            />
          )
        })}
      </div>
      {errors?.[name] && (
        <p className="mt-1 text-red-500 text-sm">{errors[name].message}</p>
      )}
    </>
  )
}

export default Checkboxes
