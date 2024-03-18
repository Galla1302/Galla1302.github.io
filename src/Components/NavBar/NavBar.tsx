import React from 'react';

import { AppBar, Box, Link, Switch, Toolbar, styled } from '@mui/material';
import { useThemeContext } from '../../contexts/CustomThemeContext';

interface NavBarProps {
  links: { id: number; label: string; path: string }[];
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
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ marginLeft: 8 }}>
          <LogoTitle>Prasanth Galla</LogoTitle>
          <Switch
            checked={mode === 'dark'}
            onChange={toggleTheme}
            color="default"
          />
        </Box>
        <Box>
          <nav>
            <StyledUl>
              {links.map((el) => (
                <StyledLi key={`navigation-link-${el.id}`}>
                  <Link
                    sx={{
                      color: 'text.primary',
                      display: 'block',
                      padding: 1,
                      textDecoration: 'none',
                      margin: '0 8px',
                    }}
                    href={el.path}
                  >
                    {el.label}
                  </Link>
                </StyledLi>
              ))}
            </StyledUl>
          </nav>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
