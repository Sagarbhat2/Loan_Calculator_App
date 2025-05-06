import React from 'react';
import CalculatorForm from '../components/CalculatorForm';
import EMIResult from '../components/EMIResult';
import AmortizationTable from '../components/AmortizationTable';
import CurrencySelector from '../components/CurrencySelector';

const Home = () => {
  return (
    <div className="p-4">
      <CalculatorForm />
      <CurrencySelector/>
      <EMIResult />
      <AmortizationTable />
    </div>
  );
};

export default Home;