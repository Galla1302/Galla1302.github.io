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

// Group consecutive projects by company
type Project = (typeof projects)[0];
interface CompanyGroup {
  company: string;
  accent: string;
  spanStart: string;
  spanEnd: string;
  roles: Project[];
}

function groupByCompany(list: Project[]): CompanyGroup[] {
  const groups: CompanyGroup[] = [];
  for (const project of list) {
    const last = groups[groups.length - 1];
    if (last && last.company === project.company) {
      last.roles.push(project);
      // earliest start date
      last.spanStart = project.startDate;
    } else {
      groups.push({
        company: project.company,
        accent: companyAccent[project.company] ?? '#6366f1',
        spanStart: project.startDate,
        spanEnd: project.endDate,
        roles: [project],
      });
    }
  }
  return groups;
}

function RoleCard({
  project,
  accent,
  onClick,
}: {
  project: Project;
  accent: string;
  onClick: () => void;
}) {
  const theme = useTheme();
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderLeft: `3px solid ${accent}`,
        borderRadius: '10px',
        p: 2,
        cursor: 'pointer',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow:
            theme.palette.mode === 'light'
              ? '0 8px 24px rgba(0,0,0,0.08)'
              : '0 8px 24px rgba(0,0,0,0.35)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 700, color: theme.palette.text.primary, lineHeight: 1.3 }}>
            {project.role}
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontStyle: 'italic' }}>
            {project.position}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexShrink: 0, ml: 1 }}>
          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 500, whiteSpace: 'nowrap' }}>
            {project.startDate} – {project.endDate}
          </Typography>
          <OpenInNewIcon sx={{ fontSize: '0.75rem', color: theme.palette.text.secondary }} />
        </Box>
      </Box>

      {project.technologies.length > 0 && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
          {project.technologies.slice(0, 4).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                fontSize: '0.62rem',
                height: '18px',
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
                fontSize: '0.62rem',
                height: '18px',
                backgroundColor: theme.palette.divider,
                color: theme.palette.text.secondary,
                borderRadius: '4px',
              }}
            />
          )}
        </Box>
      )}
    </Box>
  );
}

export const WorkExperience = ({ expRef }: WorkExperienceProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const groups = groupByCompany(projects);

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
      <Box sx={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: 'absolute',
            left: isMobile ? '18px' : '22px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: `linear-gradient(180deg, ${theme.palette.primary.main}, transparent)`,
            opacity: 0.25,
          }}
        />

        {groups.map((group, gIdx) => {
          const isMultiRole = group.roles.length > 1;

          return (
            <Box key={gIdx} sx={{ mb: 5, pl: isMobile ? '44px' : '52px', position: 'relative' }}>
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: isMobile ? '11px' : '14px',
                  top: '18px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: group.accent,
                  border: `2px solid ${theme.palette.mode === 'light' ? '#f1f5f9' : '#0a1628'}`,
                  zIndex: 1,
                  boxShadow: `0 0 0 3px ${group.accent}44`,
                }}
              />

              {/* Company header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: group.accent }}>
                  {group.company}
                </Typography>
                {group.roles[0].endDate === 'Present' && (
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
                {isMultiRole && (
                  <Typography
                    variant="caption"
                    sx={{
                      ml: 'auto',
                      color: theme.palette.text.secondary,
                      fontWeight: 600,
                      backgroundColor:
                        theme.palette.mode === 'light'
                          ? 'rgba(0,0,0,0.05)'
                          : 'rgba(255,255,255,0.07)',
                      px: 1,
                      py: 0.25,
                      borderRadius: '6px',
                    }}
                  >
                    {group.spanStart} – {group.spanEnd} · 7 yrs
                  </Typography>
                )}
                {!isMultiRole && (
                  <Typography variant="caption" sx={{ ml: 'auto', color: theme.palette.text.secondary }}>
                    {group.spanStart} – {group.spanEnd}
                  </Typography>
                )}
              </Box>

              {/* Single role — plain card */}
              {!isMultiRole && (
                <RoleCard
                  project={group.roles[0]}
                  accent={group.accent}
                  onClick={() => setSelectedProject(group.roles[0])}
                />
              )}

              {/* Multi-role — bracket group */}
              {isMultiRole && (
                <Box
                  sx={{
                    border: `1px solid ${group.accent}55`,
                    borderRadius: '12px',
                    p: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    backgroundColor:
                      theme.palette.mode === 'light'
                        ? `${group.accent}06`
                        : `${group.accent}10`,
                  }}
                >
                  {/* Career progression label */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: group.accent,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      px: 0.5,
                    }}
                  >
                    Career progression
                  </Typography>

                  {group.roles.map((role, rIdx) => (
                    <RoleCard
                      key={rIdx}
                      project={role}
                      accent={group.accent}
                      onClick={() => setSelectedProject(role)}
                    />
                  ))}
                </Box>
              )}
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
