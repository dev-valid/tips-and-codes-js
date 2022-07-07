// object literal
let user = {
    name: "valid",
    age: 19,
    email: "validrabieejs@gmail.com",
    location: "iran",
    blogs: ["How to become a front end developer", "4 tips to become a better programmer"],
    // افزودن متد یا تابع به یک شئ
    // login: function () {
    //     console.log("user is logged in");
    // },
    // logBlogs: function() {
    //     console.log('this user has written these blogs :');
    //     // نشان دهنده شیئی است که اکنون داخل آن هستیم (در این مثال نشان دهنده شئ یوزر است) this کلمه کلیدی
    //     this.blogs.forEach(blog => console.log(blog));
    // },
    // کار نمیکند arrow function در داخل اشیاء در this کلمه کلیدی
    // توابع بالا را میتوانیم به شکل خلاصه شده زیر هم بنویسیم
    login(){
        console.log("user is logged in");
    },
    logBlogs(){
        console.log('this user has written these blogs :');
        // نشان دهنده شیئی است که اکنون داخل آن هستیم (در این مثال نشان دهنده شئ یوزر است) this کلمه کلیدی
        this.blogs.forEach(blog => console.log(blog));
    },
};

user.login(); // فراخانی تابع یا متد تعریف شده داخل یک شئ
user.logBlogs();