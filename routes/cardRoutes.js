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
const express_1 = __importDefault(require("express"));
const cardController_1 = require("../controllers/cardController"); // Import controllers
const router = express_1.default.Router();
// Route to get all cards
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cards = yield (0, cardController_1.getAllCards)(); // Call controller without passing req, res directly
        res.json(cards);
    }
    catch (error) {
        console.error('Error fetching cards:', error);
        res.status(500).json({ message: 'Error fetching cards' });
    }
}));
// Route to get a specific card by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cardId = parseInt(req.params.id, 10); // Extract cardId from params
    try {
        const card = yield (0, cardController_1.getCardById)(cardId); // Call the controller function with cardId
        if (card) {
            res.json(card);
        }
        else {
            res.status(404).json({ message: 'Card not found' });
        }
    }
    catch (error) {
        console.error('Error fetching card by ID:', error);
        res.status(500).json({ message: 'Error fetching card' });
    }
}));
// Route to add a card to favorites
router.post('/favorites', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, cardId } = req.body; // Extract userId and cardId from the request body
    try {
        const result = yield (0, cardController_1.addCardToFavorites)(userId, cardId); // Add card to favorites
        res.status(200).json({ message: 'Card added to favorites', result });
    }
    catch (error) {
        console.error('Error adding card to favorites:', error);
        res.status(500).json({ message: 'Error adding card to favorites' });
    }
}));
// Route to add a card to a user's deck
router.post('/deck', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, cardId } = req.body; // Extract userId and cardId from the request body
    try {
        const result = yield (0, cardController_1.addCardToDeck)(userId, cardId); // Add card to deck
        res.status(200).json({ message: 'Card added to deck', result });
    }
    catch (error) {
        console.error('Error adding card to deck:', error);
        res.status(500).json({ message: 'Error adding card to deck' });
    }
}));
exports.default = router;
