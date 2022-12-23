const { Conflict } = require("http-errors");
const gravatar = require("gravatar");

const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`409, Email ${email} in use`);
  }

  const avatarURL = gravatar.url(email);

  // метод для проверки пароля
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
  });

  res.status(201).json({
    Status: "success",
    code: 201,
    data: {
      user: {
        email: email,
        subscription: subscription,
        password: password,
        avatarURL,
      },
    },
  });
};

module.exports = signup;
