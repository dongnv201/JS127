
// BT1: Kiểm tra SỐ CHẴN LẺ
const value3 = Number(prompt("Nhập 1 số vào đây:"));
if (value3 % 2 === 0) {
  console.log(`Đây là số chắn = ${value3}`);
} else if (value3 % 2 !== 0) {
  console.log(`Đây là số lẻ = ${value3}`);
}


// -----------------------------------------
// BT2: Kiểm tra SỐ NGUYỄN TỐ 
const value4 = Number(prompt("Nhập 1 số vào đây:"));
if (value4 < 2) {
  console.log(`False, Đây không là số nguyên tố`);
} else if (value4 === 2) {
  console.log(`True, Đây là số nguyên tố = ${value4}`);
} else if (value4 % 2 === 0) {
  console.log(`False, Đây không là số nguyên tố`);
} else {
  for (let i = 3; i < Math.sqrt(value4); i += 2) {
    if (value4 % i === 0) {
      console.log(`False, Đây không là số nguyên tố`);
    }
  }
}


// -----------------------------------------
// BT3: Tìm SỐ LỚN NHẤT trong dãy số
const value = prompt("Nhap vao day:");
const newArray = value.split(",");
let max = 0;


// -----------------------------------------
// BT4: Tìm SỐ NHỎ NHẤT trong dãy số
// Giả định vị trí số nhỏ nhất là số đầu tiên của mảng
// So sánh từng só trong chuỗi lần lượt với số nhỏ nhất, cho tới khi tìm được số nhỏ nhất
let min = newArray[0];
for (let i = 0; i < newArray.length; i++) {
  if (min > Number(newArray[i])) {
    min = newArray[i];}
}
console.log("min=", min);