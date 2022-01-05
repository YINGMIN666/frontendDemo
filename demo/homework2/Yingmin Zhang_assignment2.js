// first question
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//Given the array, implement a function for generating a new array which doubles the quantity and price in each object
console.log(
  itemsObject.map((ele) => ({
    quantity: ele.quantity * 2,
    price: ele.price * 2,
  }))
);

//Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only
itemsObject.shift("quantity: 1, price: 200");
console.log(itemsObject);

//Given the array, implement a function to calculate the total value of the items
var calculate = itemsObject.map((ele) => ele.quantity * ele.price);
var res = calculate.reduce((a, b) => a + b);

console.log(itemsObject);
console.log(res);

// second question
const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

const regex = /[^A-Za-z0-9]/g;
const newStr = string.replace(regex, "");
const newString = newStr.toLowerCase();
console.log(newString);
