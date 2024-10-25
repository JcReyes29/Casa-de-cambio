import React from 'react'
import DollarCoin from './DollarCoin'

export default function Title() {
  return (
    <div className='text-center text-white mt-10 flex flex-col gap-7' >
      <div className='grid gap-5 md:flex justify-center'>
        <h1 className='text-5xl font-semibold'>Conversor de Moneda</h1>
        <DollarCoin/>
      </div>
      <p className='text-2xl'>
        Realiza tu conversion al instante, contamos con todos los tipos de moneda en el mundo
      </p>
    </div>
  )
}
