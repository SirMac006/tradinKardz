import express, { Request, Response } from 'express';
import { registerUser, loginUser } from '../controllers/userController'; // Importing the controllers for user registration and login

const router = express.Router();

// Route to register a new user
router.post('/register', async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  try {
    // Call the registerUser controller function
    const newUser = await registerUser(username, password, email);
    res.status(201).json({ message: 'User registered successfully', newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Route to login a user
router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    // Call the loginUser controller function
    const token = await loginUser(username, password);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(400).json({ message: 'Invalid username or password' });
  }
});

export default router;
