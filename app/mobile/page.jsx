import React from 'react'
import QRmobile from '../components/QRmobile'
import Celular from '../components/Celular'

export default function page() {
    return (
        <>
            <div className="md:flex place-content-center gap-15 bg-cyan-800 items-center">
                <Celular />
                <QRmobile/>
            </div>
        </>
    )
}
