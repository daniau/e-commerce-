import React from 'react'

export default function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
      <div className="absolute inset-0 rounded-full border-4 border-[#DB4444] border-t-transparent animate-spin"></div>
    </div>
    <p className="text-gray-500 text-sm font-medium">Loading...</p>
  </div>
  )
}
