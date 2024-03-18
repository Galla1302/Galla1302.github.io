import React from 'react';

import { IntroSection, NavBar, WorkExperience } from './components';
import { CustomThemeProvider } from './contexts/CustomThemeContext';

import navigationData from './data/navigation';

import './App.css';

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <div className="App">
        <NavBar links={navigationData} />
        <IntroSection />
        <WorkExperience />
      </div>
    </CustomThemeProvider>
  );
};

export default App;
