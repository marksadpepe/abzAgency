require("dotenv").config();
const sql = require("./db.js");
const models = require("./models/relations.js");
const DataGenerator = require("./services/DataGenerator.js");

const express = require("express");
const positionRouter = require("./routes/Position.js");
const tokenRouter = require("./routes/Token.js");

(async () => {
  await DataGenerator.generateDatabaseData();
})();

const app = express();

app.use(express.json());
app.use(positionRouter);
app.use(tokenRouter);

const startApp = async() => {
  try {
    await sql.authenticate();
  } catch (err) {
    console.error("Unable to connect to the database: ", err);
  }

  try {
    await sql.sync();
  } catch (err) {
    console.error("Failed to sync database: ", err);
  }

  app.listen(process.env.APP_PORT, () => {
    console.log(`\nServer is listening ${process.env.APP_PORT} port`);
  });
};

startApp();
