import { Box, Typography, useTheme } from '@mui/material';

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
        minHeight: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2026 Prasanth Galla. Built with React & MUI.
      </Typography>
    </Box>
  );
};
