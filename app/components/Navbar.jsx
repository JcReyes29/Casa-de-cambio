import Link from 'next/link'
import React from 'react'
import DollarCoin from './DollarCoin'
export default function Navbar() {
    return (
        <nav className='w-full h-20 bg-gradient-to-r text-sm md:text-base from-indigo-500 to-indigo-950 flex items-center  md:justify-between md:px-14' >
            <div className='flex text-white justify-center items-center gap-3 md:gap-3'>
                    <DollarCoin/>
                <h2>sync money</h2>
            </div>
            <div className='flex gap-5 md:gap-12 items-center text-white '>
                <ul className='flex  gap-3   md:gap-10 '>
                    <li className='cursor-pointer hover:underline'>
                        <Link href="/">
                            Inicio
                        </Link>
                    </li>

                    <li className='cursor-pointer hover:underline'>
                        <Link href="/list">
                        Tipos de Cambio
                        </Link>
                        
                    </li>
                </ul>
                <button className='bg-indigo-700 md:w-28 h-10 md:h-10'>Iniciar Sesion</button>
                <button className='bg-indigo-700 md:w-28 h-10 md:h-10'>Registrarse</button>
            </div>
        </nav>
    )
}
