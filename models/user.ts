import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; // Assuming this is where your Sequelize instance is

interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
}

interface UserCreationAttributes extends Omit<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Define the model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure the username is unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensure the email is unique
    },
  },
  {
    sequelize, // The Sequelize instance
    modelName: 'User',
    tableName: 'users', // Ensure this matches your actual table name
    timestamps: true, // Enable createdAt and updatedAt
  }
);

export default User;
