const express = require("express");
const app = express();
const path = require("path");
let databaseConnection = require("./database/connection.js");
// entry point for routing
let productsRoute = require("./routes/productsRoutes.js");
let userRoute = require("./routes/userRoutes.js");
let orderRoute = require("./routes/orderRoutes.js");

app.use(express.json());
// routes
app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

if (process.env.NODE_ENV == "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
