import React from 'react';

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
  styled,
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
}

const LogoTitle = styled('h5')(
  ({ theme }) => `
    color: ${theme.palette.text.primary};
    display: inline-block;
`,
);

const StyledUl = styled('ul')(
  () => `
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin-right: 64px;
`,
);

const StyledLi = styled('li')(
  () => `
    float: left;
`,
);

export const NavBar = (props: NavBarProps) => {
  const { links } = props;

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
      position="static"
      sx={{
        backgroundColor: mode === 'dark' ? '#343a40' : '#f8f9fa',
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 10,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{
            marginLeft: { xs: 0, md: 8 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LogoTitle sx={{ display: { xs: 'none', md: 'block' } }}>
            Prasanth Galla
          </LogoTitle>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((link) => (
                <MenuItem
                  key={link.id}
                  onClick={() => {
                    handleCloseNavMenu();
                    link.onClick();
                  }}
                >
                  <Typography textAlign="center">{link.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Switch
            checked={mode === 'dark'}
            onChange={toggleTheme}
            color="default"
          />
          {mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <nav>
            <StyledUl>
              {links.map((el) => (
                <StyledLi key={`navigation-link-${el.id}`}>
                  <Button
                    sx={{
                      color: 'text.primary',
                      display: 'block',
                      padding: 1,
                      textDecoration: 'none',
                      textTransform: 'none',
                      margin: '0 0.5rem',
                    }}
                    onClick={el.onClick}
                  >
                    {el.label}
                  </Button>
                </StyledLi>
              ))}
            </StyledUl>
          </nav>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
