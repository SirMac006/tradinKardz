import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app'; // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router for routing
import './index.css'; // Global CSS file

// Render the React application inside the 'root' div in index.html
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
