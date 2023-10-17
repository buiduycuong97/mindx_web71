const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middleware/token");

const createNewUser = async (req, res) => {
  try {
    const body = req.body;
    //validate
    const Schema = Joi.object({
      username: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string()
        .regex(
          /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/ // Mindx123@
        )
        .required(),
    });

    const { error } = Schema.validate(body);
    if (error) {
      res.status(400);
      throw new Error("Email or password invalid");
    }

    const userExist = await userModel.findOne({ username: body.username });
    if (userExist) {
      res.status(400);
      throw new Error("Email existed");
    }

    // hash pass
    const salt = await bcrypt.genSalt(10);
    const newPass = await bcrypt.hash(body.password, salt);

    body.password = newPass;

    const newUser = await userModel.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //validate
    const Schema = Joi.object({
      username: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string()
        .regex(
          /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/
        )
        .required(),
    });

    const { error } = Schema.validate(req.body);
    if (error) {
      res.status(400);
      throw new Error(error);
    }
    // check user existed
    const user = await userModel.findOne({ username });
    if (!user) {
      res.status(400);
      throw new Error("Email is not existed ");
    }

    const checkPass = await bcrypt.compare(password, user.password);
    if (!checkPass) {
      res.status(400);
      throw new Error("Pass incorrect");
    }
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // update token in db
    await userModel.findByIdAndUpdate(user._id, { refreshToken });

    res.json({
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const body = req.body;

  const user = await userModel.findByIdAndUpdate(userId, body, { new: true });

  res.json(user);

  try {
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};
const removeUser = async (req, res) => {
  const userId = req.params.id;

  const user = await userModel.findByIdAndDelete(userId);

  res.json("Success");

  try {
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};
const nameInList = async (req, res) => {
  const user = await userModel.find({
    $or: [
      { username: { $in: ["linh", "huy", "long"] } },
      { password: { $eq: 457 } },
    ],
  });
  res.json(user);
};
const getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();

    // const count = await userModel.countDocuments();
    res.json(user);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  removeUser,
  nameInList,
  login,
};

const schema = {
  name: String,
  address: {
    building: Number,
    coord: [],
    street: String,
    zipcode: Number,
  },
  borough: String,
  cuisine: String,
  rates: [{ date: Number, rate: String, score: Number }],
};
