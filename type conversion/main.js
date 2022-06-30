// type conversion

let score = "100";
console.log(score + 1); // 1001
console.log(typeof score); // string
score = Number(score); // تبدیل رشته به عدد
console.log(typeof score); // number
console.log(score + 1); // 101

let result1 = String(50); // تبدیل عدد به رشته
console.log(result1 + 1, typeof result1); // 501 , string

// let result = Boolean(100); true
// let result = Boolean(0);   false
// let result = Boolean('0');  true
// let result = Boolean('hello');  true
// let result = Boolean('');   false
console.log(Boolean(undefined)); // false
