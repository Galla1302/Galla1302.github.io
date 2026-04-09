export interface SkillCategory {
  label: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    icon: '{ }',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'R', 'HTML5', 'CSS3', 'Sass'],
  },
  {
    label: 'Frameworks & Libraries',
    icon: '⚛',
    skills: ['React', 'Next.js', 'Node.js', 'Redux', 'Redux Saga', 'Express.js', 'GraphQL', 'Tailwind CSS'],
  },
  {
    label: 'UI & Components',
    icon: '🎨',
    skills: ['Material UI', 'Bootstrap', 'Ant Design', 'Storybook', 'AG Grid'],
  },
  {
    label: 'DevOps & Cloud',
    icon: '☁',
    skills: ['Kubernetes', 'OpenShift', 'Docker', 'Jenkins', 'AWS (S3, EC2, Lambda)', 'CI/CD'],
  },
  {
    label: 'Databases',
    icon: '🗄',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    label: 'Testing',
    icon: '✓',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Enzyme', 'Mocha', 'Chai'],
  },
];

// Keep legacy exports for backward compatibility
export const programmingLanguages = skillCategories[0].skills.map((name) => ({ name }));
export const frontEnd = skillCategories[1].skills.map((name) => ({ name }));
export const backEndAndDb = skillCategories[2].skills.map((name) => ({ name }));
