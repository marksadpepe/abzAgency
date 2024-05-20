require("dotenv").config();
const sql = require("./db.js");
const models = require("./models/relations.js");
const DataGenerator = require("./services/DataGenerator.js");

const express = require("express");
const positionRouter = require("./routes/Position.js");
const tokenRouter = require("./routes/Token.js");
const userRouter = require("./routes/User.js");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type, Token");

  next();
});

app.use("/api/v1", positionRouter);
app.use("/api/v1", tokenRouter);
app.use("/api/v1", userRouter);

const startApp = async() => {
  try {
    await sql.authenticate();
  } catch (err) {
    console.error("Unable to connect to the database:", err.message);
  }

  try {
    await sql.sync();
    await DataGenerator.generateDatabaseData();
  } catch (err) {
    console.error("Failed to sync database:", err.message);
  }

  app.listen(process.env.APP_PORT, () => {
    console.log(`\nServer is listening ${process.env.APP_PORT} port`);
  });
};

startApp();
