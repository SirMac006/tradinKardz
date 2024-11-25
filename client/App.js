"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const CardList_1 = __importDefault(require("./src/components/CardList"));
const Register_1 = __importDefault(require("./src/components/Register"));
const Login_1 = __importDefault(require("./src/components/Login"));
const Favoites_1 = __importDefault(require("./src/components/Favoites"));
const Deck_1 = __importDefault(require("./src/components/Deck"));
const App = () => {
    return (<div className="app">
      <h1>Trading Cards App</h1>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<CardList_1.default />}/>
        <react_router_dom_1.Route path="/register" element={<Register_1.default />}/>
        <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
        <react_router_dom_1.Route path="/favorites" element={<Favoites_1.default />}/>
        <react_router_dom_1.Route path="/deck" element={<Deck_1.default />}/>
      </react_router_dom_1.Routes>
    </div>);
};
exports.default = App;
