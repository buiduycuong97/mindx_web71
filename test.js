require("dotenv").config();

var grades = [
  { name: "John", grade: 8, gender: "M" },
  { name: "Sarah", grade: 12, gender: "F" },
  { name: "Bob", grade: 16, gender: "M" },
  { name: "Johnny", grade: 2, gender: "M" },
  { name: "Ethan", grade: 4, gender: "M" },
  { name: "Paula", grade: 18, gender: "F" },
  { name: "Donald", grade: 5, gender: "M" },
  { name: "Jennifer", grade: 13, gender: "F" },
  { name: "Courtney", grade: 15, gender: "F" },
  { name: "Jane", grade: 9, gender: "F" },
];

const isMale = (obj) => obj.gender === "M";
const isFemale = (obj) => obj.gender === "F";
const getMale = (arr) => arr.filter(isMale);
const getFemale = (arr) => arr.filter(isFemale);

//1 Tìm thứ hạng trung bình của cả lớp
const avgAll = (array) =>
  array.reduce((total, currValue) => total + currValue.grade, 0) / array.length;

//2 Tìm thứ hạng trung bình của nam trong lớp
const getAvgMale = (arr) =>
  getMale(arr).reduce((total, currValue) => total + currValue.grade, 0) /
  arr.length;

//3 Tìm thứ hạng trung bình của Nữ trong lớp
const getAvgFemale = (arr) =>
  getFemale(arr).reduce((total, currValue) => total + currValue.grade, 0) /
  arr.length;

//4 Tìm thứ hạng cao nhất của Nam trong lớp
const getTop1Male = (arr) =>
  Math.max(...getMale(arr).map((value) => value.grade));

//5 Tìm thứ hạng cao nhất của Nữ trong lớp
const getTop1Female = (arr) =>
  Math.max(...getFemale(arr).map((value) => value.grade));

//6 Tìm thứ hạng thấp nhất của Nam trong lớp
const getBot1Male = (arr) =>
  Math.min(...getMale(arr).map((value) => value.grade));

//7 Tìm thứ hạng thấp nhất của Nữ trong lớp
const getBot1Female = (arr) =>
  Math.min(...getFemale(arr).map((value) => value.grade));

//8 Tìm thứ hạng cao nhất của cả lớp
const getTop1 = (arr) => Math.max(...arr.map((value) => value.grade));

//9 Tìm thứ hạng thấp nhất của cả lớp
const getBot1 = (arr) => Math.min(...arr.map((value) => value.grade));

//map method
Array.prototype.map2 = function (callback) {
  let newArr = [];
  for (let i in this) {
    let result = callback(this[i], i);
    newArr.push(result);
  }
  return newArr;
};

//filter method
Array.prototype.filter2 = function (callback) {
  let newArr = [];
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      let result = callback(this[i], i);
      if (result) newArr.push(this[i]);
    }
    return newArr;
  }
};
grades.filter((val) => val.age > 5);

//foreach method
Array.prototype.forEach2 = function (callback) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      let result = callback(this[i], i);
      if (result) newArr.push(this[i]);
    }
  }
};

//return the number of JavaScript developers coming from Europe.
var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];
function countDevelopers(list) {
  // your awesome code here :)
  const isDevFromEuro = (obj) => obj.continent == "Europe";
  const isJsDev = (obj) => obj.language == "JavaScript";
  isJsDevFromEu = (obj) =>
    obj.continent == "Europe" && obj.language == "JavaScript";
  return list.filter(isJsDevFromEu).length;
}

//"the-stealth-warrior" gets converted to "theStealthWarrior"
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    console.log(match);
    return match.charAt(1).toUpperCase();
  });
}

//
input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"];
function openOrSenior(member) {
  data.map(member[0] >= 55 && member[1] > 7 ? "Senior" : "Open");
}

//highAndLow("1 2 3 4 5"); // return "5 1"
function highAndLow(numbers) {
  // ...
  const arrOfNum = numbers.split(" ").map(Number);
  return `${Math.max(...arrOfNum)} ${Math.min(...arrOfNum)}`;
}

// tổng các bội số chia hết cho 3 hoặc 5
function solution(number) {
  let total = 0;
  for (let i = 0; i < number; i++) {
    if (i > 0 && i % 3 == 0) {
      total += i;
    } else if (i > 0 && i % 5 == 0) {
      total += i;
    } else {
      continue;
    }
    console.log(i);
  }
  return total;
}

// cắt chuỗi
//'abc' =>  ['ab', 'c_']
//'abcdef' => ['ab', 'cd', 'ef']
function solution(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.length == 0) {
      arr.push(str[i]);
    } else if (arr[arr.length - 1].length == 1) {
      let newStr = arr[arr.length - 1] + str[i];
      arr.splice(arr.length - 1, 1, newStr);
    } else {
      arr.push(str[i]);
    }
  }
  for (let i of arr) {
    if (i.length < 2) {
      let newStr = i + "_";
      arr.splice(arr.length - 1, 1, newStr);
    }
  }
  return arr;
}
