import React from 'react'
import QRmobile from '../components/QRmobile'
import Celular from '../components/Celular'

export default function page() {
    return (
        <>
            <div className="md:flex place-content-center gap-15 bg-opacity-85 bg-gradient-to-b from-cyan-800 to-cyan-700 items-center">
                <Celular />
                <QRmobile/>
            </div>
        </>
    )
}
