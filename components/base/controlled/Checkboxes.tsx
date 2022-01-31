import * as React from 'react'

import Checkbox from '~/components/base/controlled/Checkbox'

interface ICheckbox {
  label: string
  value: string
}

interface ICheckboxes {
  items: Array<ICheckbox>
  className?: string
  onClick: Function
}

const Checkboxes: React.FC<ICheckboxes> = ({ items, className, onClick }) => {
  return (
    <>
      <div className={`flex flex-col items-center ${className}`}>
        {items.map((item: ICheckbox, index: number) => {
          return (
            <Checkbox
              key={index}
              label={item.label}
              value={item.value}
              onClick={onClick}
            />
          )
        })}
      </div>
    </>
  )
}

export default Checkboxes
