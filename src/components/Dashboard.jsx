import React, { useState } from "react";

const Dashboard = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const R = parseFloat(rate) / 100 / 12;
    const N = parseFloat(years) * 12;

    if (!P || !R || !N) {
      setMonthlyPayment("Invalid input");
      return;
    }

    const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setMonthlyPayment(EMI.toFixed(2));
  };

  return (
    <div className="mt-14 max-w-4xl mx-auto p-4">
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="number"
          placeholder="Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        />
        <input
          type="number"
          step="0.1"
          placeholder="Interest Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        />
        <input
          type="number"
          placeholder="Term (Years)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        />
        <button
          onClick={calculateEMI}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
        >
          CALCULATE
        </button>
      </div>

      {monthlyPayment && (
        <div className="text-xl font-semibold">
          Monthly Payment: ₹{monthlyPayment}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
