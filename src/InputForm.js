import React, {useState} from 'react';
import './App.css';

const InputForm = ({onCalculate}) => {
    const [hoursWorked, setHoursWorked] = useState(null);
    const [hourlyRate, setHourlyRate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(hoursWorked, hourlyRate);
    };

    return (
        <div class="center">
  <h1>Input Your Hours:</h1>
  <form onSubmit={handleSubmit}>
    <div class="inputbox">
    <input type="number" required="required" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} />
      <span>Work Hours</span>
    </div>
    <div class="inputbox">
       <input type="number" required="required" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} />
      <span>Hourly Rate</span>
    </div>
    <div className='button-custom'>
                <button className='button-56' type="submit">Calculate</button>
    </div>
  </form>
</div>
        
    )
}
export default InputForm;
