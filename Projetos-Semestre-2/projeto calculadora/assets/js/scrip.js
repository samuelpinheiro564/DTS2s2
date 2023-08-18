class Calculator{
add(a, b){
    return a + b;
}
multiplication (a, b){
    return a * b;
}
sub (a, b){
    return a - b;
}
division (a, b){
    return a / b;
}
}
const calculator = new Calculator();
console.log(calculator.add(2,7))
console.log(calculator.multiplication(4,7))
console.log(calculator.sub(5,7))
console.log(calculator.division(8,9))
