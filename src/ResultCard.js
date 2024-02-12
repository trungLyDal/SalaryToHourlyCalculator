// ResultCard.jsx
import React from 'react';

const ResultCard = ({ yearlyPay, monthlyPay, weeklyPay, dailyPay }) => {
  return (
    <div className="center">
      <h2>Salary Breakdown</h2>
      <p>Yearly Pay: ${yearlyPay}</p>
      <p>Monthly Pay: ${monthlyPay}</p>
      <p>Weekly Pay: ${weeklyPay}</p>
      <p>Daily Pay: ${dailyPay}</p>
    </div>
  );
};

export default ResultCard;
