import React from 'react';

import { CustomThemeProvider } from './contexts/CustomThemeContext';

import './App.css';
import { CssBaseline } from '@mui/material';
import { HomePage } from './pages/HomePage/HomePage';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <div className="App">
        <HomePage />
      </div>
    </CustomThemeProvider>
  );
};

export default App;
