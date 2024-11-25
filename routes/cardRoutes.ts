import express, { Request, Response } from 'express';
import { getAllCards, getCardById, addCardToFavorites, addCardToDeck } from '../controllers/cardController'; // Import controllers

const router = express.Router();

// Route to get all cards
router.get('/', async (req: Request, res: Response) => {
  try {
    const cards = await getAllCards(); // Call controller without passing req, res directly
    res.json(cards);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({ message: 'Error fetching cards' });
  }
});

// Route to get a specific card by ID
router.get('/:id', async (req: Request, res: Response) => {
  const cardId = parseInt(req.params.id, 10); // Extract cardId from params
  try {
    const card = await getCardById(cardId); // Call the controller function with cardId
    if (card) {
      res.json(card);
    } else {
      res.status(404).json({ message: 'Card not found' });
    }
  } catch (error) {
    console.error('Error fetching card by ID:', error);
    res.status(500).json({ message: 'Error fetching card' });
  }
});

// Route to add a card to favorites
router.post('/favorites', async (req: Request, res: Response) => {
  const { userId, cardId } = req.body; // Extract userId and cardId from the request body
  try {
    const result = await addCardToFavorites(userId, cardId); // Add card to favorites
    res.status(200).json({ message: 'Card added to favorites', result });
  } catch (error) {
    console.error('Error adding card to favorites:', error);
    res.status(500).json({ message: 'Error adding card to favorites' });
  }
});

// Route to add a card to a user's deck
router.post('/deck', async (req: Request, res: Response) => {
  const { userId, cardId } = req.body; // Extract userId and cardId from the request body
  try {
    const result = await addCardToDeck(userId, cardId); // Add card to deck
    res.status(200).json({ message: 'Card added to deck', result });
  } catch (error) {
    console.error('Error adding card to deck:', error);
    res.status(500).json({ message: 'Error adding card to deck' });
  }
});

export default router;
