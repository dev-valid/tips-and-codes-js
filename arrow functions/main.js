// arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function تبدیل تابع معمولی بالا به
const calcArea = (radius) => 3.14 * radius ** 2;
// اگر مانند بالا پارامتر ما فقط یکی بود میتوانیم پرانتز را برداریم arrow functions در
// اگر پارامتر های ما دو تا یا بیشتر باشند یا اگر پارامتر نداشته باشیم باید پرانتز ها را بگذاریم
// را برداریم return اگر مانند مثال بالا کد تابع فقط یک خط باشد میتوانیم بلوک های باز و بسته و
// را بگذاریم return اگر کد های ما بیشتر از یک خط بودند بهتر است بلوک های باز و بسته و
const area = calcArea(5);
console.log("area is:", area);

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }
// arrow functions تبدیل تابع بالا به
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10,15,30], 0.2));
