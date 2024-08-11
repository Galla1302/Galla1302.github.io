import { Box, Typography } from '@mui/material';
import React from 'react';
import { useThemeContext } from '../../contexts/CustomThemeContext';

export const Footer = () => {
  const { mode } = useThemeContext();
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: mode === 'dark' ? '#343a40' : '#f8f9fa',
          minHeight: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography>© 2024 Prasanth Galla</Typography>
      </Box>
    </footer>
  );
};
