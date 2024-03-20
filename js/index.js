let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let operator = document.getElementById('operator')
let result = document.getElementById('result');

function operation(){
    let finalR

    switch (operator.value) {
        case '+':
             finalR = parseInt(num1.value) + parseInt(num2.value);
            break;
        case '-':
             finalR = parseInt(num1.value) - parseInt(num2.value);
            break;
        case '*':
             finalR = parseInt(num1.value) * parseInt(num2.value);
            break;
        case '/':
             finalR = parseInt(num1.value) / parseInt(num2.value);
            break;
        default:
            
            break;
    }
   
    result.innerHTML = finalR
}
