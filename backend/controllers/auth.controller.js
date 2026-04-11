const userModel = require("../model/userModel");
const generateToken = require("../utils/generateToken");

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const isRegistered = await userModel.findOne({ email });

    if (isRegistered) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const user = await userModel.create({
      username,
      email,
      password,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    res.status(201).json({
      message: "User created",
      username: user.username,
      email: user.email,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User Registration failed",
    });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials, please try again",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials, please try again",
      });
    }

    res.cookie("token", generateToken(user._id), {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    res.status(200).json({
      message: "Login successful",
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed, try again",
    });
  }
};

const Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });
  res.status(200).json({
    message: "Logged out successfully",
  });
};

module.exports = { Register, Login, Logout };
