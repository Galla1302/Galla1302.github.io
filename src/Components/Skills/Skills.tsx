import React, { Ref } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { frontEnd, programmingLanguages } from '../../data/skills';
import SkillItem from './SkillItem';

interface SkillsProps {
  skillsRef: Ref<HTMLElement>;
}

const StyledTitle = styled(Typography)(
  () => `
      text-align: center; 
  `,
);

export const Skills = ({ skillsRef }: SkillsProps) => {
  return (
    <Box ref={skillsRef} sx={{ height: 300 }}>
      <StyledTitle variant="h2">Skills</StyledTitle>
      <Typography variant="h5" textAlign="center">
        Programming Languages
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          gap: '16px',
          margin: '16px 0',
        }}
      >
        {programmingLanguages.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} />
        ))}
      </Box>
      <Typography variant="h5" textAlign="center">
        Front-end
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '16px',
        }}
      >
        {frontEnd.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} />
        ))}
      </Box>
    </Box>
  );
};
