const moongose = require("mongoose");

async function dbConfig() {
  try {
    const dbUrl = "mongodb://localhost:27017/Web72";
    await moongose.connect(dbUrl);
    console.log("Success connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConfig;
