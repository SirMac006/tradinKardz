-- Create the users table to store user information
CREATE TABLE users (
    id SERIAL PRIMARY KEY,         -- Auto-incrementing ID
    username VARCHAR(255) UNIQUE NOT NULL, -- User's username (unique)
    password VARCHAR(255) NOT NULL, -- User's hashed password
    email VARCHAR(255) UNIQUE NOT NULL, -- User's email (unique)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp for when the user was created
);

-- Create the cards table to store card details (Pokemon/Magic cards)
CREATE TABLE cards (
    id SERIAL PRIMARY KEY,         -- Auto-incrementing ID for the card
    name VARCHAR(255) NOT NULL,    -- Name of the card
    type VARCHAR(255),             -- Type of the card (e.g., Pokémon type, Magic card type)
    rarity VARCHAR(255),           -- Rarity of the card (e.g., common, rare)
    image_url VARCHAR(255),        -- Image URL for the card
    description TEXT               -- Description of the card (optional)
);

-- Create the favorites table to store the user's favorite cards
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,         -- Auto-incrementing ID
    user_id INT NOT NULL,          -- Foreign key to the users table
    card_id INT NOT NULL,          -- Foreign key to the cards table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp for when the favorite was added
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, -- Foreign key constraint
    FOREIGN KEY (card_id) REFERENCES cards(id) ON DELETE CASCADE -- Foreign key constraint
);

-- Create the deck table to store the user's card deck
CREATE TABLE decks (
    id SERIAL PRIMARY KEY,         -- Auto-incrementing ID
    user_id INT NOT NULL,          -- Foreign key to the users table
    card_id INT NOT NULL,          -- Foreign key to the cards table
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp for when the card was added to the deck
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, -- Foreign key constraint
    FOREIGN KEY (card_id) REFERENCES cards(id) ON DELETE CASCADE -- Foreign key constraint
);

-- Create an index on card name for quicker search queries
CREATE INDEX idx_card_name ON cards (name);

-- Create an index on the user_id for the favorites and deck tables for faster queries
CREATE INDEX idx_user_id_favorites ON favorites (user_id);
CREATE INDEX idx_user_id_decks ON decks (user_id);

