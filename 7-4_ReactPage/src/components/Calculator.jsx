import {useState} from 'react'
import Operation from './Operation';


function Calculator(){

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(null);

    const handleCalculation = () => {
        const res = Operation(num1, num2, operation);
        setResult(res);
    }
    const handleReset = () => {
        setNum1('');
        setNum2('');
        setOperation('+');
        setResult(null);
    };

    return(
        <div>
            <div>
                <input type='text' id='num' value={num1} placeholder='First Number' onChange={(e) => setNum1(e.target.value)} />
            </div>
            <div>
                <select id='operation' value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </div>
            <div>
                <input type='text' id='num' value={num2} placeholder='Second Number' onChange={(e) => setNum2(e.target.value)} />
            </div>
            <button id='equals' onClick={handleCalculation}> = </button>
            <button id='reset' onClick={handleReset}>Reset</button>
            <div>Result = {result} </div>
        </div>
    )
}

export default Calculator;