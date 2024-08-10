import React from 'react';

import { Box, Typography } from '@mui/material';

import { Icon } from '../Icon';

type Props = {
  name: string;
};

export default function SkillItem({ name }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '8px',
        border: '1px solid #343a40',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px',
      }}
    >
      <Icon name={name} />
      <Typography>{name}</Typography>
    </Box>
  );
}
