const userModel = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }

    // Check if the user is already registered
    const userAvailable = await userModel.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    // Create the user
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    // Check if user creation was successful
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email, name: user.username });
    } else {
      res.status(400);
      throw new Error("User data not valid");
    }
  } catch (error) {
    // Handle errors and send a response
    res.status(res.statusCode || 500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { eamil, password } = req.body;
    if ( !eamil || !password ) {
      res.status(400);
      throw new Error("All fields are mandatory")
    }
    const user = await User.findOne({email});
    //compare passowrd
    const comparePassword = await bcrypt.compare(password, user.password)
    if (user && comparePassword) {
      const accesToken = jwt.sign({
        user: {
          username: user.username,
          eamil: user.email,
          id: user.id,
        },
      },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1m" } 
      );
      res.status(200).json({ accesToken })
    } else {
      res.status(401);
      throw new Error("email or password is not valid")
    }
  } catch {
    res.status(res.statusCode || 500).json({ message: error.message });
  }
}

const currentUser = (req, res) => {
  res.json(req.user);
}

module.exports = { registerUser, loginUser, currentUser }