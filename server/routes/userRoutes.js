import express from 'express';
const router = express.Router();
import User from '../models/userModel.js';

// Create an API endpoint to handle user registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Create a new user
    const user = new User({ name, email, password });
    await user.save();

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Incorrect password' });
    }

    // User is authenticated, send a success response
    res.json({ success: true, message: 'User logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred' });
  }
});

export default router;
