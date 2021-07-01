import React from 'react'

export interface CardProps {
  heading: string
  description: string
  label: string
}

export const Card: React.FC<CardProps> = ({ heading, description, label }: CardProps) => {
  return (
    <div className="grid max-w-4xl grid-cols-1 gap-2 xl:grid-cols-3 md:grid-cols-2 xl:max-w-6xl">
      <div className="flex p-4 m-2 bg-gray-200 rounded-lg">
        <div className="w-64 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start ml-4">
          <h4 className="text-xl font-semibold">{heading}</h4>
          <p className="text-sm">{description}</p>
          <a
            className="p-2 mt-3 text-xs font-medium leading-none uppercase bg-gray-400 rounded"
            href="#"
          >
            {label}
          </a>
        </div>
      </div>
      <div className="flex p-4 m-2 bg-gray-200 rounded-lg">
        <div className="w-64 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start ml-4">
          <h4 className="text-xl font-semibold">{heading}</h4>
          <p className="text-sm">{description}</p>
          <a
            className="p-2 mt-3 text-xs font-medium leading-none uppercase bg-gray-400 rounded"
            href="#"
          >
            {label}
          </a>
        </div>
      </div>
      <div className="flex p-4 m-2 bg-gray-200 rounded-lg">
        <div className="w-64 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start ml-4">
          <h4 className="text-xl font-semibold">{heading}</h4>
          <p className="text-sm">{description}</p>
          <a
            className="p-2 mt-3 text-xs font-medium leading-none uppercase bg-gray-400 rounded"
            href="#"
          >
            {label}
          </a>
        </div>
      </div>
    </div>
  )
}

export const PrimaryCard: React.FC<CardProps> = ({ heading, description, label }: CardProps) => {
  return (
    <div className="grid max-w-6xl grid-cols-1 gap-2 xl:grid-cols-4 md:grid-cols-2">
      <div className="flex flex-col p-4 m-2 bg-gray-200 rounded-lg">
        <div className="h-40 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start mt-4">
          <h4 className="text-xl font-semibold">{heading}</h4>
          <p className="text-sm">{description}</p>
          <a
            className="p-2 mt-3 text-xs font-medium leading-none uppercase bg-gray-400 rounded"
            href="#"
          >
            {label}
          </a>
        </div>
      </div>
      <div className="flex flex-col p-4 m-2 bg-gray-200 rounded-lg">
        <div className="h-40 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start mt-4">
          <h4 className="text-xl font-semibold">{heading}</h4>
          <p className="text-sm">{description}</p>
          <a
            className="p-2 mt-3 text-xs font-medium leading-none uppercase bg-gray-400 rounded"
            href="#"
          >
            {label}
          </a>
        </div>
      </div>
      <div className="flex flex-col p-4 m-2 bg-gray-200 rounded-lg">
        <div className="h-40 bg-gray-400 rounded-lg"></div>
        <div className="flex flex-col items-start mt-4">
          <h4 className="text-xl font-semibold">{heading}</h4>
          <p className="text-sm">{description}</p>
          <a
            className="p-2 mt-3 text-xs font-medium leading-none uppercase bg-gray-400 rounded"
            href="#"
          >
            {label}
          </a>
        </div>
      </div>
    </div>
  )
}
