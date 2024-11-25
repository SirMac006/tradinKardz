"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CardDetail = ({ name, type, rarity, imageUrl }) => {
    return (<div className="card-detail">
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Rarity: {rarity}</p>
      <img src={imageUrl} alt={name}/>
    </div>);
};
exports.default = CardDetail;
