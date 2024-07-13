import {useState} from 'react'
import Operation from './Operation';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="First Number" variant="outlined" onChange={(e) => setNum1(e.target.value)} />
            </Box>
                {/* <input type='text' id='num' value={num1} placeholder='First Number' onChange={(e) => setNum1(e.target.value)} /> */}
            </div>
            <div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>

                    <Select id='operation' value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <MenuItem value={'-'}>-</MenuItem>
                    <MenuItem value={'+'}>+</MenuItem>
                    <MenuItem value={'*'}>*</MenuItem>
                    <MenuItem value={'/'}>/</MenuItem>
                    </Select>
                </FormControl>
            </Box>
                {/* <select id='operation' value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select> */}
            </div>
            <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Second Number" variant="outlined" onChange={(e) => setNum2(e.target.value)} />
            </Box>
                {/* <input type='text' id='num' value={num2} placeholder='Second Number' onChange={(e) => setNum2(e.target.value)} /> */}
            </div>
            <div>
            <Stack style={{padding: 10}} spacing={2} direction="row">
                <Button id='equals' onClick={handleCalculation} variant="contained">=</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button id='reset' onClick={handleReset} variant="contained">Reset</Button>
            </Stack>

            {/* <button id='equals' onClick={handleCalculation}> = </button>
            <button id='reset' onClick={handleReset}>Reset</button> */}
            <div>Result = {result} </div>
            </div>
        </div>
    )
}

export default Calculator;