const fs = require("fs");

const logApi = (method, mess) => {
  return (req, res, next) => {
    const time = new Date();
    const content = `\n${time} >> ${method} >> ${mess}`;
    fs.appendFile("test.txt", content, (err) => {
      if (err) {
        throw new Error(err);
      }
      console.log("File successfully written to disk");
    });
    next();
  };
};

module.exports = logApi;
