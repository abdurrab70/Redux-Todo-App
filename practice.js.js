// const arr = [];

// const arr_copy = [...arr];

// arr_copy.push(1);
// arr_copy.push(2,3);
// arr_copy.push(4);

// console.log(arr);
// console.log(arr_copy);

//* Curring Function  or fuction curring

// function add (a,b,c){
//     return a + b+ c;
// }
// console.log(add(4,5,2))

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(add(4)(5)(2))

// Curring Arrow Function
// const add = (a) => (b) => (c) => {
//     return a + b+ c;
// }
// console.log(add(4)(5)(2))
//or single call return anonymous function
// console.log(add(4))

//real project example

const calculateTotal = (discountRate) => (taxRate) => (price) => {
  const afterDiscount = price - price * discountRate;
  return afterDiscount + afterDiscount * taxRate;
};

const calculateTotalWithBaseDiscountAndTax = calculateTotal(0.2)(0.05);

console.log(calculateTotalWithBaseDiscountAndTax(100));
console.log(calculateTotalWithBaseDiscountAndTax(362).toFixed(2));
console.log(calculateTotal(0.2)(0.05)(100))
console.log(calculateTotal(0.5)(0.02)(100))


// console.log(calculateTotal(0.2)(0.05)(300))
// console.log(calculateTotal(0.2)(0.05)(1100))