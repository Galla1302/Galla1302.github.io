import { Ref } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

interface EducationProps {
  educationRef: Ref<HTMLElement>;
}

const degrees = [
  {
    degree: 'Master of Science, Data Science',
    institution: 'University at Buffalo, SUNY',
    period: 'Aug 2023 – Dec 2024',
    detail: 'Focused on AI, Machine Learning, and statistical modelling.',
  },
  {
    degree: 'Bachelor of Technology, Electronics & Communications',
    institution: 'Vellore Institute of Technology',
    period: 'Jul 2012 – May 2016',
    detail: 'Foundation in engineering fundamentals and embedded systems.',
  },
];

export const Education = ({ educationRef }: EducationProps) => {
  const theme = useTheme();

  return (
    <Box
      ref={educationRef}
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 10 },
      }}
    >
      {/* Section header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
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
          Academic Background
        </Typography>
        <Typography variant="h2" sx={{ letterSpacing: '-0.5px' }}>
          Education
        </Typography>
      </Box>

      {/* Degree cards */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {degrees.map((edu, idx) => (
          <Box
            key={idx}
            sx={{
              flex: 1,
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderTop: `3px solid ${theme.palette.primary.main}`,
              borderRadius: '14px',
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              transition: 'box-shadow 0.2s ease',
              '&:hover': {
                boxShadow:
                  theme.palette.mode === 'light'
                    ? '0 8px 32px rgba(99,102,241,0.1)'
                    : '0 8px 32px rgba(99,102,241,0.2)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <SchoolIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
              <Typography
                variant="caption"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {edu.period}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
              {edu.degree}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
              {edu.institution}
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 0.5 }}>
              {edu.detail}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
