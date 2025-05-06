import React from 'react';
import { useExchangeRates } from '../hooks/useExchangeRates';

const ExchangeTable = () => {
  const { rates, loading, error } = useExchangeRates();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Exchange Rates (Base: USD)</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-2 py-1">Currency</th>
            <th className="border px-2 py-1">Rate</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rates).map(([currency, rate]) => (
            <tr key={currency}>
              <td className="border px-2 py-1">{currency}</td>
              <td className="border px-2 py-1">{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeTable;
