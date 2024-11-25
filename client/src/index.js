"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const app_1 = __importDefault(require("../app")); // Import the main App component
const react_router_dom_1 = require("react-router-dom"); // Import the Router for routing
require("./index.css"); // Global CSS file
// Render the React application inside the 'root' div in index.html
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <app_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_1.default.StrictMode>, document.getElementById('root'));
