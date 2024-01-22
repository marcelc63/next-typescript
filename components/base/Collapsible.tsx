import * as React from 'react'
import { useState } from 'react'

import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

interface ICollapsible {
  title: string
  className?: string
  children: React.ReactNode
}

const Collapsible: React.FC<ICollapsible> = ({
  title,
  className,
  children,
}) => {
  const [show, setShow] = useState(true)
  return (
    <div className={`bg-white shadow ${className}`}>
      <div
        className="flex flex-row justify-between items-center p-4 px-4 cursor-pointer hover:bg-gray-100"
        onClick={() => setShow(!show)}
      >
        <p className="font-bold">{title}</p>
        <p className="text-gray-400 text-sm">
          {show ? (
            <FaChevronDown className="h-5 w-5" />
          ) : (
            <FaChevronUp className="h-5 w-5" />
          )}
        </p>
      </div>
      {show && children}
    </div>
  )
}

export default Collapsible
