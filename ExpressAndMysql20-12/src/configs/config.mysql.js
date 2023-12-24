const mysql2 = require("mysql2");
//khởi tạo kết nối
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "demo-connect",
  password: "quang460",
});
// kiểm tra kết nối
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect success");
  }
});
// xuất dữ liệu kết nối
module.exports = connection;
