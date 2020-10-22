let a = 0 || "string";

let result = "string";
console.log(a == result);

a = 1 && "string";

result = "string";
console.log(a == result);

a = null || 25;

result = 25;
console.log(a == result);

a = null && 25;

result = null;
console.log(a == result);

a = null || 0 || 35;

result = 35;
console.log(a == result);

a = null && 0 && 35;

result = null;
console.log(a == result);

a = 12 + 14 + "12";

result = 2612;
console.log(a == result);

a = 3 + 2 - "1";

result = 4;
console.log(a == result);

a = "3" + 2 - 1;

result = 31;
console.log(a == result);

a = true + 2;

result = 3;
console.log(a == result);

a = +"10" + 1;

result = 11;
console.log(a == result);

a = undefined + 2;

result = NaN;
console.log(a);

a = null + 5;

result = 5;
console.log(a == result);

a = true + undefined;

result = NaN;
console.log(a);

console.log(NaN == NaN);

//3. Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let element = "hidden";
if (element == "hidden") {
  element = "visible";
} else {
  element = "hidden";
}

console.log(element);

/*4. Создать переменную и присвойте ей число.

Используя if, записать условие:

- если переменная равна нулю, присвоить ей 1;

- если меньше нуля - строку “less then zero”;

- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/

let num = 2;
if (num == 0) {
  num = 1;
} else if (num < 0) {
  num = "less then zero";
} else {
  num *= 10;
}

console.log(num);

/*5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.

Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.*/

let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
} else {
  car.needRepair = false;
}

console.log(car);

/*6. Дан объект let item = { name: 'Intel core i7', price: '100\$', discount: '15%' }.

Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.*/

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%",
};

if (
  item.hasOwnProperty("discount") &&
  !isNaN(parseInt(item.discount)) &&
  item.hasOwnProperty("price") &&
  !isNaN(parseInt(item.price))
) {
  item.priceWithDiscount =
    ((100 - parseInt(item.discount)) / 100) * parseInt(item.price);
  console.log(`Price with discount ${item.priceWithDiscount}`);
} else if (item.hasOwnProperty("price")) {
  console.log(item.price);
}

/*7. Дан следующий код:

let product = {

name: “Яблоко”,

price: “10\$”

};

let min = 10; // минимальная цена

let max = 20; // максимальная цена

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.*/

let product = {
  name: "Яблоко",
  price: "10$",
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log("Товаров не найдено");
}
