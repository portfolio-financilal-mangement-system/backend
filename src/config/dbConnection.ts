import mysql from "mysql";

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

connection.connect(function (err) {
  if (err) {
    console.log("error in connecting" + err);
    return;
  }
  console.log("db connected");
});

export default connection;
