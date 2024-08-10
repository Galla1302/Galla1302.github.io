import React from 'react';

import { AppBar, Box, Button, Switch, Toolbar, styled } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
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

  const { toggleTheme, mode } = useThemeContext();

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
        <Box sx={{ marginLeft: 8, display: 'flex', alignItems: 'center' }}>
          <LogoTitle>Prasanth Galla</LogoTitle>
          <Switch
            checked={mode === 'dark'}
            onChange={toggleTheme}
            color="default"
          />
          {mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </Box>
        <Box>
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
                      margin: '0 8px',
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
