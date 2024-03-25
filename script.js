//Declaring Functions

function sayHello() {
  console.log("Hello!");
}

sayHello(); //Output: console logs "Hello!"
sayHello(); //You can run it as many times as you want
sayHello();

//Arguments

//function argumentFunction(argument1, argument2) {
// console.log(argument1, argument2);
//}

function sayHelloTo(name) {
  console.log("Hello " + name + "!");
}

sayHelloTo("Lucy"); //Output: console logs "Hello Lucy!"
sayHelloTo("Liam");
sayHelloTo("Misty");

function greet(greeting, name) {
  console.log(greeting + " " + name + "!");
}

greet("Good morning", "Lucy"); //Output: console logs "Good morning Lucy!"
greet("Buenos dias", "Liam");
greet("Bonjour", "Misty");

//Returning Values

function add(a, b) {
  return a + b;
}

const result = add(1, 5);
console.log("The result is", result); // Output: "The result is 6"

const anotherResult = add(2, 10);
console.log("Another result is", anotherResult); // Output: "Another result is 12"

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

//calculator

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

//switch statement

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

const answerOne = calculate(1, 5, "+");
console.log("The result is", answerOne); // Output: "The result is 6"

const answerTwo = calculate(100, 20, "-");
console.log("The result is", answerTwo);

const answerThree = calculate(20, 4, "/");
console.log("The result is", answerThree);

const answerFour = calculate(6, 3, "*");
console.log("The result is", answerFour);

//Run it with node calculator.js
