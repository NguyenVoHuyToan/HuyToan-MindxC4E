//bt1. Kiểm tra tuổi
var firstText = 20;
if(firstText >= 18){
    console.log("bạn đủ tuổi lái xe")
}else{
    console.log("bạn không đủ tuổi lái xe")
}

//bt2. kiểm tra số dương, âm, hay bằng 0
var firstNumber = 1;
if(firstNumber > 0){
    console.log("là số dương")
}else if(firstNumber < 0){
    console.log("là số âm")
}else{
    console.log("bằng 0")
}

//bt3. Kiểm tra số chia hết cho 3 và 5
var secondNumber = prompt("Nhập số chia hết chi 3 và 5")
secondNumber = parseInt(secondNumber);
if(secondNumber % 3 == 0 && secondNumber % 5 ==0){
    console.log(secondNumber + "chia hết cho 3 và 5")
}else if(secondNumber % 3 ==0){
    console.log(secondNumber + "chia hết cho 3")
}else if(secondNumber % 5 ==0){
    console.log(secondNumber + "chia hết cho 5")
}else {
    console.log(secondNumber + "không chia hết cho 3 và 5")
}

//bt4. kiểm tra ngày trong tuần
var dateTime = 0;
switch (dateTime) {
    case 1:
        console.log("thứ hai");
        break;
    case 2:
        console.log("thứ ba");
        break;
    case 3:
        console.log("Thứ tư")
        break;
    case 4:
        console.log("thứ năm")
        break;
    case 5:
        console.log("thứ sáu")
        break; 
    case 6:
        console.log(" thứ bảy")
    case 7:
        console.log ("chủ nhật")    
    default:
        console.log("nhập sai dữ liệu")
        break;
}

//bt5. tính tổng các số từ 1 đến n, n được nhập từ bàn phím
let n =10;
let sum = 0;
for(let i = 1; i <= n; i++){
    sum += i
}
console.log(sum)

//bt6. in các số từ 1 đến 10, bỏ qua số 5
for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i)
}

//bt7. Tìm số chia hết cho 3 trong khoảng từ 1 đến 20, in ra số đầu tiên chia hết cho 3
for(let i = 1; i <= 20; i++){
    if(i % 3 == 0){
        console.log(i)
        break;
    }
}

//câu 8 for(i = 0; i < 100; i++)
//câu lênh trên chạy từ 0 đến 99, với giá trị i = 0, thỏa điều kiện i < 100, i sẽ cộng thêm 1 giá trị
//vòng lặp tiếp tục chạy đến giá trị i = 99 sẽ dừng. Vì điều kiện i < 100. nên giá trị i không đến 100.

//câu 9. Vòng lặp do-while và while khác nhau thế nào?, giải thích.
//vòng lặp do-while khác với vòng lặp while ở chỗ:
//+Khi sử dụng vòng lặp while, đoạn mã cần thực thi sẽ phải xét điều kiện của từng vòng lặp.
//+ Vòng lặp do-while thì đoạn mã cần thực thi ở LẦN ĐẦU TIÊN sẽ được thực thi ngay mà KHÔNG CẦN XÉT ĐIỀU KIỆN.
