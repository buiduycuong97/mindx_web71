const jwt = require("jsonwebtoken");

const generateAccessToken = (id) => {
  const token = jwt.sign({ id: id }, "secretKey", { // id+secretKey => 1102abc
    expiresIn: "1d",
  });
  return token;
};
const generateRefreshToken = (id) => {
  const token = jwt.sign({ id: id }, "secretKey", { // id+secretKey => 1102abc
    expiresIn: "1y",
  });
  return token;
};

module.exports = {generateAccessToken,generateRefreshToken};