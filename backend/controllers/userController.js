const userModel = require('../models/userModel')
const bcrypt = require("bcrypt"); 

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  } 
  const userAvailiable = await User.findOne({ email });
  if(userAvailiable) {
    res.status(400);
    throw new Error("User already registered")
  }
  const hashedpassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedpassword);

  const user = await User.create ({
    username,
    email,
    password: hashedpassword,
  })
  if(user) {
     res.status(201).json({ _id: user.id, email: user.email, name: user.username })
  } else {
    res.status(400);
    throw new Error("User data not valid")
  }
  res.json({message: "Register the user"});
}

const loginUser = (req, res) => {
  res.json({message: "login user"});
}

const currentUser = (req, res) => {
  res.json({message: "Current user information"});
}