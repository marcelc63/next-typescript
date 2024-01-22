import * as React from 'react'

import styles from '~/styles/Modal.module.scss'
import { MdOutlineCancel } from 'react-icons/md'

interface IModal {
  title?: string
  open: boolean
  close: any
  children: React.ReactNode
}

const Modal: React.FC<IModal> = ({ open, close, title, children }) => {
  return open ? (
    <div className={styles['modal-mask']}>
      <div
        className={styles['modal-wrapper']}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            close()
          }
        }}
      >
        <div className={`${styles['modal-container']} relative`}>
          {title && (
            <div className="pb-2 flex flex-row justify-between">
              <p className="text-lg font-bold">{title}</p>
            </div>
          )}
          {children}
          <MdOutlineCancel
            className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-400 absolute top-2 right-2"
            onClick={close}
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Modal
