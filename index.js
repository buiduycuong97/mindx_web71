const express = require("express");
const app = express();
const userRouter = require("./router/userRouter");
const errorHandle = require("./middleware/errorMidd");
const dbConfig = require("./config/mongodbConfig");

app.use(express.json());

// router middleware
app.use("/user", userRouter);

// connect mongoDB
dbConfig();

// start server
const port = 3000;
app.listen(port, () => {
  console.log("Example app listening on port 3000");
});

//error handler

app.use(errorHandle);
