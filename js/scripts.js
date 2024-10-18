

function hello(name){
    return 'Hola' + name;
  }
  
  const resultName = hello(' Xavier');
  console.log(resultName);
  
  //
  
  function squareArea(side){
    return (side * side);
  }
  
  
  const resultSquare = squareArea(5,5);
  console.log(resultSquare);
  
  //
  
  function triangleArea(base, height){
    return base * height / 2;
  }
  
  const resultTriangle = triangleArea(2,4);
  console.log(resultTriangle);
  
  //
  
  function circleArea (radius){
    const pi = 3.14;
    return pi * radius * radius;
  }
  
  const resultCircle = circleArea(14)
  console.log(resultCircle)
  
  //
  
  function calculateCelsius(celsius){
    return celsius * 1.8 + 32;
  }
  
  const resultCelsius = calculateCelsius(100);
  console.log(resultCelsius);
  
  //
  
  function calculateFahrenheit(fahrenheit){
    return (fahrenheit - 32) / 1.8;
  }
  
  const resultFahrenheit = calculateFahrenheit(212);
  console.log(resultFahrenheit);
  
  //
  
  
  function allPrice(price){
    const iva = 0.21;
    return price + price * iva;
  }
  
  const resultPrice = allPrice(100);
  console.log(resultPrice);
  
  
  //
  
  
  function message(name,material,size,note){
    return name + ' ha pedido una caja de ' + material + ', de tamaño ' + size + '. ' + note + ', es frágil';
  }
  
  const resultMessage = message('Xavier','metal','standard','Cuidado');
  console.log(resultMessage);
  
  


/* 
function hello(name, age) {
  if (age >= 18) {
    console.log('Hola ' + name + ', eres menor de edad');
  } else {
    console.log('Hola ' + name + ', eres mayor');
  }
}

hello('Xavier', 8);
hello('Jorge', 32);
 */

