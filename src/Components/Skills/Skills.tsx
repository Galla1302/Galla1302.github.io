import React, { Ref } from 'react';
import { Box, Typography } from '@mui/material';

interface SkillsProps {
  skillsRef: Ref<HTMLElement>;
}

export const Skills = ({ skillsRef }: SkillsProps) => {
  return (
    <Box ref={skillsRef} sx={{ height: 300 }}>
      <Typography variant="h2">Skills</Typography>
    </Box>
  );
};
