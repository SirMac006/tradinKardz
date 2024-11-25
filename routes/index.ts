import express, { Application } from 'express';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import cors from 'cors';
import morgan from 'morgan';
import { userRoutes, cardRoutes } from '../routes';  // Import your route files
import sequelize from '../config/database';  // Your Sequelize instance

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app: Application = express();

// Middleware setup
app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json());  // Parse incoming JSON requests
app.use(morgan('dev'));  // HTTP request logger (for development)

// Set up routes
app.use('/api/users', userRoutes);  // User-related routes
app.use('/api/cards', cardRoutes);  // Card-related routes

// Health check route
app.get('/', (req, res) => {
  res.send('API is running!');
});

// Start server and connect to database
const startServer = async () => {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    // Sync Sequelize models (this syncs your models with the database, creating tables if they don't exist)
    await sequelize.sync({ force: false });
    console.log('Sequelize models synced successfully.');

    // Start the server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Start the server
startServer();
