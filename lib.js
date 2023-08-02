// Kiểm tra số nguyên dương
const isPositiveInteger = (number) => {
    return Number.isInteger(number) && number > 0;
  };
  
  // Phép cộng
  const add = (a, b) => {
    return a + b;
  };
  
  // Phép trừ
  const subtract = (a, b) => {
    return a - b;
  };
  
  // Phép nhân
  const multiply = (a, b) => {
    return a * b;
  };
  
  // Phép chia
  const divide = (a, b) => {
    if (b === 0) {
      return "Không thể chia cho 0";
    }
    return a / b;
  };
  
  // Đếm số ký tự của một số
  const countDigits = (number) => {
    return String(number).length;
  };
  
  export { isPositiveInteger, add, subtract, multiply, divide, countDigits };