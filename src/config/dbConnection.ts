var Connection = require("tedious").Connection;

// Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;

var config = {
  server: "DESKTOP-M210O5ISQLEXPRESS", // or "localhost"
  options: {},
  authentication: {
    type: "default",
    options: {
      userName: "root",
      password: "mah123!",
    },
  },
};

var connection = new Connection(config);

// Setup event handler when the connection is established.
connection.on("connect", function (err: any) {
  if (err) {
    return console.log("Error: ", err);
  }
  // If no error, then good to go...
  console.log("connected");
});

// Initialize the connection.
connection.connect();
