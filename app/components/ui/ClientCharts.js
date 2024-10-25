'use client'
import React from 'react';

const ClientCharts = () => {
  const data = [
    {
      name: 'Peso Argentino',
      compra: 0.0058,
      venta: 0.0058,
      variacion: 0.0000
    },
    {
      name: 'Dólar Australiano',
      compra: 3.8100,
      venta: 3.8150,
      variacion: 0.5455
    },
    {
      name: 'Dólar Canadense',
      compra: 4.1250,
      venta: 4.1300,
      variacion: 0.2597
    },
    {
      name: 'Franco Suíço',
      compra: 6.5750,
      venta: 6.5830,
      variacion: 1460.8500
    },
    {
      name: 'Dólar Comercial',
      compra: 5.7010,
      venta: 5.7030,
      variacion: 0.2285
    },
    {
      name: 'Dólar Turismo',
      compra: 5.7420,
      venta: 5.9220,
      variacion: 0.0727
    },
    {
      name: 'Euro',
      compra: 6.1600,
      venta: 6.1600,
      variacion: -0.0487
    },
    {
      name: 'Libra Esterlina',
      compra: 7.3840,
      venta: 7.3860,
      variacion: -0.2296
    },
    {
      name: 'Iene',
      compra: 0.0478,
      venta: 0.0478,
      variacion: 0.8439
    }
  ];

  const maxValue = Math.max(...data.map(item => Math.max(item.compra, item.venta)));

  return (
    <div className="p-4 space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Taxas de Câmbio</h3>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between text-sm mb-1">
                <span>{item.name}</span>
                <div className="space-x-4">
                  <span>Compra: {item.compra}</span>
                  <span>Venda: {item.venta}</span>
                </div>
              </div>
              <div className="h-6 bg-gray-100 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-blue-500 absolute left-0"
                  style={{ width: `${(item.compra / maxValue) * 100}%` }}
                />
                <div
                  className="h-full bg-green-500 absolute left-0"
                  style={{ width: `${(item.venta / maxValue) * 100}%`, opacity: 0.7 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Variação (%)</h3>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between text-sm mb-1">
                <span>{item.name}</span>
                <span>{item.variacion}%</span>
              </div>
              <div className="h-6 bg-gray-100 rounded-full overflow-hidden flex">
                <div
                  className={`h-full ${item.variacion >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{
                    width: `${Math.min(Math.abs(item.variacion), 100)}%`,
                    marginLeft: item.variacion < 0 ? 'auto' : '0'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
          <span>Compra</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
          <span>Venda</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCharts;