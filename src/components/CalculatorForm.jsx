import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const CalculatorForm = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');

  const { calculateEMI, resetResult, showResult } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEMI(amount, rate, years);
  };

  const handleReset = () => {
    setAmount('');
    setRate('');
    setYears('');
    resetResult();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-20 items-end">
      <input
        type="number"
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/4"
        required
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/4"
        required
      />
      <input
        type="number"
        placeholder="Term (Years)"
        value={years}
        onChange={(e) => setYears(e.target.value)}
        className="border p-2 rounded w-full sm:w-1/4"
        required
      />

      <div className="flex gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          CALCULATE
        </button>

        {showResult && (
          <button
            type="button"
            onClick={handleReset}
            className="bg-pink-500 text-white px-4 py-2 rounded"
          >
            RESET TABLE
          </button>
        )}
      </div>
    </form>
  );
};

export default CalculatorForm;
