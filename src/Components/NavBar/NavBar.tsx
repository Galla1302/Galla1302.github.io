import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeContext } from '../../contexts/CustomThemeContext';

interface NavBarProps {
  links: {
    id: number;
    label: string;
    onClick: () => void;
  }[];
  activeSection: number;
}

export const NavBar = ({ links, activeSection }: NavBarProps) => {
  const theme = useTheme();
  const { toggleTheme, mode } = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLink = (onClick: () => void) => {
    setMobileOpen(false);
    setTimeout(onClick, 200); // let drawer close first
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        width: '100%',
        zIndex: 10,
        color: theme.palette.text.primary,
        borderBottom: scrolled
          ? `1px solid ${theme.palette.divider}`
          : '1px solid transparent',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: scrolled
          ? theme.palette.mode === 'light'
            ? '0 2px 16px rgba(0,0,0,0.06)'
            : '0 2px 16px rgba(0,0,0,0.3)'
          : 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 }, minHeight: '64px' }}>

        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: '0.85rem',
                color: '#fff',
                letterSpacing: '-0.5px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              PG
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '0.95rem',
                color: theme.palette.text.primary,
                lineHeight: 1.2,
                letterSpacing: '-0.3px',
              }}
            >
              Prasanth Galla
            </Typography>
            <Typography
              sx={{
                fontSize: '0.7rem',
                color: theme.palette.text.secondary,
                letterSpacing: '0.04em',
              }}
            >
              Full Stack Developer
            </Typography>
          </Box>
        </Box>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
          {links.map((el) => (
            <Button
              key={`nav-${el.id}`}
              onClick={el.onClick}
              sx={{
                color: activeSection === el.id
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
                fontWeight: activeSection === el.id ? 600 : 400,
                fontSize: '0.88rem',
                px: 1.5,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 4,
                  left: '50%',
                  transform: activeSection === el.id
                    ? 'translateX(-50%) scaleX(1)'
                    : 'translateX(-50%) scaleX(0)',
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

          {/* Theme toggle */}
          <IconButton
            onClick={toggleTheme}
            size="small"
            sx={{
              ml: 1.5,
              color: theme.palette.text.secondary,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '8px',
              p: '6px',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                backgroundColor: 'rgba(99,102,241,0.06)',
              },
            }}
          >
            {mode === 'dark'
              ? <Brightness7Icon fontSize="small" />
              : <Brightness4Icon fontSize="small" />
            }
          </IconButton>
        </Box>

        {/* Mobile right side */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 0.5 }}>
          <IconButton
            onClick={toggleTheme}
            size="small"
            sx={{ color: theme.palette.text.secondary }}
          >
            {mode === 'dark'
              ? <Brightness7Icon fontSize="small" />
              : <Brightness4Icon fontSize="small" />
            }
          </IconButton>
          <IconButton
            onClick={() => setMobileOpen((o) => !o)}
            sx={{ color: theme.palette.text.primary }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile slide-down menu */}
      <Collapse in={mobileOpen} timeout={220}>
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            px: 2,
            pb: 2,
            backgroundColor: theme.palette.mode === 'light'
              ? 'rgba(255,255,255,0.97)'
              : 'rgba(15,23,42,0.97)',
          }}
        >
          <Divider sx={{ mb: 1 }} />
          {links.map((link) => (
            <Box
              key={link.id}
              onClick={() => handleMobileLink(link.onClick)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                py: 1.25,
                px: 1,
                borderRadius: '10px',
                cursor: 'pointer',
                backgroundColor: activeSection === link.id
                  ? 'rgba(99,102,241,0.08)'
                  : 'transparent',
                transition: 'background-color 0.15s ease',
                '&:hover': { backgroundColor: 'rgba(99,102,241,0.08)' },
              }}
            >
              <Typography
                sx={{
                  fontWeight: activeSection === link.id ? 600 : 500,
                  color: activeSection === link.id
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                  fontSize: '0.95rem',
                }}
              >
                {link.label}
              </Typography>
              {activeSection === link.id && (
                <Box
                  sx={{
                    ml: 'auto',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
};
