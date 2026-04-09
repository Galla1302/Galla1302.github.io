import { Box, Typography, useTheme } from '@mui/material';
import { Icon } from '../Icon';

type Props = {
  name: string;
};

export default function SkillItem({ name }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1rem 1.25rem',
        borderRadius: '12px',
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        boxShadow:
          theme.palette.mode === 'light'
            ? '0 1px 4px rgba(0,0,0,0.06)'
            : '0 1px 4px rgba(0,0,0,0.3)',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease',
        cursor: 'default',
        minWidth: '90px',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: theme.palette.primary.main,
          boxShadow:
            theme.palette.mode === 'light'
              ? '0 8px 24px rgba(99,102,241,0.15)'
              : '0 8px 24px rgba(99,102,241,0.25)',
        },
      }}
    >
      <Icon name={name} />
      <Typography
        variant="caption"
        sx={{
          mt: 0.75,
          fontWeight: 500,
          color: theme.palette.text.secondary,
          fontSize: '0.75rem',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
