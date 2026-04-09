import { Ref } from 'react';
import { Box, Chip, Typography, useTheme } from '@mui/material';
import { skillCategories } from '../../data/skills';

interface SkillsProps {
  skillsRef: Ref<HTMLElement>;
}

export const Skills = ({ skillsRef }: SkillsProps) => {
  const theme = useTheme();
  return (
    <Box
      ref={skillsRef}
      sx={{
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 10 },
      }}
    >
      {/* Section header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
          What I work with
        </Typography>
        <Typography variant="h2" sx={{ letterSpacing: '-0.5px' }}>
          Skills
        </Typography>
      </Box>

      {/* Category grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 3,
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {skillCategories.map((cat) => (
          <Box
            key={cat.label}
            sx={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '14px',
              p: 3,
              transition: 'box-shadow 0.2s ease',
              '&:hover': {
                boxShadow:
                  theme.palette.mode === 'light'
                    ? '0 8px 32px rgba(99,102,241,0.1)'
                    : '0 8px 32px rgba(99,102,241,0.2)',
              },
            }}
          >
            {/* Card header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0,
                  color: '#fff',
                  fontWeight: 700,
                  fontFamily: 'monospace',
                }}
              >
                {cat.icon}
              </Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, color: theme.palette.text.primary }}
              >
                {cat.label}
              </Typography>
            </Box>

            {/* Skill chips */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {cat.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    backgroundColor:
                      theme.palette.mode === 'light'
                        ? '#f1f5f9'
                        : 'rgba(255,255,255,0.06)',
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    '&:hover': {
                      backgroundColor:
                        theme.palette.mode === 'light'
                          ? 'rgba(99,102,241,0.1)'
                          : 'rgba(99,102,241,0.2)',
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Wave into Education (same default bg, subtle inverse wave) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          lineHeight: 0,
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px' }}>
          <path
            d="M0,25 C480,50 960,0 1440,25 L1440,50 L0,50 Z"
            fill={theme.palette.mode === 'light' ? '#f1f5f9' : '#0a1628'}
          />
        </svg>
      </Box>
    </Box>
  );
};
