import { useState } from 'react';
import { Box, Typography, Button, IconButton, Tooltip, useTheme } from '@mui/material';
import { LinkedIn, GitHub, Email, ContentCopy, Check } from '@mui/icons-material';

const EMAIL = 'gallaprashanth@gmail.com';

export const Contact = () => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 8, md: 10 },
        minHeight: 'calc(100vh - 8rem)',
        px: { xs: 3, md: 10 },
        textAlign: 'center',
      }}
    >
      {/* Header */}
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
        Let&apos;s connect
      </Typography>
      <Typography variant="h2" sx={{ letterSpacing: '-0.5px', mb: 2 }}>
        Get in Touch
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: theme.palette.text.secondary, maxWidth: '480px', margin: '0 auto', mb: 5, lineHeight: 1.75 }}
      >
        Open to new opportunities, collaborations, or just a chat about tech.
        Feel free to reach out.
      </Typography>

      {/* Email row */}
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: '12px',
          px: 2.5,
          py: 1.25,
          mb: 4,
        }}
      >
        <Email sx={{ fontSize: '1rem', color: theme.palette.primary.main }} />
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {EMAIL}
        </Typography>
        <Tooltip title={copied ? 'Copied!' : 'Copy email'} placement="top">
          <IconButton size="small" onClick={handleCopy} sx={{ ml: 0.5, color: theme.palette.text.secondary }}>
            {copied
              ? <Check sx={{ fontSize: '1rem', color: '#16a34a' }} />
              : <ContentCopy sx={{ fontSize: '1rem' }} />
            }
          </IconButton>
        </Tooltip>
      </Box>

      {/* Social buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkedIn />}
          onClick={() => window.open('https://www.linkedin.com/in/galla-prasanth/', '_blank')}
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
          onClick={() => window.open('https://github.com/Galla1302', '_blank')}
          sx={{ px: 3, py: 1.1, fontWeight: 600 }}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};
