import './App.css';
import React from 'react';
import InputForm from './InputForm.js';
import ResultCard from './ResultCard.js';


function App() {
  const [results, setResults] = React.useState(null);
  const calculatePay = (hoursWorked, hourlyRate, ) => {
    
      const dailyPay = hoursWorked * hourlyRate;
      const weeklyPay = dailyPay * 5;
      const monthlyPay = weeklyPay * 4;
      const yearlyPay = monthlyPay * 12;

    setResults({
      dailyPay,
      weeklyPay,
      monthlyPay,
      yearlyPay,
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
