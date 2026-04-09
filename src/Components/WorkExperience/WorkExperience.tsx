import React, { Ref, useState } from 'react';
import {
  Box, Typography, Chip, Modal, IconButton, useTheme, useMediaQuery,
} from '@mui/material';
import { projects } from '../../data/projects';
import { ProjectItem } from './ProjectItem';
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <Box
      ref={expRef}
      sx={{
        backgroundColor: theme.palette.mode === 'light' ? '#f1f5f9' : '#0a1628',
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

      {/* Timeline */}
      <Box sx={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: 'absolute',
            left: isMobile ? '16px' : '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: `linear-gradient(180deg, ${theme.palette.primary.main}, transparent)`,
            transform: isMobile ? 'none' : 'translateX(-50%)',
            opacity: 0.3,
          }}
        />

        {projects.map((project, idx) => {
          const accent = companyAccent[project.company] ?? theme.palette.primary.main;
          const isLeft = !isMobile && idx % 2 === 0;

          return (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: isMobile
                  ? 'flex-start'
                  : isLeft
                  ? 'flex-start'
                  : 'flex-end',
                mb: 5,
                position: 'relative',
                pl: isMobile ? '44px' : 0,
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: isMobile ? '10px' : '50%',
                  top: '20px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: accent,
                  border: `2px solid ${theme.palette.background.default}`,
                  transform: isMobile ? 'none' : 'translateX(-50%)',
                  zIndex: 1,
                  boxShadow: `0 0 0 3px ${accent}33`,
                }}
              />

              {/* Card */}
              <Box
                onClick={() => setSelectedProject(project)}
                sx={{
                  width: isMobile ? '100%' : '44%',
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderLeft: `3px solid ${accent}`,
                  borderRadius: '12px',
                  p: 2.5,
                  cursor: 'pointer',
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow:
                      theme.palette.mode === 'light'
                        ? '0 10px 32px rgba(0,0,0,0.1)'
                        : '0 10px 32px rgba(0,0,0,0.4)',
                  },
                }}
              >
                {/* Company + badge */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: accent }}>
                    {project.company}
                  </Typography>
                  {project.endDate === 'Present' && (
                    <Chip
                      label="Current"
                      size="small"
                      sx={{
                        height: '18px',
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        backgroundColor: 'rgba(34,197,94,0.12)',
                        color: '#16a34a',
                        border: '1px solid rgba(34,197,94,0.3)',
                        borderRadius: '4px',
                      }}
                    />
                  )}
                </Box>

                <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary, mb: 0.25 }}>
                  {project.role}
                </Typography>
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontStyle: 'italic', display: 'block', mb: 1.5 }}>
                  {project.position}
                </Typography>

                {/* Tech chips */}
                {project.technologies.length > 0 && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: '0.65rem',
                          height: '20px',
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
                    {project.technologies.length > 3 && (
                      <Chip
                        label={`+${project.technologies.length - 3}`}
                        size="small"
                        sx={{
                          fontSize: '0.65rem',
                          height: '20px',
                          backgroundColor: theme.palette.divider,
                          color: theme.palette.text.secondary,
                          borderRadius: '4px',
                        }}
                      />
                    )}
                  </Box>
                )}

                {/* Date + expand */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                    {project.startDate} — {project.endDate}
                  </Typography>
                  <OpenInNewIcon sx={{ fontSize: '0.8rem', color: theme.palette.text.secondary }} />
                </Box>
              </Box>
            </Box>
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
