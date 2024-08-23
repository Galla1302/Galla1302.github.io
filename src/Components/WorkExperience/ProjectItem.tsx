import { Box, Typography } from '@mui/material';
import React from 'react';

type Props = {
  company: string;
  role: string;
  position: string;
};

export const ProjectItem = (props: Props) => {
  return (
    <Box sx={{ padding: 2, border: '1px solid #343a40', flex: 1 }}>
      <Typography>{props.company}</Typography>
      <Typography>{props.position}</Typography>
      <Typography>{props.role}</Typography>
    </Box>
  );
};
