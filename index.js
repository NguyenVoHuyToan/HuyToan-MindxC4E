//bai 2a
let firstName = "ho"
let lastName =  "Ten"
var userName =  "ten dang nhap"
var passWord = "mat khau"
const phoneNumber = "so dien thoai"

//bai 3
let age = 18
console.log(age)
age = "MindX Dream"
console.log(age)

//bai 4
let firstLine = "Điểm 10"
let secondLine = "là"
let finalLine = "điểm tuyệt đối"
console.log("Điểm 10" + " là" + " điểm tuyệt đối")

//bai5
let numberRadius = 5
const pi = 3.1416
console.log(Math.pow(numberRadius,2) * pi)

//bai6a,b
let oldFriend = {
    name: "Nguyen Van A",
    age: 20
}
let newFriend ={
    name: "Nguyễn Thị B",
    age: 20
}
let bestFriend = {
    name: "Nguyễn Văn C",
    age: 25
}
let myFriend = {
    name: "Trương Thảo Phương",
    age: 30
}
let hisFriend ={
    name: "Nguyễn Văn D",
    age: 25
}
//6c
console.log(oldFriend.name + " " + oldFriend.age)
console.log(newFriend.name + " " + newFriend.age)
console.log(bestFriend.name + " " + bestFriend.age)
console.log(myFriend.name + " " + myFriend.age)
console.log(hisFriend.name + " " + hisFriend.age)
//6d
console.log(oldFriend.name.length)
console.log(newFriend.name.length)
console.log(bestFriend.name.length)
console.log(myFriend.name.length)
console.log(hisFriend.name.length)

//6f
let allAge = [20, 20, 25, 30, 25];
let sum = 0;
for (let i = 0; i < allAge.length;i++){
    sum += allAge[i]
}
console.log(sum)


//6e
let totalAge = [20, 20, 25, 30, 25];
let subTotal = 0;
for (let a of totalAge) {
    subTotal += a;
}
let avg = subTotal / totalAge.length;
console.log(avg)







