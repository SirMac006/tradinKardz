import { DataTypes } from 'sequelize';
import sequelize from '../config/database';  // Sequelize instance
import User from '../models/user';  // Importing the User model
import Card from '../models/card';  // Importing the Card model

const Decks = sequelize.define('Decks', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  cardId: { type: DataTypes.INTEGER, allowNull: false }
});

export default Decks;
