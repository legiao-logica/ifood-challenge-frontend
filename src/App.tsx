import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import LoginPage from './pages/Login';
import EmailVerificationPage from './pages/EmailVerification';
import DashboardPage from './pages/DashboardPage';

// Create your custom theme
const theme = createTheme({
  typography: {
    fontFamily: ['Helvetica, Arial, sans-serif'].join(','),
    h4: {
      color: '#000000', // Black for headers (e.g., "Seja bem vindo!")
    },
    body1: {
      color: '#5f6368', // Gray for body text
    },
  },
  palette: {
    mode: 'light', // Using light mode based on your screenshot
    background: {
      paper: '#ffffff', // white background for paper components
      default: '#f5f5f5', // light gray background for the rest of the app
    },
    primary: {
      main: '#ff0000', // Main red color
      contrastText: '#ffffff', // White text on buttons
    },
    secondary: {
      main: '#ff6501', // Accent color
      contrastText: '#ffffff',
    },
    text: {
      primary: '#000000', // Black for text
      secondary: '#5f6368', // Gray for secondary text
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
