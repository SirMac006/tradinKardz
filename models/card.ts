import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Card = sequelize.define('Card', {
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false },
  imageUrl: { type: DataTypes.STRING, allowNull: false }
});

export default Card;
