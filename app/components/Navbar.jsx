import Link from 'next/link'
import React from 'react'
import DollarCoin from './DollarCoin'
export default function Navbar() {
    return (

        <nav className='w-full h-20 bg-white shadow-lg text-sm md:text-base flex items-center  md:justify-between md:px-14' >
            <div className='flex text-white justify-center items-center gap-2 md:gap-3'>
                <img className='hidden md:block' width={200} src='/images/logo10.png' alt=''/>
                <h2>Money Master</h2>
            </div>
            <div className='flex gap-5 md:gap-12 items-center '>
                <ul className='flex  gap-3   md:gap-6 '>
                    <li className='cursor-pointer hover:underline flex gap-2  text-cyan-950 font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden sm:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <Link href="/">
                            Inicio
                        </Link>
                    </li>

                    <li className='cursor-pointer hover:underline flex gap-2  text-cyan-950 font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden sm:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                        <Link href="list">
                            Tipos de Cambio
                        </Link>
                    </li>
                    <li className='cursor-pointer hover:underline flex gap-2  text-cyan-950 font-semibold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden sm:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <Link href="mobile">
                            Aplicación Móvil
                        </Link>

                    </li>
                </ul>
                <button className='bg-cyan-700 md:w-28 h-10 md:h-10 text-white rounded-sm'>Iniciar Sesion</button>
                <button className='bg-cyan-700 md:w-28 h-10 md:h-10 text-white rounded-sm'>Registrarse</button>
            </div>
        </nav>
    )
}
