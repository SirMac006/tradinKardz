"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCardToDeck = exports.addCardToFavorites = exports.getCardById = exports.getAllCards = void 0;
const card_1 = __importDefault(require("../models/card")); // Import Card model
const favorites_1 = __importDefault(require("../models/favorites")); // Import Favorites model
const decks_1 = __importDefault(require("../models/decks")); // Import Deck model
// Controller to get all cards
const getAllCards = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield card_1.default.findAll(); // Fetch all cards from the database
    }
    catch (error) {
        throw new Error('Error fetching cards');
    }
});
exports.getAllCards = getAllCards;
// Controller to get a card by ID
const getCardById = (cardId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield card_1.default.findByPk(cardId); // Fetch card by primary key
    }
    catch (error) {
        throw new Error('Error fetching card by ID');
    }
});
exports.getCardById = getCardById;
// Controller to add a card to favorites
const addCardToFavorites = (userId, cardId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if card is already in favorites
        const existingFavorite = yield favorites_1.default.findOne({ where: { userId, cardId } });
        if (existingFavorite) {
            throw new Error('Card is already in favorites');
        }
        // Create the new favorite record
        const newFavorite = yield favorites_1.default.create({ userId, cardId });
        return newFavorite;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.addCardToFavorites = addCardToFavorites;
// Controller to add a card to the user's deck
const addCardToDeck = (userId, cardId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if card is already in the deck
        const existingDeck = yield decks_1.default.findOne({ where: { userId, cardId } });
        if (existingDeck) {
            throw new Error('Card is already in the deck');
        }
        // Create the new deck record
        const newDeck = yield decks_1.default.create({ userId, cardId });
        return newDeck;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.addCardToDeck = addCardToDeck;
