import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [currency, setCurrency] = useState('USD');
  const [emi, setEmi] = useState(null);
  const [emiError, setEmiError] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [showResult, setShowResult] = useState(false); 

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const calculateEMI = (amount, rate, years) => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 100 / 12;
    const N = parseFloat(years) * 12;

    if (!P || !R || !N) {
      setEmiError('Invalid input');
      setEmi(null);
      setSchedule([]);
      setShowResult(false); 
      return;
    }

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiValue.toFixed(2));
    setEmiError(null);
    setShowResult(true); 

    let balance = P;
    const newSchedule = [];
    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emiValue - interest;
      balance -= principal;
      newSchedule.push({
        month: i,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }
    setSchedule(newSchedule);
  };

  const resetResult = () => {
    setShowResult(false); 
    setEmi(null);
    setSchedule([]);
    setEmiError(null);
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get('https://open.er-api.com/v6/latest/USD');
        setExchangeRates(res.data.rates);
      } catch (err) {
        console.error('Exchange rate fetch failed');
      }
    };
    fetchRates();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
        currency,
        setCurrency,
        emi,
        emiError,
        calculateEMI,
        resetResult,      
        schedule,
        exchangeRates,
        showResult,        
        setShowResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
