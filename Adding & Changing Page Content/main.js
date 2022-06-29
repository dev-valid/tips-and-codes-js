// Udemy-Modern JavaScript / 6 / 5

// Adding & Changing Page Content

const para1 = document.querySelector("p");
console.log(para1.innerText); // دریافت متن داخل تگ
// متد نیست بلکه یک پراپرتی (ویژگی) است innerText

para1.innerText = "hello valid!"; // تغییر متن داخل تگ
para1.innerText += " be strong"; // اضافه کردن به متن داخل داخل تگ

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
    console.log(para.innerText);
    para.innerText += " new text!"; // p اضافه کردن متن به همه تگ های
});

const content = document.querySelector(".content");
console.log(content.innerHTML); // داخل یک تگ html دریافت عنصر
content.innerHTML = "<h2>this is new h2</h2>"; // داخل یک تگ html تغییر عنصر
content.innerHTML += "<h3>this is new h3</h3>"; // داخل یک تگ html اضافه کردن یک عنصر جدید به عناصر

// (ul و نمایش آن داخل تگ html تزریق عناصر آرایه داخل الگوی) مثال
const users = ["valid_rb", "rahil.sh", "im.ahmad", "lili"];
const show_users = document.querySelector(".show-users");
users.forEach((user) => {
    show_users.innerHTML += `<li>${user}</li>`;
});
