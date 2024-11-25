"use strict";
// Utility functions for handling authentication and JWT
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = exports.isAuthenticated = exports.removeToken = exports.saveToken = exports.getToken = void 0;
// Function to get the current JWT token from localStorage
const getToken = () => {
    return localStorage.getItem('token');
};
exports.getToken = getToken;
// Function to save the JWT token to localStorage
const saveToken = (token) => {
    localStorage.setItem('token', token);
};
exports.saveToken = saveToken;
// Function to remove the JWT token from localStorage
const removeToken = () => {
    localStorage.removeItem('token');
};
exports.removeToken = removeToken;
// Function to check if the user is logged in by checking for a valid token
const isAuthenticated = () => {
    const token = (0, exports.getToken)();
    if (!token)
        return false;
    try {
        // Attempt to decode the token
        const decoded = decodeJwt(token);
        const currentTime = Date.now() / 1000;
        // Check if token expiration is in the future
        return decoded.exp > currentTime;
    }
    catch (e) {
        return false;
    }
};
exports.isAuthenticated = isAuthenticated;
// Helper function to decode the JWT token (without verifying the signature)
const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};
// Function to get the current user's information from the JWT token (decode)
const getCurrentUser = () => {
    const token = (0, exports.getToken)();
    if (!token)
        return null;
    return decodeJwt(token);
};
exports.getCurrentUser = getCurrentUser;
