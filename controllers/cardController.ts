import { Request, Response } from 'express';
import Card from '../models/card';  // Import Card model
import User from '../models/user';  // Import User model
import Favorites from '../models/favorites';  // Import Favorites model
import Deck from '../models/decks';  // Import Deck model

// Controller to get all cards
export const getAllCards = async (): Promise<any> => {
  try {
    return await Card.findAll();  // Fetch all cards from the database
  } catch (error) {
    throw new Error('Error fetching cards');
  }
};

// Controller to get a card by ID
export const getCardById = async (cardId: number): Promise<any> => {
  try {
    return await Card.findByPk(cardId);  // Fetch card by primary key
  } catch (error) {
    throw new Error('Error fetching card by ID');
  }
};

// Controller to add a card to favorites
export const addCardToFavorites = async (userId: number, cardId: number): Promise<any> => {
  try {
    // Check if card is already in favorites
    const existingFavorite = await Favorites.findOne({ where: { userId, cardId } });
    if (existingFavorite) {
      throw new Error('Card is already in favorites');
    }

    // Create the new favorite record
    const newFavorite = await Favorites.create({ userId, cardId });
    return newFavorite;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller to add a card to the user's deck
export const addCardToDeck = async (userId: number, cardId: number): Promise<any> => {
  try {
    // Check if card is already in the deck
    const existingDeck = await Deck.findOne({ where: { userId, cardId } });
    if (existingDeck) {
      throw new Error('Card is already in the deck');
    }

    // Create the new deck record
    const newDeck = await Deck.create({ userId, cardId });
    return newDeck;
  } catch (error) {
    throw new Error(error.message);
  }
};
