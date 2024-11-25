"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Assuming this is where your Sequelize instance is
class User extends sequelize_1.Model {
}
// Define the model
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure the username is unique
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure the email is unique
    },
}, {
    sequelize: database_1.default, // The Sequelize instance
    modelName: 'User',
    tableName: 'users', // Ensure this matches your actual table name
    timestamps: true, // Enable createdAt and updatedAt
});
exports.default = User;
