// arguments & parameters
const speak = function (name, time) {
    console.log(`good ${time}, ${name}!`);
};
speak("mario", "morning"); // good morning, mario!
let Name = "valid",
    Time = "afternoon";
speak(Name, Time); // فرستادن متغیر ها به عنوان پارامتر به تابع
// good afternoon, valid!

// به آرگومان های این تابع مقادیر پیش فرض دادیم تا اگه هیچ پارامتری به تابع ارسال نشد از مقادیر پیش فرض استفاده شود
const hello = function (name = "luigi", time = "night") {
    console.log(`good ${time}, ${name}!`);
};
hello(); // good night, luigi!
hello(Name); // این متغیر به عنوان پارامتر اول به تابع فرستاده میشود و برای پارامتر دوم از مقدار پیش فرض استفاده میشود
// good night, valid!
hello(undefined,Time); // مقدار پیش فرض برای پارامتر اول و متغیر ما برای پارامتر دوم پاس داده میشود
// good afternoon, luigi!
