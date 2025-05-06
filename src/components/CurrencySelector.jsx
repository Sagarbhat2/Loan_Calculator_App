import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const CurrencySelector = () => {
  const { currency, setCurrency, exchangeRates } = useContext(GlobalContext);

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const topCurrencies = Object.keys(exchangeRates).slice(0, 7); 
  const currencyOptions = [...new Set([...topCurrencies, 'INR'])];


  return (
    <div className="mt-4">
      <label className="mr-2 font-medium">Currency:</label>
      <select
        value={currency}
        onChange={handleChange}
        className="border p-1 rounded"
      >
        {currencyOptions.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
