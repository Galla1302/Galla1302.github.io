import React, { useRef, useState, useEffect } from 'react';
import { Box, Fab, Zoom, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {
  IntroSection,
  NavBar,
  Skills,
  Footer,
  WorkExperience,
  Education,
  Contact,
} from '../../components';

export const HomePage = () => {
  const introRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<number>(1);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const theme = useTheme();

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = [
      { ref: introRef, id: 1 },
      { ref: skillsRef, id: 2 },
      { ref: educationRef, id: 3 },
      { ref: expRef, id: 4 },
      { ref: contactRef, id: 5 },
    ];

    sections.forEach(({ ref, id }) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 },
      );
      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Show scroll-to-top FAB after scrolling 300px
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationData = [
    {
      id: 1,
      label: 'About',
      onClick: () => {
        window.scrollTo({
          top: introRef?.current?.offsetTop && introRef?.current?.offsetTop - 50,
          behavior: 'smooth',
        });
      },
    },
    {
      id: 2,
      label: 'Skills',
      onClick: () => {
        window.scrollTo({
          top: skillsRef?.current?.offsetTop && skillsRef?.current?.offsetTop - 50,
          behavior: 'smooth',
        });
      },
    },
    {
      id: 3,
      label: 'Education',
      onClick: () => {
        window.scrollTo({
          top: educationRef?.current?.offsetTop && educationRef?.current?.offsetTop - 50,
          behavior: 'smooth',
        });
      },
    },
    {
      id: 4,
      label: 'Work Experience',
      onClick: () => {
        window.scrollTo({
          top: expRef?.current?.offsetTop && expRef?.current?.offsetTop - 50,
          behavior: 'smooth',
        });
      },
    },
    {
      id: 5,
      label: 'Contact',
      onClick: () => {
        window.scrollTo({
          top: contactRef?.current?.offsetTop && contactRef?.current?.offsetTop - 50,
          behavior: 'smooth',
        });
      },
    },
  ];

  return (
    <Box>
      <NavBar links={navigationData} activeSection={activeSection} />
      <IntroSection introRef={introRef} />
      <Skills skillsRef={skillsRef} />
      <Education educationRef={educationRef} />
      <WorkExperience expRef={expRef} />
      <Contact contactRef={contactRef} />
      <Footer />

      {/* Scroll-to-top FAB */}
      <Zoom in={showScrollTop}>
        <Fab
          size="small"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            boxShadow: '0 4px 14px rgba(99,102,241,0.4)',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
};
