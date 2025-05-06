import React from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';


const EMIResult = () => {
const { emi, emiError } = useContext(GlobalContext);

    
  if (emiError) return <p className="text-red-600">{emiError}</p>;
  if (!emi) return null;
  return <div className="text-xl font-semibold mt-3">Monthly EMI: ₹{emi}</div>;
};

export default EMIResult;

