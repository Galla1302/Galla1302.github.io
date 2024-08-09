import React, { Ref } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';

import ProfileImage from '../../assets/profile_photo.png';
import IntroBgImage from '../../assets/intro_bg.jpg';
import { GitHub, TextSnippet } from '@mui/icons-material';
import styled from '@emotion/styled';

interface IntroSectionProps {
  introRef: Ref<HTMLElement>;
}

const StyledButton = styled(Button)(
  () => `
    background-color: #24292e;
    color: #fff;
    padding: 10px 20px;
    text-transform: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    '&:hover': {
      background-color: #343a40;
    },
`,
);

export const IntroSection = ({ introRef }: IntroSectionProps) => {
  return (
    <Box
      ref={introRef}
      sx={{
        display: 'flex',
        minHeight: 'calc(100vh - 64px)',
        padding: '32px',
        justifyContent: 'center',
        gap: '16px',
        alignItems: 'center',
        backgroundImage: `url(${IntroBgImage})`,
        flexDirection: 'row-reverse',
      }}
    >
      <Box
        sx={{
          minWidth: '500px',
          height: '500px',
          borderRadius: '50%',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          marginRight: '20px',
        }}
      >
        <Avatar
          src={ProfileImage}
          alt="Prasanth Galla"
          sx={{
            width: '100%',
            height: '100%',
            '& img': {
              objectFit: 'cover',
              objectPosition: 'top center',
            },
          }}
        />
      </Box>
      <Box>
        <Typography variant="h1">
          Hi
          <br />I am Prasanth Galla
        </Typography>
        <Typography>
          With 7 years of experience in web application development as a
          front-end developer, including more than 4 years specialising in
          ReactJS, I possess extensive expertise in constructing web
          applications using prominent frontend technologies such as
          <b> HTML, CSS3, JavaScript, TypeScript, ReactJS, and Node.js.</b>
          Currently, I am pursuing a master&apos;s in Data Science at the
          University at Buffalo, where I am deepening my knowledge in AI and
          Machine Learning technologies, further expanding my technical skill
          set and aligning my career with cutting-edge advancements in the
          field.
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <StyledButton
            variant="contained"
            color="primary"
            startIcon={<GitHub />}
          >
            GitHub
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            startIcon={<TextSnippet />}
          >
            Resume
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};