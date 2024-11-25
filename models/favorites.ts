import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Favorites = sequelize.define('Favorites', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  cardId: { type: DataTypes.INTEGER, allowNull: false }
});

export default Favorites;
