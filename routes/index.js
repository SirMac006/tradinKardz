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
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("../routes"); // Import your route files
const database_1 = __importDefault(require("../config/database")); // Your Sequelize instance
// Load environment variables from .env file
dotenv_1.default.config();
// Initialize the Express app
const app = (0, express_1.default)();
// Middleware setup
app.use((0, cors_1.default)()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express_1.default.json()); // Parse incoming JSON requests
app.use((0, morgan_1.default)('dev')); // HTTP request logger (for development)
// Set up routes
app.use('/api/users', routes_1.userRoutes); // User-related routes
app.use('/api/cards', routes_1.cardRoutes); // Card-related routes
// Health check route
app.get('/', (req, res) => {
    res.send('API is running!');
});
// Start server and connect to database
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Connect to the database
        yield database_1.default.authenticate();
        console.log('Database connected successfully.');
        // Sync Sequelize models (this syncs your models with the database, creating tables if they don't exist)
        yield database_1.default.sync({ force: false });
        console.log('Sequelize models synced successfully.');
        // Start the server
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
// Start the server
startServer();
