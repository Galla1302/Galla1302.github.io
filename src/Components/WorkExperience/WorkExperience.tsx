import React, { Ref } from 'react';
import { Box, Typography } from '@mui/material';
import { projects } from '../../data/projects';
import { ProjectItem } from './ProjectItem';

interface WorkExperienceProps {
  expRef: Ref<HTMLElement>;
}

export const WorkExperience = ({ expRef }: WorkExperienceProps) => {
  return (
    <Box ref={expRef} sx={{ height: 300 }}>
      <Typography variant="h2" textAlign="center">
        Work Experience
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '1rem',
          gap: 2,
        }}
      >
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </Box>
    </Box>
  );
};
