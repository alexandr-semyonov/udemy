/*1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while. */

let str = 'i am in the easycode';
let upperStr = '';
for (let i = 0; i < str.length; i++){
  if ( i === 0 || str[i - 1] === ' '){    
    upperStr += str[i].toUpperCase();
  } else {
    upperStr += str[i];
  }
}

console.log(upperStr);

/*2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).*/

let str2 = 'tseb eht ma i';
let backwardsStr = '';
for (let i = str2.length - 1; i > -1; i--){
  backwardsStr += str2[i];
}

console.log(backwardsStr);

/*3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for. */

const num = 10;
let numFactorial = 1;
for (let i = num; i >= 1; --i){
  numFactorial *=  i;
}
console.log(`Factorial of number ${num} is ${numFactorial}`);

