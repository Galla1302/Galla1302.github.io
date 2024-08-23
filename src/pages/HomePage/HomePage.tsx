import React, { useRef } from 'react';
import { Box } from '@mui/material';

import {
  IntroSection,
  NavBar,
  Skills,
  Footer,
  // WorkExperience,
} from '../../components';

export const HomePage = () => {
  const introRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  // const expRef = useRef<HTMLElement>(null);

  const navigationData = [
    {
      id: 1,
      label: 'About',
      onClick: () => {
        window.scrollTo({
          top:
            introRef?.current?.offsetTop && introRef?.current?.offsetTop - 50,
          behavior: 'smooth',
        });
      },
    },
    {
      id: 2,
      label: 'Skills',
      onClick: () => {
        window.scrollTo({
          top:
            skillsRef?.current?.offsetTop && skillsRef?.current?.offsetTop - 50,
          behavior: 'smooth',
        });
      },
    },
    // {
    //   id: 3,
    //   label: 'Work Experience',
    //   onClick: () => {
    //     window.scrollTo({
    //       top: expRef?.current?.offsetTop && expRef?.current?.offsetTop - 50,
    //       behavior: 'smooth',
    //     });
    //   },
    // },
  ];

  return (
    <Box>
      <NavBar links={navigationData} />
      <IntroSection introRef={introRef} />
      <Skills skillsRef={skillsRef} />
      {/* <WorkExperience expRef={expRef} /> */}
      <Footer />
    </Box>
  );
};
