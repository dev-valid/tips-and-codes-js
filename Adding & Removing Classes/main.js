// Udemy-Modern JavaScript / 6 / 8

// Adding & Removing Classes

const h3 = document.querySelector("h3");
console.log(h3.classList); // html مشاهده لیست کلاس های عنصر

h3.classList.add("error"); // اضافه کردن کلاس به لیست کلاس ها
console.log(h3.classList);

h3.classList.remove("error");
console.log(h3.classList); // حذف کلاس از لیست کلاس ها

// success هستند کلاس success صفحه چرخ میزند ، به تگ هایی که شامل کلمه  p برنامه زیر در همه تگ های
// میدهد error هستند کلاس error و به تگ هایی که شامل کلمه
const paras = document.querySelectorAll("p");
paras.forEach((para) => {
    if (para.textContent.includes("success")) {
        para.classList.add("success");
    } else if (para.textContent.includes("error")) {
        para.classList.add("error");
    }
});

// (درسته این روش هم جواب میده ولی روش بالا بهتر و ساده تر و سرراست تر است) indexOf برنامه بالا با متد
// paras.forEach((para) => {
//     if (para.textContent.indexOf("success") >= 0) {
//         para.classList.add("success");
//     } else if (para.textContent.indexOf("error") >= 0) {
//         para.classList.add("error");
//     }
// });

// textContent و innerText تفاوت
const pre1 = document.querySelector(".pre1");
const pre2 = document.querySelector(".pre2");
console.log(pre1.innerText);
console.log(pre2.innerText); // قسمت پنهان شده متن را نشان نمیدهد

console.log(pre1.textContent);
console.log(pre2.textContent); // قسمت پنهان شده متن را نشان میدهد

// (جاوااسکریپت DOM در classList بقیه توضیحات در سایت فری لرن , مطلب (آموزش ویژگی
