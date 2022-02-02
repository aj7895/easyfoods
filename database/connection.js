const mongoose = require("mongoose");

// url
let mongoDbUrl = `mongodb+srv://amit:aj1554@easyfoods.vqs7m.mongodb.net/easyfoods?retryWrites=true&w=majority`;

mongoose.connect(mongoDbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let connectToDb = mongoose.connection;

connectToDb.on("error", () => {
  console.log("error", "Error connecting to the database");
});

connectToDb.on("connected", () => {
  console.log("Connected to database successfully");
});

module.exports = mongoose;
