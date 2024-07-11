

function Operation(num1, num2, operation) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
        default:
            result = 'Invalid Operation';
    }   
    return result;
}

export default Operation;