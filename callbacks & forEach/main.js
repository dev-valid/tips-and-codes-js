// callbacks & forEach

// callbacks
// شیوه اجرای توابع به صورت عادی در جاوااسکریپت
// let age = 19;
// const Func1 = () => {
//     setTimeout(function () {
//         age += 4;
//         console.log(age);
//     }, 1000);
// };
// const func2 = () => {
//     console.log(age);
// };
// Func1();
// func2();

// Callback Function جلوگیری از اجرای غیر همزمان توابع با
// let age = 19;
// const Func1 = (func) => {
//     setTimeout(function () {
//         age += 4;
//         console.log(age);
//         func();
//     }, 1000);
// };
// const func2 = () => {
//     console.log(age);
// };
// Func1(func2);


// forEach
let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];
// بر روی تک تک عناصر آرایه میچرخد for مانند حلقه forEach متد
people.forEach(function () {
    // این تابع به ازای هر کدام از عناصر آرایه اجرا میشود
    console.log("hello"); // در اینجا عناصر آرایه 5 تا هستند پس کد روبرو 5 بار اجرا میشود
});
people.forEach((person, index) => {
    // در خط بالا پارامتر اول مقدار هر آیتم آرایه و پارامتر دوم شماره ایندکس آن آیتم است
    console.log(index, person);
});

// استفاده کردیم (یک تابع را به عنوان پارامتر به متد فور ایچ ارسال کردیم) CallBack Functions در مثال زیر از
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);

// مثال واقعی
const ul = document.querySelector(".people"); // (ul تگ) people انتخاب عنصر دارای کلاس
let html = ``;
people.forEach((person) => {
    // create html template for each person
    html += `<li style="color: aqua">${person}</li>`; // html تزریق داده ها داخل الگوی
});
ul.innerHTML = html; // که در ابتدا انتخاب کرده بودیم ul داخل تگ html قرار دادن الگوی
