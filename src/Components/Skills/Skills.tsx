import React, { Ref } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import {
  backEndAndDb,
  frontEnd,
  programmingLanguages,
} from '../../data/skills';
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
    <Box ref={skillsRef} sx={{ minHeight: 'calc(100vh - 60.25rem)' }}>
      <StyledTitle variant="h2">Skills</StyledTitle>
      <Typography variant="h5" textAlign="center">
        Programming Languages
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignContent: 'center',
          justifyContent: 'center',
          gap: '1rem',
          margin: '1rem 0',
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
          flexFlow: 'row wrap',
          alignContent: 'center',
          justifyContent: 'center',
          gap: '1rem',
          margin: '1rem 0',
        }}
      >
        {frontEnd.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} />
        ))}
      </Box>
      <Typography variant="h5" textAlign="center">
        Back-end and Databases
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignContent: 'center',
          justifyContent: 'center',
          gap: '1rem',
          margin: '1rem 0',
        }}
      >
        {backEndAndDb.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} />
        ))}
      </Box>
    </Box>
  );
};
