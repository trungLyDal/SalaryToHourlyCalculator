import React, {useState} from 'react';

const InputForm = ({onCalculate}) => {
    const [hoursWorked, setHoursWorked] = useState(0);
    const [hourlyRate, setHourlyRate] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(hoursWorked, hourlyRate);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Input Your Hours:</h2>
            <div>
                <label>Hours Worked</label>
                <input type="number" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} />
            </div>
            <div>
                <label>Hourly Rate</label>
                <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} />
            </div>
            <div>
                <button type="submit">Calculate</button>
            </div>
        </form>
    )
}
export default InputForm;
