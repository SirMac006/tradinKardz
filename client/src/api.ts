import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to your backend URL
});

// Card interface
interface Card {
  id: number;
  name: string;
  type: string;
  rarity: string;
  imageUrl: string;
}

// User interface
interface User {
  username: string;
  password: string;
}

// Function to get all cards from the backend
export const getCards = async (): Promise<Card[]> => {
  try {
    const response = await api.get('/cards');
    return response.data as Card[];
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw new Error('Failed to fetch cards');
  }
};

// Function to get favorite cards for a user
export const getFavoriteCards = async (): Promise<Card[]> => {
  try {
    const response = await api.get('/cards/favorites');
    return response.data as Card[];
  } catch (error) {
    console.error('Error fetching favorite cards:', error);
    throw new Error('Failed to fetch favorite cards');
  }
};

// Function to get the user's card deck
export const getDeck = async (): Promise<Card[]> => {
  try {
    const response = await api.get('/cards/deck');
    return response.data as Card[];
  } catch (error) {
    console.error('Error fetching deck:', error);
    throw new Error('Failed to fetch deck');
  }
};

// Function to add a card to the favorites
export const addCardToFavorites = async (cardId: number): Promise<void> => {
  try {
    await api.post('/cards/favorites', { cardId });
  } catch (error) {
    console.error('Error adding card to favorites:', error);
    throw new Error('Failed to add card to favorites');
  }
};

// Function to remove a card from the favorites
export const removeCardFromFavorites = async (cardId: number): Promise<void> => {
  try {
    await api.delete(`/cards/favorites/${cardId}`);
  } catch (error) {
    console.error('Error removing card from favorites:', error);
    throw new Error('Failed to remove card from favorites');
  }
};

// Function to add a card to the deck
export const addCardToDeck = async (cardId: number): Promise<void> => {
  try {
    await api.post('/cards/deck', { cardId });
  } catch (error) {
    console.error('Error adding card to deck:', error);
    throw new Error('Failed to add card to deck');
  }
};

// Function to remove a card from the deck
export const removeCardFromDeck = async (cardId: number): Promise<void> => {
  try {
    await api.delete(`/cards/deck/${cardId}`);
  } catch (error) {
    console.error('Error removing card from deck:', error);
    throw new Error('Failed to remove card from deck');
  }
};

// Function to log in a user
export const loginUser = async (user: User): Promise<{ token: string }> => {
  try {
    const response = await api.post('/users/login', user);
    return response.data as { token: string };
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Failed to log in');
  }
};

// Function to register a user
export const registerUser = async (user: User): Promise<{ token: string }> => {
  try {
    const response = await api.post('/users/register', user);
    return response.data as { token: string };
  } catch (error) {
    console.error('Error registering user:', error);
    throw new Error('Failed to register user');
  }
};
