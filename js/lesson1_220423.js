// ========== ЗАДАЧА 1.1

// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const userName = "ГАЛИНА";
// const userAge = 35;
// const userLang = "JAVASCRIPT";
// console.log(
//   `ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ${userName}, МЕНІ ${userAge} РОКІВ, Я ВИВЧАЮ ${userLang}`
// );

// ========== ЗАДАЧА 2.1

// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const userName = prompt("Enter your name");
// const userEmail = prompt("Enter your email");
// const userPhone = prompt("Enter your phone");
// console.log(
//   `КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ ${userEmail} ПОЧТУ І ${userPhone} ТЕЛЕФОН`
// );

// ========== ЗАДАЧА 3.1
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const priceTv = Number(prompt('Enter Tv price'));
// const priceTab = Number(prompt ('Enter Tab price'));
// const pricePhone = Number(prompt('Enter Phone price'));
// const totalPrice = priceTv + priceTab + pricePhone;
// console.log(totalPrice);

// ========== ЗАДАЧА 4.1
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const enterMonth = Number(prompt("Enter month"));
// if (enterMonth ===12) {
//   console.log('Вірно');
// }else {
//   console.log('Не знаєте? 12');}
// const result = enterMonth === 12 ? "correct" :  'Не знаєте? 12';
// console.log(result);

// ========== ЗАДАЧА 5.1

// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО, ЧИ НЕ ПАРНЕ.

// const numberEnterUser = Number(prompt("Введіть число"));
// if (numberEnterUser % 2 === 0) {
//   console.log("Парне число");
// } else {
//   console.log("Не парне число");
// }
// const answer = numberEnterUser % 2 === 0 ? "Парне число" : "Не парне число";
// console.log(answer);

// ========== ЗАДАЧА 6.1
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

// ========== ЗАДАЧА 7.1
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// const userLogEnter = prompt("Введіть ваш логін");
// const userPassEnter = prompt("Введіть ваш пароль");
// const userLog = "123ttt";
// const userPass = "qwer";
// if (userLogEnter === userLog && userPassEnter === userPass) {
//   console.log("ВІТАЮ! Ви здійснили вхід.");
// } else if (userLogEnter !== userLog) {
//   console.log("ПОМИЛКА! Ви ввели не вірний логін.");
// } else {
//   console.log("ПОМИЛКА! Ви ввели не вірний пароль.");
// }
