import {
  Box,
  Typography,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CodeIcon from '@mui/icons-material/Code';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface Props {
  company: string;
  position: string;
  role: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  responsibilities: string[];
}

export const ProjectItem = (props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: { xs: 3, md: 4 } }}>
      {/* Header */}
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{ mb: 0.5, fontWeight: 800, color: theme.palette.text.primary }}
      >
        {props.company}
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <WorkIcon sx={{ fontSize: '0.9rem', color: theme.palette.primary.main }} />
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {props.position} · {props.role}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
          <CalendarTodayIcon sx={{ fontSize: '0.9rem', color: theme.palette.text.secondary }} />
          <Typography variant="body2" color="text.secondary">
            {props.startDate} — {props.endDate}
          </Typography>
        </Box>
      </Box>

      {/* Technologies */}
      {props.technologies.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1.5 }}>
            <CodeIcon sx={{ fontSize: '1rem', color: theme.palette.primary.main }} />
            <Typography variant="body2" fontWeight={600}>
              Technologies
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {props.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  borderRadius: '6px',
                  backgroundColor:
                    theme.palette.mode === 'light'
                      ? 'rgba(99,102,241,0.08)'
                      : 'rgba(99,102,241,0.18)',
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  border: `1px solid ${
                    theme.palette.mode === 'light'
                      ? 'rgba(99,102,241,0.2)'
                      : 'rgba(99,102,241,0.3)'
                  }`,
                }}
              />
            ))}
          </Box>
        </Box>
      )}

      {/* Responsibilities */}
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1.5 }}>
          <AssignmentIcon sx={{ fontSize: '1rem', color: theme.palette.primary.main }} />
          <Typography variant="body2" fontWeight={600}>
            Responsibilities
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {props.responsibilities.map((r, index) => (
            <Box key={index} sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
              <FiberManualRecordIcon
                sx={{
                  fontSize: '0.45rem',
                  mt: '0.55rem',
                  color: theme.palette.primary.main,
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary, lineHeight: 1.65 }}
              >
                {r}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
