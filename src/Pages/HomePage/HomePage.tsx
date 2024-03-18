import { Button, Container, Typography } from '@mui/material';
import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Prasanth Galla
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Data Scientist & React Developer
      </Typography>
      <Button variant="contained" color="primary" href="/projects">
        View Projects
      </Button>
      <Button variant="outlined" color="primary" href="/resume.pdf">
        Download Resume
      </Button>
    </Container>
  );
};
