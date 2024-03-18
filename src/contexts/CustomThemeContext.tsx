import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface CustomThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({
  toggleTheme: () => {},
  mode: 'light',
});

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    return createTheme({
      components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: mode === 'light' ? '#ffffff' : '#121212',
            },
          },
        },
      },
      palette: {
        mode,
        primary: {
          main: '#ffeb3b',
        },
        text: {
          primary: mode === 'light' ? '#000000' : '#ffffff',
        },
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
