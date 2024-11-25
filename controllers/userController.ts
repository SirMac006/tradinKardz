import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const registerUser = async (username: string, password: string, email: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword, email });
  return user;
};

export const loginUser = async (username: string, password: string) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Error('Invalid credentials');
  }
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  return { user, token };
};
