"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const api_1 = require("../api"); // API functions for deck management
const Deck = () => {
    const [deck, setDeck] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchDeck = () => __awaiter(void 0, void 0, void 0, function* () {
            const userDeck = yield (0, api_1.getDeck)();
            setDeck(userDeck);
        });
        fetchDeck();
    }, []);
    const handleAddCard = (cardId) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, api_1.addCardToDeck)(cardId);
        setDeck((prevDeck) => [...prevDeck, { id: cardId, name: 'New Card', type: 'Unknown', rarity: 'Common', imageUrl: '' }]); // Update the deck state (example)
    });
    const handleRemoveCard = (cardId) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, api_1.removeCardFromDeck)(cardId);
        setDeck((prevDeck) => prevDeck.filter((card) => card.id !== cardId)); // Remove card from deck
    });
    return (<div className="deck">
      <h2>Your Card Deck</h2>
      {deck.length === 0 ? (<p>Your deck is empty.</p>) : (deck.map((card) => (<div key={card.id} className="card">
            <h3>{card.name}</h3>
            <p>Type: {card.type}</p>
            <p>Rarity: {card.rarity}</p>
            <img src={card.imageUrl} alt={card.name}/>
            <button onClick={() => handleRemoveCard(card.id)}>Remove from Deck</button>
          </div>)))}
      <button onClick={() => handleAddCard(123)}>Add New Card</button> {/* Example to add a card */}
    </div>);
};
exports.default = Deck;
