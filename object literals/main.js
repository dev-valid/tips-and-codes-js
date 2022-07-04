// object literals
// شئ یوزر
let user = {
    // ویژگی ها یا خصوصیات شئ یوزر
    name: "valid",
    age: 19,
    email: "validrabieejs@gmail.com",
    location: "iran",
    blogs: ["How to become a front end developer", "4 tips to become a better programmer"],
};

console.log(user);
console.log(typeof user);
console.log(user.name); // یک شئ Property دسترسی به
console.log(user['name']); // روش دوم
// کاربرد روش دوم بیشتر در مورد زیر است
const key = 'location';
console.log(user[key]);

user.age = 25; // یک شئ Property تغییر مقدار 
console.log(user.age);

user['email'] = 'carlosrabiee@gmail.com';
console.log(user['email']);

