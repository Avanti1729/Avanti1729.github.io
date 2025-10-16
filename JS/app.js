console.log("Hi I am Avantika");
console.table({ name: "Avantika", age: 20 });
let whatDoYouWannaBecomeInYourLife = "programmer";
let gender = "Female";
let twitterHandle = "@Avanti1729";
console.log(whatDoYouWannaBecomeInYourLife, gender, twitterHandle);

let firstFavNum = 12;
let secondFavNum = 1729;
console.log(firstFavNum + secondFavNum);
console.log(secondFavNum - firstFavNum);
console.log(firstFavNum * secondFavNum);
console.log(secondFavNum / firstFavNum);
console.log(secondFavNum % firstFavNum);
console.log(firstFavNum ** 3);

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 12;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined);

console.log(10 == 10);
console.log(10 !== "10");
console.log("meow");
console.log(firstFavNum > secondFavNum);
console.log(firstFavNum < secondFavNum);
console.log(firstFavNum >= secondFavNum);
console.log(firstFavNum <= secondFavNum);
console.log(firstFavNum === secondFavNum);
console.log(firstFavNum == secondFavNum);
console.log(firstFavNum !== secondFavNum);
console.log(firstFavNum != secondFavNum);

console.log("nya");

let favActorLastName = "a";
let favActorFirstName = "f";
let fullName = favActorFirstName + favActorLastName;
let uc = fullName.toUpperCase();
let message = `My favorite actor name is ${uc} and blah blah`;
message += ` his best show is the Silicon Valley`;
console.log(message);

let password;
if (password == 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else {
  console.log("Please provide a password");
}

let fruit = "meow";
switch (fruit) {
  case "Banana":
    console.log("Banana is good!");
    break;
  case "Apple":
    console.log("How you like them apples?");
    break;
  case "Orange":
    console.log("I am not a fan of orange");
    break;
  default:
    console.log("I have never heard of that fruit");
}

name = "Avantika";
for (let i = 0; i <= 100; i++) {
  console.log(`${name},${i}`);
}

let favSingers = ["Blackbear", "Addison Rae", "Shy Smith"];
console.log(favSingers[0]);
let favNumbers = [1, 2, 3, 4];
let mixedArr = ["A", [1, 3, 5, 7], 123, true];
console.log(mixedArr);
for (let i = 0; i < mixedArr.length; i++) {
  console.log(mixedArr[i]);
}

car = {
  type: "Maruti Suzuki",
  model: "idk",
  color: "pink",
};
console.log(typeof car);
console.log(car);
car.type = "Toyota";
console.log(car);
car.wheels = "Black and White";
console.log(car);

function myFunction(x, y) {
  return x * y;
}
console.log(myFunction(10, 20));

const greetings = function myFunction(user) {
  console.log(`Hello ${user}`);
};
greetings("John");

function greet(user, cb) {
  console.log(`Hello ${user}`);
  cb();
}
function cb() {
  console.log(`I am a callback function`);
}
greet("John", cb);

function showCallFunc(fn) {
  const val = 10;
  fn(val);
}
showCallFunc(function (val) {
  console.log(val);
});

const person = {
  name: "Avantika",
  age: 20,
  email: "avgu22ainds@cmrit.ac.in",
  marks: 99,
  hobbies: ["Reading", "Singing"],
};
console.log(person);
const jsonString = JSON.stringify(person);
console.log(jsonString);

const currentDate = new Date();
console.log(currentDate);
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleDateString());

const intervalId = setInterval(
  () => console.log("This will be executed every 2 seconds"),
  2000
);
setTimeout(() => clearInterval(intervalId), 10000);
greet = (username) => `Hello ${username}`;
console.log(greet("Avantika"));

const square = (n) => n * n;
console.log(square(10));

setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("Namaste");
      setTimeout(() => {
        console.log("Hi");
        setTimeout(() => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
});

const lib = {
  sum: (a, b) => a + b,
  mul: (a, b) => a * b,
};
console.log(lib.sum(10, 20));
console.log(lib.mul(10, 20));

const multiply = (a, b = 1) => a * b;
console.log(multiply(190346));

const strNums = ["one", "two", "three"];
const moreNums = ["four", "five"];
const strNumNums = [...strNums, ...moreNums];
console.log(strNumNums);

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];
console.log(arr3);

const user = {
  name: "Jen",
  age: 22,
};
const userclone = { ...user };
console.log(userclone);

const colors = ["red", "blue", "yellow", "green", "orange"];
const [color1, color2, color3] = colors;

let num = [1, 2, 3, 4, 5];
let double = num.map((num) => num * 2);
console.log(double);

let numNums = [1, 2, 3, 4, 5, 6];
let times10 = numNums.map((n) => n * 10);
console.log(times10);

const ages = [12, 34, 45, 27, 13, 2, 4, 6, 8, 13, 53];
const agesAboveEighteen = ages.filter((age) => age > 18);
console.log(agesAboveEighteen);

const fruits = ["orange", "banana", "apple", "banana", "apple"];
const wordFreq = fruits.reduce((frequencyMap, fruit) => {
  frequencyMap[fruit] = (frequencyMap[fruit] || 0) + 1;
  return frequencyMap;
}, {});

console.log(wordFreq);

const func = (arr, prod = 1) => {
  for (let i of arr) {
    prod *= i;
  }
  return prod;
};
const numbers = [2, 3, 4, 5];
const numnum = func(numbers, 1);
console.log(numnum);

let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.size);
console.log(map);
