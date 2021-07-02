import React from 'react'
import './background.css'

export interface BackgroundProps {
  label: string
  params: number
}

export const Background: React.FC<BackgroundProps> = ({ label, params }: BackgroundProps) => {
  return (
    <div className="bg h-screen font-sans font-bold text-white">
      <div className="flex-wrap flex w-2/3 mx-auto p-8">
        <div className="relative w-1/3">
          <div className="w-32 h-32 bg-circle rounded-full opacity-25"></div>
          <div className="absolute pin-t ml-8 p-2">
            <div className="text-5xl opacity-50">
              {params}
              <span className="text-2xl">%</span>
            </div>
            <div className="text-lg opacity-75">{label}</div>
          </div>
        </div>

        <div className="relative w-1/3">
          <div className="w-32 h-32 bg-circle rounded-full opacity-25"></div>
          <div className="absolute pin-t ml-8 p-2">
            <div className="text-5xl opacity-50">
              {params}
              <span className="text-2xl">%</span>
            </div>
            <div className="text-lg opacity-75">{label}</div>
          </div>
        </div>

        <div className="relative w-1/3">
          <div className="w-32 h-32 bg-circle rounded-full opacity-25"></div>
          <div className="absolute pin-t ml-8 p-2">
            <div className="text-5xl opacity-50">
              {params}
              <span className="text-2xl">%</span>
            </div>
            <div className="text-lg opacity-75">{label}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
