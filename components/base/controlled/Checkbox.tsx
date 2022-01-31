import * as React from 'react'

interface ICheckbox {
  label: string
  value?: string
  className?: string
  onClick: Function
}

const Checkbox: React.FC<ICheckbox> = ({
  label,
  value,
  onClick,
  className,
}) => {
  const random = Math.random()
  return (
    <div className={`flex flex-row items-center mb-1 ${className}`}>
      <input
        type="checkbox"
        id={`name${random}`}
        value={value}
        className="mr-2 text-gray-500 rounded"
        onClick={(val) => onClick(val)}
      />
      <label htmlFor={`name${random}`}>{label}</label>
    </div>
  )
}

export default Checkbox
