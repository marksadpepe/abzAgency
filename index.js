require("dotenv").config();
const sql = require("./db.js");
const express = require("express");
const models = require("./models/relations.js");
const DataGenerator = require("./services/DataGenerator.js");

(async () => {
  await DataGenerator.generateDatabaseData();
})();

const app = express();

app.use(express.json());

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
};

startApp();
