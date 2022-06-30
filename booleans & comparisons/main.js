// booleans & comparisons

let email = "validrabieejs@gmail.com";
let users = ["milad", "rahman", "sadegh"];
let result1 = email.includes("js"); 
let result2 = users.includes("valid"); 
// این متد متن را در رشته یا آرایه مورد نظر سرچ میکند و یک نتیجه بولین برمیگرداند

console.log(result1); // true
console.log(result2); // false

// comparison operators
let age = 25;

console.log(age == 25); // true
console.log(age == 30); // false
console.log(age != 30); // true
console.log(age > 20); // true
console.log(age < 20); // false
console.log(age <= 25); // true
console.log(age >= 25); // true

let name = "shaun";

console.log(name == "shaun"); // true
console.log(name == "Shaun"); // false
console.log(name > "crystal"); // true
// در این مثال حرف اول دو کلمه مقایسه می شود (ترتیب حروف الفبا از کوچک به بزرگ است)
console.log(name > "Shaun"); // true
// حروف کوچک بزرگتر از حروف بزرگ هستند
console.log(name > "Crystal"); // true
