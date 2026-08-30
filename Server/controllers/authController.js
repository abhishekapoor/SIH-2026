const User = require('../models/User');
const FarmerProfile = require('../models/FarmerProfile');
const BuyerProfile = require('../models/BuyerProfile');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, role, farmerProfile, buyerProfile } = req.body;

    if (!name || !email || !password || !phone || !role) {
      return res.status(400).json({ message: 'Please add all required fields' });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 1. Create the identity (User)
    const user = await User.create({
      name,
      email,
      phone,
      password,
      role: role.toLowerCase(),
    });

    let profileData = null;

    // 2. Create the role-specific profile linked to the User
    if (user) {
      if (user.role === 'farmer') {
        profileData = await FarmerProfile.create({
          userId: user._id,
          ...farmerProfile
        });
      } else if (user.role === 'buyer') {
        profileData = await BuyerProfile.create({
          userId: user._id,
          ...buyerProfile
        });
      }

      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        farmerProfile: user.role === 'farmer' ? profileData : undefined,
        buyerProfile: user.role === 'buyer' ? profileData : undefined,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please add email and password' });
    }

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      
      let profileData = null;
      if (user.role === 'farmer') {
        profileData = await FarmerProfile.findOne({ userId: user._id });
      } else if (user.role === 'buyer') {
        profileData = await BuyerProfile.findOne({ userId: user._id });
      }

      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        farmerProfile: user.role === 'farmer' ? profileData : undefined,
        buyerProfile: user.role === 'buyer' ? profileData : undefined,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
