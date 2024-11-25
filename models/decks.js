"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database")); // Sequelize instance
const user_1 = __importDefault(require("./user")); // Importing the User model
const card_1 = __importDefault(require("./card")); // Importing the Card model
class Deck extends sequelize_1.Model {
}
// Define the model for Deck
Deck.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user_1.default, // The user model
            key: 'id', // The 'id' column in the users table
        },
    },
    cardId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: card_1.default, // The card model
            key: 'id', // The 'id' column in the cards table
        },
    },
}, {
    sequelize: database_1.default,
    modelName: 'Deck',
    tableName: 'decks',
    timestamps: true,
});
// Define associations
user_1.default.belongsToMany(card_1.default, { through: Deck, foreignKey: 'userId', otherKey: 'cardId' });
card_1.default.belongsToMany(user_1.default, { through: Deck, foreignKey: 'cardId', otherKey: 'userId' });
exports.default = Deck;
