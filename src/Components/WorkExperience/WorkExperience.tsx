import React, { Ref, useState } from 'react';
import { Box, Typography, Card, CardContent, Chip, Modal, IconButton, useTheme } from '@mui/material';
import { projects } from '../../data/projects';
import { ProjectItem } from './ProjectItem';
import BusinessIcon from '@mui/icons-material/Business';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';

interface WorkExperienceProps {
  expRef: Ref<HTMLElement>;
}

const companyAccent: Record<string, string> = {
  Capgemini: '#0070ad',
  Cognizant: '#1a5276',
};

export const WorkExperience = ({ expRef }: WorkExperienceProps) => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <Box
      ref={expRef}
      sx={{
        backgroundColor:
          theme.palette.mode === 'light' ? '#f1f5f9' : '#0a1628',
        minHeight: 'calc(100vh - 8rem)',
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
          Career
        </Typography>
        <Typography variant="h2" sx={{ letterSpacing: '-0.5px' }}>
          Work Experience
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(auto-fit, minmax(320px, 1fr))' },
          gap: 3,
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {projects.map((project, idx) => {
          const accent = companyAccent[project.company] ?? theme.palette.primary.main;
          return (
            <Card
              key={idx}
              onClick={() => setSelectedProject(project)}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                borderTop: `3px solid ${accent}`,
                backgroundColor: theme.palette.background.paper,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow:
                    theme.palette.mode === 'light'
                      ? '0 12px 40px rgba(0,0,0,0.1)'
                      : '0 12px 40px rgba(0,0,0,0.4)',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Company row */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                  <BusinessIcon sx={{ fontSize: '1rem', color: accent }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: accent }}>
                    {project.company}
                  </Typography>
                  {project.endDate === 'Present' && (
                    <Chip
                      label="Current"
                      size="small"
                      sx={{
                        height: '20px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        backgroundColor: 'rgba(34,197,94,0.12)',
                        color: '#16a34a',
                        border: '1px solid rgba(34,197,94,0.3)',
                        borderRadius: '4px',
                        ml: 'auto',
                      }}
                    />
                  )}
                </Box>

                {/* Position */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 0.5 }}
                >
                  {project.role}
                </Typography>

                {/* Sub-position/client */}
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, mb: 2, fontStyle: 'italic' }}
                >
                  {project.position}
                </Typography>

                {/* Tech chips (first 4) */}
                {project.technologies.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          height: '22px',
                          backgroundColor:
                            theme.palette.mode === 'light'
                              ? 'rgba(99,102,241,0.08)'
                              : 'rgba(99,102,241,0.18)',
                          color: theme.palette.primary.main,
                          borderRadius: '4px',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                    {project.technologies.length > 4 && (
                      <Chip
                        label={`+${project.technologies.length - 4}`}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          height: '22px',
                          backgroundColor: theme.palette.divider,
                          color: theme.palette.text.secondary,
                          borderRadius: '4px',
                        }}
                      />
                    )}
                  </Box>
                )}

                {/* Date + expand hint */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 'auto',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}
                  >
                    {project.startDate} — {project.endDate}
                  </Typography>
                  <OpenInNewIcon
                    sx={{ fontSize: '0.85rem', color: theme.palette.text.secondary }}
                  />
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      {/* Modal */}
      <Modal
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        aria-labelledby="project-modal-title"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '92%', md: '80%' },
            maxWidth: 680,
            bgcolor: 'background.paper',
            borderRadius: '16px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
            p: 0,
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          <IconButton
            onClick={() => setSelectedProject(null)}
            size="small"
            sx={{
              position: 'sticky',
              top: 8,
              float: 'right',
              mr: 1,
              mt: 1,
              zIndex: 1,
              color: theme.palette.text.secondary,
              '&:hover': { color: theme.palette.text.primary },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          {selectedProject && <ProjectItem {...selectedProject} />}
        </Box>
      </Modal>
    </Box>
  );
};
