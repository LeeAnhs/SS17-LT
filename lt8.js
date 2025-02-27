let d1 = prompt("Nhập năm tháng ngày thứ nhất (YYYY-MM-DD):");
let d2 = prompt("Nhập năm tháng ngày thứ hai (YYYY-MM-DD):");
const date1=new Date(d1);
const date2=new Date(d2);
let diffTime=Math.abs(date2-date1);
let diffDays=Math.ceil(diffTime/(1000*60*60*24));
document.write("Số ngày chênh lệch giữa 2 ngày là: "+diffDays);
