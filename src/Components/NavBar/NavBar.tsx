import React from 'react';

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useThemeContext } from '../../contexts/CustomThemeContext';

interface NavBarProps {
  links: {
    id: number;
    label: string;
    onClick: () => void;
  }[];
  activeSection: number;
}

export const NavBar = (props: NavBarProps) => {
  const { links, activeSection } = props;
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const { toggleTheme, mode } = useThemeContext();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        width: '100%',
        zIndex: 10,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.5px',
          }}
        >
          PG
        </Typography>

        {/* Desktop nav */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          {links.map((el) => (
            <Button
              key={`nav-${el.id}`}
              onClick={el.onClick}
              sx={{
                color: activeSection === el.id
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
                fontWeight: activeSection === el.id ? 600 : 500,
                fontSize: '0.9rem',
                px: 1.5,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 4,
                  left: '50%',
                  transform: activeSection === el.id ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                  width: '60%',
                  height: '2px',
                  borderRadius: '1px',
                  backgroundColor: theme.palette.primary.main,
                  transition: 'transform 0.2s ease',
                },
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: 'transparent',
                },
              }}
            >
              {el.label}
            </Button>
          ))}
          <IconButton
            onClick={toggleTheme}
            size="small"
            sx={{
              ml: 1,
              color: theme.palette.text.secondary,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '8px',
              p: '6px',
              '&:hover': { color: theme.palette.primary.main },
            }}
          >
            {mode === 'dark' ? (
              <Brightness7Icon fontSize="small" />
            ) : (
              <Brightness4Icon fontSize="small" />
            )}
          </IconButton>
        </Box>

        {/* Mobile: hamburger + theme toggle */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
          <IconButton
            onClick={toggleTheme}
            size="small"
            sx={{ color: theme.palette.text.secondary }}
          >
            {mode === 'dark' ? (
              <Brightness7Icon fontSize="small" />
            ) : (
              <Brightness4Icon fontSize="small" />
            )}
          </IconButton>
          <IconButton
            size="large"
            onClick={handleOpenNavMenu}
            sx={{ color: theme.palette.text.primary }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            PaperProps={{
              sx: {
                mt: 1,
                borderRadius: '10px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                minWidth: 160,
              },
            }}
          >
            {links.map((link) => (
              <MenuItem
                key={link.id}
                onClick={() => {
                  handleCloseNavMenu();
                  link.onClick();
                }}
                sx={{ py: 1.2 }}
              >
                <Typography fontWeight={500}>{link.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
