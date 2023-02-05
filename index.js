const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const employeeRouter = require("./router/employeeRouter");
const productRouter = require("./router/productRouter");
const registerRouter = require("./router/registerRouter");
const auth = require("./modules/authModule");
const mongo = require("./connect");

dotenv.config();
mongo.connect();
const app = express();
app.use(cors());
// to parse req.body, to send the req.body from client to server
app.use(express.json());
app.get('/elaiya', (req, res) => {
  res.send('GET request to the homepage')
})

app.use("/register", registerRouter);

app.use("/", auth.authenticateUser);
// app.use("/images", express.static("images"));

app.use("/employees", employeeRouter);

app.use("/products", productRouter);

app.listen(process.env.PORT);

// CORS : Cross Origin Resource Sharing
