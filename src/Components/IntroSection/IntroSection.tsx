import { Ref, useState, useEffect } from 'react';
import { Box, Button, Chip, Typography, useTheme } from '@mui/material';
import { TextSnippet, OpenInNew } from '@mui/icons-material';

interface IntroSectionProps {
  introRef: Ref<HTMLElement>;
}

const ROLES = [
  'Full Stack Developer',
  'React Engineer',
  'Node.js Developer',
  'Cloud & DevOps Enthusiast',
];

export const IntroSection = ({ introRef }: IntroSectionProps) => {
  const theme = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

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
        {/* Typing animation */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            mb: 2,
            minHeight: '1.5rem',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              letterSpacing: '0.05em',
              fontFamily: 'monospace',
            }}
          >
            {displayed}
          </Typography>
          <Box
            sx={{
              width: '2px',
              height: '1.1em',
              backgroundColor: theme.palette.primary.main,
              '@keyframes blink': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0 },
              },
              animation: 'blink 1s step-end infinite',
            }}
          />
        </Box>

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
            startIcon={<TextSnippet />}
            endIcon={<OpenInNew sx={{ fontSize: '0.85rem !important' }} />}
            onClick={onDownload}
            sx={{
              px: 3,
              py: 1.1,
              fontWeight: 600,
              boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
              '&:hover': { boxShadow: '0 6px 20px rgba(99,102,241,0.5)' },
            }}
          >
            Resume
          </Button>
        </Box>
      </Box>

      {/* Scroll-down hint */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          opacity: 0.45,
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(6px)' },
          },
          animation: 'bounce 1.8s ease-in-out infinite',
        }}
      >
        <Typography variant="caption" sx={{ letterSpacing: '0.08em', fontSize: '0.7rem' }}>
          scroll
        </Typography>
        <Box
          sx={{
            width: '1px',
            height: '36px',
            background: `linear-gradient(180deg, ${theme.palette.text.primary}, transparent)`,
          }}
        />
      </Box>

      {/* Wave divider — fills into Skills section background */}
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
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '60px' }}
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill={theme.palette.mode === 'light' ? '#f8fafc' : '#0f172a'}
          />
        </svg>
      </Box>
    </Box>
  );
};
