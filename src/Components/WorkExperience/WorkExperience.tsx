import React, { Ref } from 'react';
import { Box, Typography } from '@mui/material';

interface WorkExperienceProps {
  expRef: Ref<HTMLElement>;
}

export const WorkExperience = ({ expRef }: WorkExperienceProps) => {
  return (
    <Box ref={expRef} sx={{ height: 300 }}>
      <Typography variant="h2">Work Experience</Typography>
    </Box>
  );
};
