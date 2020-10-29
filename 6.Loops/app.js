/*1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while. */

let str = "i am in the easycode";
let upperStr = "";
for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === " ") {
    upperStr += str[i].toUpperCase();
  } else {
    upperStr += str[i];
  }
}

console.log(upperStr);

/*2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).*/

let str2 = "tseb eht ma i";
let backwardsStr = "";
for (let i = str2.length - 1; i > -1; i--) {
  backwardsStr += str2[i];
}

console.log(backwardsStr);

/*3. Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for. */

const num = 10;
let numFactorial = 1;
for (let i = num; i >= 1; i--) {
  numFactorial *= i;  
}

console.log(`Factorial of number ${num} is ${numFactorial}`);

/*4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for. */

const str3 = 'JavaScript is a pretty good language';
let resultStr = '';
for (let i = 0; i < str3.length; i++){
  if (str3[i] === 0 || str3[i - 1] === ' '){    
    resultStr += str3[i].toUpperCase();
  } else if (str3[i] === ' '){
    resultStr += '';
  } else {
    resultStr += str3[i];
  }
}

console.log(resultStr);


/*5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of. */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of arr){
  if (value%2 === 0){console.log(value);
  }  
}

/*6. Дан объект:
let list = {
name: ‘denis’,
work: ‘easycode’,
age: 29
}

Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in. */

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (let key in list){
  if (typeof list[key] === 'string'){
    list[key] = list[key].toUpperCase();
  }  
}

console.log(list);