import React from 'react';
import Image from 'next/image';

export default function Celular() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-60 h-96 border-4 border-gray-700 rounded-3xl relative bg-white shadow-lg overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-700 rounded-full"></div>
                <div className="w-full h-full relative">
                    <Image
                        src="/images/appmobile.png"
                        alt="Vista previa de la aplicación"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-3xl"
                    />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );
}
