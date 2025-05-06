import { useState, useEffect } from 'react';
import axios from 'axios';

export const useExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get('https://open.er-api.com/v6/latest/USD');
        setRates(res.data.rates);
      } catch (err) {
        setError('Failed to fetch exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);
  console.log(setRates);

  return { rates, loading, error };
};