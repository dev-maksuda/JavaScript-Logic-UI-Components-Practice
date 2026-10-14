// 1. Change Text: Directly mutates the inner text property of a DOM node element
function changeText() {
    document.getElementById('text-to-change').innerText = "Text updated successfully!";
}

// 2. Show / Hide Password: Evaluates input status and toggles the field type attribute
function togglePassword() {
    const passField = document.getElementById('password-field');
    if (passField.type === 'password') {
        passField.type = 'text'; // Render field contents as plain text strings
    } else {
        passField.type = 'password'; // Revert back to protected password tokens
    }
}

// 3. Get Input Value: Fetches active state variables from form inputs and presents it
function getValue() {
    const inputVal = document.getElementById('user-input').value;
    document.getElementById('display-value').innerText = "You typed: " + inputVal;
}

// 4. Change Color: Standard direct injection of inline CSS color variables
function changeColor(colorName) {
    document.getElementById('color-text').style.color = colorName;
}

// 5. Find Largest Number: Employs built-in Math evaluation tools across datasets
function findLargest() {
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    const n3 = Number(document.getElementById('num3').value);
    
    // Utilize native maximum value pinpointing functions
    const maxNum = Math.max(n1, n2, n3); 
    document.getElementById('largest-result').innerText = "The largest number is: " + maxNum;
}

// 6. Math Calculator: Direct arithmetic validation routing based on argument token
function calculate(operator) {
    const val1 = Number(document.getElementById('calc-n1').value);
    const val2 = Number(document.getElementById('calc-n2').value);
    let result = 0;

    // Direct loop evaluation conditional parameters
    if (operator === '+') result = val1 + val2;
    else if (operator === '-') result = val1 - val2;
    else if (operator === '*') result = val1 * val2;
    else if (operator === '/') {
        // Enforce safety boundary checks to block standard zero divisions
        result = (val2 !== 0) ? (val1 / val2) : "Cannot divide by zero";
    }

    document.getElementById('calc-result').innerText = result;
}
