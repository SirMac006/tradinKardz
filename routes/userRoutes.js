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
const userController_1 = require("../controllers/userController"); // Import controller functions for registration and login
const router = express_1.default.Router();
// Route to register a new user
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    try {
        // Call the controller function to register the user
        const newUser = yield (0, userController_1.registerUser)(username, password);
        res.status(201).json({ message: 'User registered successfully', newUser });
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Error registering user' });
    }
}));
// Route to login a user
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        // Call the controller function to log in the user
        const token = yield (0, userController_1.loginUser)(username, password);
        res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        console.error('Error logging in user:', error);
        res.status(400).json({ message: 'Invalid username or password' });
    }
}));
// Optionally, you could add more routes here, such as user profile update or deletion
exports.default = router;
