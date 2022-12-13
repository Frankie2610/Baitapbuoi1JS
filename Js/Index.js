//Bài 1: Tính tiền lương nhân viên
//1. Input: Nhập Số ngày làm viêc ở đây
let songay = 4;
let wage = 1000000; //Lương nhân viên 1 ngày
//2. Process
let sum = wage * songay;
//3. Output: Tính tiền lương nhân viên
console.log("Bài tập 1: Lương nhân viên (VNĐ) = ", sum);

//Bài 2: Tính giá trị trung bình của 5 số thực
//1. Input: Nhập vào 5 số thực
let a1 = 1; //Nhập số thứ nhất 
let a2 = 2; //Nhập số thứ 2
let a3 = 3; //Nhập số thứ 3
let a4 = 4; //Nhập số thứ 4
let a5 = 5; //Nhập số thứ 5
//2. Process
let average = (a1 + a2 + a3 + a4 + a5) / 5;
//3. Output: Tính giá trị trung bình của 5 số
console.log("Bài tập 2: Giá trị trung bình 5 số = ", average);

//Bài 3: Quy đổi tiền
//1. Input: Nhập vào số tiền USD
let usd = 2300; //Nhập số tiền USD ở đây
let k = 23500;  //Tỷ Gía USD
//2. Process 
let money = k * usd;
//3. Output: Tính số tiền VNĐ quy đổi
console.log("Bài tập 3: Số tiền VNĐ (đơn vị: VNĐ) = ", money);

//Bài 4: Tính diện tích, chu vi hình chữ nhật
//1. Input: Nhập vào chiều dài, chiều rộng hình chữ nhật
let x = 12; //chiều rộng hình chữ nhât
let y = 28; //chiều dài hình chữ nhật
//2. Process 
let chuvi = 2 * (x + y);
let dientich = x * y;
console.log("Bài tập 4: Chu vi hình chữ nhật (đơn vị chu vi) = ", chuvi);
console.log("Bài tập 4: Diện tích hình chữ nhật (đơn vị diện tích) = ", dientich);

//Bài 5: Tính tổng 2 ký số
//1. Input: Nhập vào số tự nhiên có 2 chữ số
let number = 58; //Nhập số có 2 chữ số ở đây
//2. Process
u = number % 10;               //Lấy chữ số hàng đơn vị
v = Math.floor(number / 10);   //Lấy chữ số hàng chục
let Sum = u + v;
//3. Output: Tính tổng 2 ký số
console.log("Bài tập 5: Tổng 2 ký số = ", u + v);

