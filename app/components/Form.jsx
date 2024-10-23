"use client";
import React, { useState, useEffect } from 'react';

export default function Form() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState(null);
    const [rates, setRates] = useState({});
    const [currencies, setCurrencies] = useState([]);
    const apiKey = '3e5ab59fd341d4f77f324218';

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
                const data = await response.json();
                setRates(data.conversion_rates);
                setCurrencies(Object.keys(data.conversion_rates));
            } catch (error) {
                console.error('Error fetching rates:', error);
            }
        };

        fetchRates();
    }, [fromCurrency]);

    const handleConvert = () => {
        if (!rates[toCurrency]) {
            setResult('Conversion rate not available');
            return;
        }
        const conversionRate = rates[toCurrency];
        const convertedAmount = amount * conversionRate;
        setResult(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    };

   
    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto mt-10 shadow-lg">
            <div className="flex items-center justify-between mb-6 gap-2">
                <div className="w-1/3">
                    <label className="block text-sm text-gray-600 mb-2">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md text-lg"
                    />
                </div>

                <div className='flex w-3/4 items-center justify-center'>
                    <div className="w-1/3">
                        <label className="block text-sm text-gray-600 mb-2">From</label>
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md text-lg"
                        >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="text-2xl text-center w-1/6">
                        <button onClick={handleSwap}><span>⇄</span></button>
                    </div>

                    <div className="w-1/3">
                        <label className="block text-sm text-gray-600 mb-2">To</label>
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md text-lg"
                        >
                            {currencies.map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className='flex w-full gap-5'>
                {result && (
                    <div className="mt-6 text-center text-xl font-semibold text-gray-800 w-1/2">
                        {result}
                    </div>
                )}
                <button
                    onClick={handleConvert}
                    className="w-1/2 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-500"
                >
                    Convert
                </button> 
            </div>
        </div>
    );
}
