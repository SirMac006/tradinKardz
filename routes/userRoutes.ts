import express, { Request, Response } from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  try {
    const newUser = await registerUser(username, password, email);
    res.status(201).json({ message: 'User registered successfully', newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await loginUser(username, password);
    res.status(200).json({ message: 'User logged in successfully', user });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Error logging in user' });
  }
});

export default router;
