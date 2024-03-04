import * as React from 'react'
import {
  UseFormRegister,
  FieldValues,
  FieldValue,
  DeepMap,
  FieldError,
} from 'react-hook-form'

interface ITextarea {
  placeholder: string
  name?: FieldValue<any>
  value?: string
  className?: string
  register?: UseFormRegister<FieldValues>
  errors?: DeepMap<FieldValues, FieldError>
  disabled?: boolean
}

const Textarea: React.FC<ITextarea> = ({
  placeholder,
  className = '',
  name,
  value,
  register,
  errors,
  disabled,
}: ITextarea) => {
  return register ? (
    <>
      <textarea
        className={`border border-gray-200 rounded w-full p-2 ${className}`}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        {...register(name)}
      />
      {errors?.[name] && (
        <p className="mt-1 text-red-500 text-sm">{errors[name].message}</p>
      )}
    </>
  ) : (
    <textarea
      className={`border border-gray-200 rounded w-full p-2 ${className}`}
      placeholder={placeholder}
      value={value}
      name={name}
      disabled={disabled}
    />
  )
}
export default Textarea
