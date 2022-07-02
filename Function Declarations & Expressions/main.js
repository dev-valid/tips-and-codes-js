// روش های تعریف توابع
greet();
// function declaration
function greet() {
    console.log("hello there");
}
greet();
greet();

// function expression
const speak = function () {
    console.log("good day!");
}; // به دلیل اینکه این یک عبارت است آخر آن ; میگذاریم
// arrow function  تابع بالا به صورت
// const speak = () => {
//     console.log("good day!");
// };
speak();


// است Hoisting تفاوت دو روش بالا در (بالا بردن)
// یعنی تابع را میتوانیم هر جا که بخواهیم تعریف کنیم و میتوانیم بالاتر از جایی که تابع را تعریف کردیم آن را فراخانی کنیم Hoisting
// اینگونه نیست (function expression) برقرار است ولی در روش دوم Hoisting (function declaration) در روش اول
// استفاده شود تا جریان منطقی کد حفط شود (function expression) پیشنهاد میشود در بیشتر اوقات از روش دوم
