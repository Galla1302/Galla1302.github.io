import React, { Ref } from 'react';
import { Box, Button, Typography } from '@mui/material';

import ProfileImage from '../../assets/profile_photo.png';
import { GitHub, TextSnippet, LinkedIn } from '@mui/icons-material';
import styled from '@emotion/styled';

interface IntroSectionProps {
  introRef: Ref<HTMLElement>;
}

const StyledButton = styled(Button)(
  () => `
    background-color: #24292e;
    color: #fff;
    padding: 0.625rem 1.25rem;
    text-transform: none;
    box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
    border-radius: 0.625rem;
    '&:hover': {
      background-color: #343a40;
    },
`,
);

export const IntroSection = ({ introRef }: IntroSectionProps) => {
  const onDownload = () => {
    const link = document.createElement('a');
    link.download = `Resume.pdf`;
    link.href = `${process.env.PUBLIC_URL}/FrontEndNew.pdf`;
    link.click();
  };

  return (
    <Box
      ref={introRef}
      sx={{
        display: 'flex',
        minHeight: 'calc(100vh - 4rem)',
        padding: '32px',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center',
        flexDirection: { md: 'row-reverse', xs: 'column-reverse' },
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <Box
        sx={{
          minWidth: { md: '31.25rem', xs: '9.375rem' },
          maxWidth: { xs: '9.375rem', md: '100%' },
          height: { md: '31.25rem', xs: '9.375rem' },
          borderRadius: '50%',
          overflow: 'hidden',
          position: { xs: 'absolute', md: 'relative' },
          marginRight: '1.25rem',
          top: { xs: '90px', md: '0' },
          right: { xs: 0 },
        }}
      >
        <img
          src={ProfileImage}
          alt="Prasanth Galla"
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            width: '100%',
            height: '100%',
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
        <Box sx={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <StyledButton
            variant="contained"
            color="primary"
            startIcon={<LinkedIn />}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/galla-prasanth/',
                '_blank',
              )
            }
          >
            Linkedln
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            startIcon={<GitHub />}
            onClick={() =>
              window.open('https://github.com/Galla1302', '_blank')
            }
          >
            GitHub
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            startIcon={<TextSnippet />}
            onClick={onDownload}
          >
            Resume
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};
