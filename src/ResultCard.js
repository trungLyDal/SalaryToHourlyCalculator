// ResultCard.jsx
import React from 'react';

const ResultCard = ({ yearlyPay, monthlyPay, hourlyPay, dailyPay }) => {
  return (
    <div>
      <h2>Salary Breakdown</h2>
      <p>Yearly Pay: ${yearlyPay}</p>
      <p>Monthly Pay: ${monthlyPay}</p>
      <p>Hourly Pay: ${hourlyPay}</p>
      <p>Daily Pay: ${dailyPay}</p>
    </div>
  );
};

export default ResultCard;
