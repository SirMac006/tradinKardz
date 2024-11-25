// Utility functions for handling authentication and JWT

// Function to get the current JWT token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

// Function to save the JWT token to localStorage
export const saveToken = (token: string): void => {
  localStorage.setItem('token', token);
};

// Function to remove the JWT token from localStorage
export const removeToken = (): void => {
  localStorage.removeItem('token');
};

// Function to check if the user is logged in by checking for a valid token
export const isAuthenticated = (): boolean => {
  const token = getToken();
  if (!token) return false;
  
  try {
    // Attempt to decode the token
    const decoded = decodeJwt(token);
    const currentTime = Date.now() / 1000;
    
    // Check if token expiration is in the future
    return decoded.exp > currentTime;
  } catch (e) {
    return false;
  }
};

// Helper function to decode the JWT token (without verifying the signature)
const decodeJwt = (token: string): any => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};

// Function to get the current user's information from the JWT token (decode)
export const getCurrentUser = (): any => {
  const token = getToken();
  if (!token) return null;
  return decodeJwt(token);
};
