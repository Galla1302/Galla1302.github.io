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
  const hour = new Date().getHours();
  const [mode, setMode] = useState<'light' | 'dark'>(
    hour >= 6 && hour < 18 ? 'light' : 'dark',
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    return createTheme({
      typography: {
        fontFamily: `'Inter', sans-serif`,
        h1: { fontWeight: 800 },
        h2: { fontWeight: 700 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 600 },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor:
                mode === 'light'
                  ? 'rgba(255,255,255,0.85)'
                  : 'rgba(15,23,42,0.85)',
              backdropFilter: 'blur(12px)',
              transition: 'background-color 0.3s ease',
              boxShadow:
                mode === 'light'
                  ? '0 1px 0 rgba(0,0,0,0.08)'
                  : '0 1px 0 rgba(255,255,255,0.06)',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 500,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: '12px',
            },
          },
        },
      },
      palette: {
        mode,
        primary: {
          main: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        background: {
          default: mode === 'light' ? '#f8fafc' : '#0f172a',
          paper: mode === 'light' ? '#ffffff' : '#1e293b',
        },
        text: {
          primary: mode === 'light' ? '#0f172a' : '#f1f5f9',
          secondary: mode === 'light' ? '#475569' : '#94a3b8',
        },
        divider: mode === 'light' ? '#e2e8f0' : '#334155',
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