function hi(name,age) {
  
    if (age < 18){ 
      return 'Hola ' + name + ', eres menor de edad';
    }
    else {
      return 'Hola ' + name + ', eres mayor de edad';
    }
    
  
  }
  
  resultHi = hi('Xavier',19);
  console.log(resultHi);
  resultHi = hi('jorge',10);
  console.log(resultHi);
  
  
  //
  
  
  /* 
  function hightest(numberA, numberB) {
    if (numberA > numberB) {
      console.log(numberA);
    } else {
      console.log(numberB);
    }
  }
  
  hightest(40, 9);
  */
  
  
  function high(numberA,numberB){
    if (numberA>numberB){
      return numberA;
    }
    else {
      return numberB;
    }
  }
  
  const resultHigh = high(9,3);
  console.log(resultHigh);
  
  
  
  
  //
  
  
  /* 
  function numberConsole(a) {
    if (a > 0) {
      console.log(' Es un número positivo');
    } else if (a < 0) {
      console.log(' Es un número negativo');
    } else {
      console.log(' El valor es 0');
    }
  }
  
  numberConsole(3);
  numberConsole(-3);
  numberConsole(0); 
  */
  
  
  function numberClass(a){
    if(a < 0){
      return a + ' Es un número negativo';
    }
    else if(a > 0) {
      return a + ' Es un número positivo';
    } else{
      return 'Es 0';
    }
  }
  
  let resultClass = numberClass(-5);
  console.log(resultClass);
  resultClass = numberClass(5);
  console.log(resultClass);
  resultClass = numberClass(0);
  console.log(resultClass);
  
  /* 
  function calification(numberA, numberB, numberC) {
    const media = (numberA + numberB + numberC) / 3;
  
    if (media > 0 && media < 5) {
      console.log('suspenso');
    } else if (media >= 5 && media < 8) {
      console.log(' Aprobada');
    } else {
      console.log('Matricula de honor');
    }
  }
  
  calification(8, 8, 5);
  */
  
  function numberCalification(numberA,numberB,numberC){
    const average = (numberA + numberB + numberC) / 3;
    if(average > 0 && average < 5){
      return 'Suspenso';
    } else if (average >= 5 && average < 8){
      return 'Aprobado';
    }else{
      return 'Matricula de honor';
    }
  }
  
  const resultCalification = numberCalification(3,5,2);
  console.log(resultCalification);
  
  /* 
  function receive(numberA, numberB, numberC) {
    if (numberA > numberB && numberA > numberC) {
      console.log('A es mayor');
    } else if (numberB > numberC && numberB > numberA) {
      console.log('B es mayor');
    } else {
      console.log('C es mayor');
    }
  }
  
  receive(5, 3, 1);
  */
  
  function nameReceive(numberA,numberB,numberC){
    if(numberA > numberB && numberA > numberC){
      return 'A es mayor';
    }else if(numberB > numberC && numberB > numberA){
      return 'B es mayor';
    }else{
      return 'C es mayor';
    }
  }
  
  const resultReceive = nameReceive(9,9,5);
  console.log(resultReceive)
  
  /* 
  function number(a) {
    if (a % 5 === 0 && a % 3 === 0) {
      console.log('Es divisible por 3 y por 5');
    } else if (a % 5 === 0) {
      console.log('Es divisible por 5');
    } else if (a % 3 === 0) {
      console.log('Es divisible por 3');
    } else {
    }
  }
  
  number(30);
  number(25);
  number(9);
  */
  
  function number(a) {
    if ( a % 5 === 0 && a % 3 === 0){
      return 'Es divisible por 3 y por 5';
    }else if (a % 5 === 0){
      return 'Es divisible por 5';
    }else if (a % 3 === 0){
      return 'Es divisible por 3';
    }
  }
  
  let resultNumber = number(30);
  console.log(resultNumber);
  
  resultNumber = number(25);
  console.log(resultNumber);
  
  resultNumber = number(6);
  console.log(resultNumber);
  
  /* 
  function evenOdd(a) {
    if (a % 2 === 0) {
      console.log(' Es un número par');
    } else {
      console.log(' Es un número impar');
    }
  }
  
  evenOdd(12);
  evenOdd(9);
  
  
  */
  
  function nameEven(a){
    if (a % 2 === 0){
      return 'Es un número par';
    }else{
      return 'Es un número impar';
    }
  }
  
  resultEven = nameEven(10);
  console.log(resultEven)
  resultEven = nameEven(5);
  console.log(resultEven)
  
  /* 
  function year(a) {
    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
      console.log(' Es un año bisiesto.');
    } else {
      console.log(' No es un año bisiesto');
    }
  }
  
  year(1900);
  year(2224);
  */
  
  function nameYear(a){
    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0){
      return 'Es un año bisiesto';
    }else{
      return 'No es un año bisiesto'
    }
  }
  
  resultYear = nameYear(1900);
  console.log(resultYear);        //No es un año bisiesto
  resultYear = nameYear(2224);
  console.log(resultYear);        //Es un año bisiesto


//

/*  

function threeDigit(numberOne){
  if (numberOne >= 100 && numberOne <= 999 ){
    console.log('Tiene 3 digitos');
  }else{
    console.log('No tiene 3 digitos');
  }
}

threeDigit(200);

*/

function threeDigit(numberOne){
  if (numberOne >= 100 && numberOne <= 999){
    return 'Tiene 3 dígitos';
  }else{
    return 'No tiene 3 dígitos'
  }
}

resultThree = threeDigit(200);
console.log(resultThree);

//


/* 
function twoDigit(a,b){
  if (a % b === 0 ){
    console.log('El primero es multiplo del segundo')
  } else{
    console.log('No es multiplo del segundo')
  }
}

twoDigit(20,10)

 */

function twoDigit(a,b){
  if (a % b === 0) {
    return 'El primero es multiplo del segundo';
  } else{
    return 'No es multiplo del segundo';
  }
}

resultTwo = twoDigit(12,4);
console.log(resultTwo)