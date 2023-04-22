// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "ГАЛИНА";
// const age = 35;
// const lang = "JAVASCRIPT";

// console.log(
//   `ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${lang}`
// );

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt("Enter your name");
// const email = prompt("Enter your email");
// const phone = prompt("Enter your phone");

// console.log(
//   `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ${email} ПОЧТУ І ${phone} ТЕЛЕФОН`
// );

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ
// const tvSet = Number(prompt('enter tvSet price'));
// const tab = Number(prompt ('enter tab price'));
// const phone = Number(prompt('enter phone price'));
// const totalPrice = tvSet + tab + phone;
// console.log(totalPrice);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const month = Number(prompt("Enter month"));
// if (month ===12) {
//   console.log(`Вірно`);
// }else {
//   console.log(`Не знаєте? 12`);}
// const result = month === 12 ? "correct" :  'Не знаєте? 12';
// console.log(result);

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО, ЧИ НЕ ПАРНЕ.

// const numberEnterUser = Number(prompt("Введіть число"));
// if (numberEnterUser % 2 === 0) {
//   console.log("Парне число");
// } else {
//   console.log("Не парне число");
// }
// const answer = numberEnterUser % 2 === 0 ? "Парне число" : "Не парне число";
// console.log(answer);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ, ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const monthBirthUser = Number(prompt("Введіть ваш місяць народження"));
// if (monthBirthUser === 12 || monthBirthUser === 1 || monthBirthUser === 2) {
//   console.log("Зима");
// } else if (monthBirthUser >= 3 && monthBirthUser <= 5) {
//   console.log("Весняна");
// } else if (monthBirthUser >= 6 && monthBirthUser <= 8) {
//   console.log("Літо");
// } else if (monthBirthUser >= 9 && monthBirthUser <= 11) {
//   console.log("Осінь");
// } else {
//   console.log("Такого місяця не існує");
// }

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН
const userLogEnter = prompt("Введіть ваш логін");
const userPassEnter = prompt("Введіть ваш пароль");
const userLog = "123ttt";
const userPass = "qwer";
if (userLogEnter === userLog && userPassEnter === userPass) {
  console.log("ВІТАЮ! Ви здійснили вхід.");
} else if (userLogEnter !== userLog) {
  console.log("ПОМИЛКА! Ви ввели не вірний логін.");
} else {
  console.log("ПОМИЛКА! Ви ввели не вірний пароль.");
}
