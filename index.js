require("dotenv").config();
const sql = require("./db.js");
const models = require("./models/relations.js");
const DataGenerator = require("./services/DataGenerator.js");

(async () => {
  await DataGenerator.generateDatabaseData();
})();

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
