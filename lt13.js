var money = parseFloat(prompt("Nhập số tiền gửi: "));
var month = parseInt(prompt("Nhập số tháng gửi: "));
var lãi = 4.3 / 100;
var lãitháng = money / 12;
var interest = money * lãitháng * month;
alert("Số tiền lãi nhận được: " + interest + " VNĐ");
