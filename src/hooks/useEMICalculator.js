import { useState } from 'react';

export const useEMICalculator = () => {
  const [emi, setEmi] = useState(null);
  const [error, setError] = useState(null);

  const calculateEMI = (amount, rate, years) => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 100 / 12;
    const N = parseFloat(years) * 12;

    if (!P || !R || !N) {
      setError('Invalid input');
      setEmi(null);
      return;
    }

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(EMI.toFixed(2));
    setError(null);
  };

  return { emi, calculateEMI, error };
};