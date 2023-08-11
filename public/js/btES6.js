// //bài 1: cho trước một số n > 1, kiểm tra số đó
//là số chẵn hay lẽ
const checkNumberN = (n) => {
  if (n % 2 === 0) {
    console.log(`${n} là số chẵn`);
  } else {
    console.log(`${n} là số lẻ`);
  }
  //là số âm hay số dương
  if (n < 0) {
    console.log(`${n} là số âm`);
  } else {
    console.log(`${n} là số dương`);
  }
  // in ra các số chẵn từ 0 - n
  for (let i = 0; i <= n; i += 2) {
    console.log(i);
  }
  //các số lẽ từ 1 - n
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
  //đếm số chính phương
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      console.log(i);
      count++;
    }
  }
  console.log(`Tổng cộng có ${count} số chính phương`);
  //kiểm tra xem n có phải là số nguyên tố
  let newNumber = true;
  if (n === 1) {
    newNumber = false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        newNumber = false;
        break;
      }
    }
  }
  if (newNumber) {
    console.log(`${n} là số nguyên tố`);
  } else {
    console.log(`${n} không là số nguyên tố`);
  }
};
checkNumberN(10);
// tìm tất cả các số nguyên tố nhỏ hơn n
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function findPrimes(n) {
    const primes = [];
    for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

  const n = parseInt(prompt("Nhập số n:"));
  const primeNumbers = findPrimes(n);
  console.log("Các số nguyên tố nhỏ hơn", n, "là:", primeNumbers);

//bài 2: Dùng switch - case in ra tháng đó có mấy ngày (nhập vào tháng với N ngẫu nhiên)=> từng lượt N =2, N=8, N=12

let N = parseInt(prompt("Nhập vào N (2, 8, 12):"));

switch (N) {
  case 2:
    console.log("Tháng 2 có 28 hoặc 29 ngày.");
    break;
//   case 8:
    console.log("Tháng 8 có 31 ngày.");
    break;
  case 12:
    console.log("Tháng 12 có 31 ngày.");
    break;
  default:
    console.log("N không hợp lệ.");
    break;
}
