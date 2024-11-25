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
exports.registerUser = exports.loginUser = exports.removeCardFromDeck = exports.addCardToDeck = exports.removeCardFromFavorites = exports.addCardToFavorites = exports.getDeck = exports.getFavoriteCards = exports.getCards = void 0;
const axios_1 = __importDefault(require("axios"));
const api = axios_1.default.create({
    baseURL: 'http://localhost:5000/api', // Change this to your backend URL
});
// Function to get all cards from the backend
const getCards = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.get('/cards');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching cards:', error);
        throw new Error('Failed to fetch cards');
    }
});
exports.getCards = getCards;
// Function to get favorite cards for a user
const getFavoriteCards = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.get('/cards/favorites');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching favorite cards:', error);
        throw new Error('Failed to fetch favorite cards');
    }
});
exports.getFavoriteCards = getFavoriteCards;
// Function to get the user's card deck
const getDeck = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.get('/cards/deck');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching deck:', error);
        throw new Error('Failed to fetch deck');
    }
});
exports.getDeck = getDeck;
// Function to add a card to the favorites
const addCardToFavorites = (cardId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield api.post('/cards/favorites', { cardId });
    }
    catch (error) {
        console.error('Error adding card to favorites:', error);
        throw new Error('Failed to add card to favorites');
    }
});
exports.addCardToFavorites = addCardToFavorites;
// Function to remove a card from the favorites
const removeCardFromFavorites = (cardId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield api.delete(`/cards/favorites/${cardId}`);
    }
    catch (error) {
        console.error('Error removing card from favorites:', error);
        throw new Error('Failed to remove card from favorites');
    }
});
exports.removeCardFromFavorites = removeCardFromFavorites;
// Function to add a card to the deck
const addCardToDeck = (cardId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield api.post('/cards/deck', { cardId });
    }
    catch (error) {
        console.error('Error adding card to deck:', error);
        throw new Error('Failed to add card to deck');
    }
});
exports.addCardToDeck = addCardToDeck;
// Function to remove a card from the deck
const removeCardFromDeck = (cardId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield api.delete(`/cards/deck/${cardId}`);
    }
    catch (error) {
        console.error('Error removing card from deck:', error);
        throw new Error('Failed to remove card from deck');
    }
});
exports.removeCardFromDeck = removeCardFromDeck;
// Function to log in a user
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.post('/users/login', user);
        return response.data;
    }
    catch (error) {
        console.error('Error logging in:', error);
        throw new Error('Failed to log in');
    }
});
exports.loginUser = loginUser;
// Function to register a user
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield api.post('/users/register', user);
        return response.data;
    }
    catch (error) {
        console.error('Error registering user:', error);
        throw new Error('Failed to register user');
    }
});
exports.registerUser = registerUser;
