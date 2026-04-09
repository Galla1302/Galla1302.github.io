import { Ref } from 'react';
import { Box, Button, Chip, Typography, useTheme } from '@mui/material';
import { GitHub, TextSnippet, LinkedIn, OpenInNew } from '@mui/icons-material';

interface IntroSectionProps {
  introRef: Ref<HTMLElement>;
}

export const IntroSection = ({ introRef }: IntroSectionProps) => {
  const theme = useTheme();

  const onDownload = () => {
    const link = document.createElement('a');
    link.download = `Resume.pdf`;
    link.href = `${process.env.PUBLIC_URL}/Resume.pdf`;
    link.click();
  };

  const highlights = [
    'React & Node.js',
    'Full Stack',
    'Kubernetes & OpenShift',
    'AI & Machine Learning',
    'MongoDB',
  ];

  return (
    <Box
      ref={introRef}
      sx={{
        display: 'flex',
        minHeight: 'calc(100vh - 64px)',
        padding: { xs: '48px 24px', md: '80px 80px' },
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            theme.palette.mode === 'light'
              ? 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box sx={{ maxWidth: '720px', width: '100%', zIndex: 1 }}>
        {/* Eyebrow */}
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          Full Stack Developer
        </Typography>

        {/* Heading */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.75rem' },
            lineHeight: 1.1,
            mb: 3,
            letterSpacing: '-1.5px',
          }}
        >
          Hi, I&apos;m{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Prasanth Galla
          </Box>
        </Typography>

        {/* Bio */}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: '1.05rem',
            lineHeight: 1.75,
            mb: 3,
            maxWidth: '620px',
          }}
        >
          Senior Full Stack Developer with{' '}
          <Box
            component="span"
            sx={{ color: theme.palette.text.primary, fontWeight: 500 }}
          >
            8+ years of experience
          </Box>{' '}
          architecting end-to-end web solutions. Hands-on expertise in
          Kubernetes and OpenShift for cloud-native deployments. M.S. in Data
          Science from the University at Buffalo.
        </Typography>

        {/* Highlight chips */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          {highlights.map((h) => (
            <Chip
              key={h}
              label={h}
              size="small"
              sx={{
                backgroundColor:
                  theme.palette.mode === 'light'
                    ? 'rgba(99,102,241,0.08)'
                    : 'rgba(99,102,241,0.18)',
                color: theme.palette.primary.main,
                fontWeight: 500,
                border: `1px solid ${
                  theme.palette.mode === 'light'
                    ? 'rgba(99,102,241,0.2)'
                    : 'rgba(99,102,241,0.35)'
                }`,
                borderRadius: '6px',
              }}
            />
          ))}
        </Box>

        {/* CTA buttons */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedIn />}
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/galla-prasanth/',
                '_blank',
              )
            }
            sx={{
              px: 3,
              py: 1.1,
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
              '&:hover': { boxShadow: '0 6px 20px rgba(99,102,241,0.5)' },
            }}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GitHub />}
            onClick={() =>
              window.open('https://github.com/Galla1302', '_blank')
            }
            sx={{ px: 3, py: 1.1, fontWeight: 600 }}
          >
            GitHub
          </Button>
          <Button
            variant="text"
            color="primary"
            startIcon={<TextSnippet />}
            endIcon={<OpenInNew sx={{ fontSize: '0.85rem !important' }} />}
            onClick={onDownload}
            sx={{ px: 2, py: 1.1, fontWeight: 600 }}
          >
            Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
