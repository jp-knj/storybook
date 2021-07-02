import React from 'react'

export interface AlertProps {
  status?: 'note' | 'warning' | 'error'
  message: string
}

export const Alert: React.FC<AlertProps> = ({
  status = 'note',
  message = 'ここにメッセージが入ります',
}) => {
  const statusTextMode =
    status === 'note'
      ? 'text-green-600'
      : status === 'warning'
      ? 'text-yellow-600'
      : status === 'error'
      ? 'text-red-600'
      : ''
  const statusBgMode =
    status === 'note'
      ? 'bg-green-600'
      : status === 'warning'
      ? 'bg-yellow-600'
      : status === 'error'
      ? 'bg-red-600'
      : ''
  const labelTextMessege =
    status === 'note'
      ? 'お知らせ'
      : status === 'warning'
      ? '注意'
      : status === 'error'
      ? '警告'
      : ''

  return (
    <div className="container items-center px-5 py-12 lg:px-20">
      <div className={`w-full border rounded-lg shadow-xl ${statusTextMode}`}>
        <div className="flex items-center justify-between px-6 py-4 mx-auto ">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 icon icon-tabler icon-tabler-alert-triangle"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
              <polyline points="11 12 12 12 12 16 13 16"></polyline>
            </svg>
            <p className="text-sm font-semibold tracking-wide ">
              <strong>{labelTextMessege} :</strong> {message}
            </p>
          </div>
          <button
            className={`p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:${statusBgMode} focus:outline-none`}
            type="button"
            aria-label="Close"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-circle-x"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M10 10l4 4m0 -4l-4 4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
