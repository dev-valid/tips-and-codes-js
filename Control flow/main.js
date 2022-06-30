// Control flow

// for loops
// html چاپ عناصر آرایه در یک الگوی
const users = ["valid_rb", "amir.sg", "mina_2.gh", "king.ali"];
let html_ul = `<ul>\n`;
for (let i = 0; i < users.length; i++) {
    html_ul += `<li>${users[i]}</li>\n`;
}
html_ul += `</ul>`;
console.log(html_ul); 
// <ul>
//   <li>valid_rb</li>
//   <li>amir.sg</li>
//   <li>mina_2.gh</li>
//   <li>king.ali</li>
// </ul>


// while چاپ عناصر آرایه با حلقه
let j = 0;
while (j < users.length) {
    console.log(j, users[j]);
    j++;
}
// 0 'valid_rb'
// 1 'amir.sg'
// 2 'mina_2.gh'
// 3 'king.ali'


// do while loops
let t = 5;
// دستورات حلقه یک بار قبل از چک کردن شرط اجرا میشوند
do {
    console.log("val of i is: ", t);
    t++;
} while (t < 5);
// val of i is:  5


// else if statements
const password = "p@ss12";
if (password.length >= 12 && password.includes("@")) {
    console.log("that password is mighty strong");
} else if (password.length >= 8 || (password.includes("@") && password.length > 5)) {
    console.log("that password is strong enough");
} else {
    console.log("that password is not strong enough");
}
//that password is strong enough


// Logical NOT
const user = false;
if (!user) {
    console.log("you must be logged in to continue");
}
//you must be logged in to continue


// علامت ! ارزش عبارت منطقی را برعکس میکند
console.log(!true); // false
console.log(!false); // true


// break & continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue; // اگر شرط برقرار بود کد های زیر اجرا نمیشوند
    }
    console.log("your score:", scores[i]);
    if (scores[i] === 100) {
        console.log("congrats, you got the top score!");
        break; // اگر شرط برقرار بود حلقه شکسته میشود
    }
}



// switch statements
const grade = "D";
// در این ساختار مقایسه متغیر ها به صورت مقایسه دقیق (===)(باید نوع و مقدار متغیر برابر باشند) است
switch (grade) {
    case "A":
        console.log("you got an A!");
        break;
    case "B":
        console.log("you got a B!");
        break;
    case "C":
        console.log("you got a C!");
        break;
    case "D":
        console.log("you got a D!");
        break;
    case "E":
        console.log("you got an E!");
        break;
    default:
        console.log("not a valid grade");
}
// you got a D!
