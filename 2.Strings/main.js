let string = "some test string";

//1. Получить первую и последнюю буквы строки

let result;

let firstStr = string.slice(0, 1);
let lastStr = string[string.length - 1];

result = `First letter is ${firstStr} and last letter is ${lastStr}`;

//2. Сделать первую и последнюю буквы в верхнем регистре

let middleOfString = string.slice(1, string.length - 1);
result = firstStr.toUpperCase().concat(middleOfString, lastStr.toUpperCase());

//3. Найти положение слова ‘string’ в строке

result = string.indexOf("string");

//4. Найти положение второго пробела (“вручную” ничего не считать)

result = string.lastIndexOf(" ");

//5. Получить строку с 5-го символа длиной 4 буквы

result = string.substr(5, 4);

//6. Получить строку с 5-го по 9-й символы

result = string.substring(5, 9);

//7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

result = string.slice(0, -6);

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

const a = 20;
const b = 16;

result = (a + "").concat(b);

console.log(result);
