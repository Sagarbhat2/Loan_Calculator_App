import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const AmortizationTable = () => {
  const { schedule, currency, exchangeRates } = useContext(GlobalContext);

  const convert = (amount) => {
    const rate = exchangeRates[currency] || 1;
    return `${(amount * rate).toFixed(2)} ${currency}`;
  };

  if (!schedule.length) return null;

  return (
    <div className="mt-10 p-6 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-md border dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4">Amortization Schedule ({currency})</h3>

      <div className="overflow-y-auto max-h-[400px]">
        <table className="min-w-full table-auto">
          <thead className="sticky top-0 bg-white dark:bg-gray-800 z-10">
            <tr className="text-gray-700 dark:text-gray-200 border-b border-gray-300 dark:border-gray-600 text-left">
              <th className="px-4 py-3">Month</th>
              <th className="px-4 py-3">Principal</th>
              <th className="px-4 py-3">Interest</th>
              <th className="px-4 py-3">Remaining Balance</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-100">
            {schedule.map((row, index) => (
              <tr
                key={row.month}
                className={`${
                  index % 2 === 0
                    ? 'bg-white dark:bg-gray-800'
                    : 'bg-gray-50 dark:bg-gray-700'
                }`}
              >
                <td className="px-4 py-3">{row.month}</td>
                <td className="px-4 py-3">{convert(row.principal)}</td>
                <td className="px-4 py-3">{convert(row.interest)}</td>
                <td className="px-4 py-3">{convert(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AmortizationTable;
