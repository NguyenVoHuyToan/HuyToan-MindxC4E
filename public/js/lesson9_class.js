let listFlower = ["Apple", "Strawberry", "Banana"];
//a
listFlower.splice(2, 0, "Rose", "Tulip");
console.log(listFlower);
//b
let listVersion = ["Apple_Version1", "Strawberry_Version1", "Banana_Version1"];
let mixAll = listFlower.concat(listVersion);
console.log(mixAll);
//c
mixAll.splice(2, 1);
console.log(mixAll);

let listData = [
  {
    name: "Toan",
    age: 21,
  },
  {
    name: "Long",
    age: 22,
  },
  {
    name: "Thong",
    age: 23,
  },
  {
    name: "Hoang",
    age: 24,
  },
  {
    name: "Huy",
    age: 25,
  },
];

//cau d1
function findName(pram) {
  let friendName = [];
  pram.forEach((element) => {
    friendName.push(element.name);
  });
  return friendName;
}
const a = findName(listData);
console.log(a);

let sum = 0;
function findAge(mode) {
  mode.forEach((element) => {
    sum = sum + element.age;
  });
  return sum;
}

const result = findAge(listData);
console.log(sum / listData.length);

//cau d2
const isArray = [
  {
    name: "Toan",
    homework: [
      { drinkA: "Coca", drinkB: "Pepsi" },
      { drinkA: "Sting", drinkB: "Numberone" },
      { drinkA: "Mirinda", drinkB: "Aquafina" },
    ],
  },
];
function findMode(data) {
    let listText = [];
  data.forEach((element) => {
    element.homework.forEach((type) => {
        listText.push(type.drinkA)
        listText.push(type.drinkB)
    })
  });
    return listText
}
const getResult = findMode(isArray)
console.log(getResult)