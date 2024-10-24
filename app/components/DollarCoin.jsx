import React from 'react';

export default function DollarCoin() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center transform transition-all duration-500 ease-in-out hover:scale-110 animate-bounce">
          <span className="text-white text-3xl font-bold">$</span>
        </div>
      </div>
    </div>
  )
}
