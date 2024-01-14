import './App.css';
import React from 'react';
import InputForm from './InputForm.js';
import ResultCard from './ResultCard.js';


function App() {
  const [results, setResults] = React.useState(null);
  const calculatePay = (hoursWorked, hourlyRate, ) => {
    const yearlyPay = hoursWorked * hourlyRate * 52; // Assuming 52 weeks in a year
    const monthlyPay = yearlyPay / 12;
    const hourlyPay = hourlyRate;
    const dailyPay = yearlyPay / 365; // Assuming 365 days in a year

    setResults({
      yearlyPay,
      monthlyPay,
      hourlyPay,
      dailyPay,
    });
  };


  return (
    <main>
        <div className="App-header">
          <h1>Salary Calculator</h1>
 
        </div>

        <div className='input-form'>  
        <InputForm onCalculate={calculatePay} />
        
        {results && <ResultCard {...results} />}
        </div>
    </main>

    
    
  );
}

export default App;
