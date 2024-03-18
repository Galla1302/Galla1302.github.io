import React from 'react';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import projectsData from '../../Data/projects';

export const ProjectsPage: React.FC = () => {
  return (
    <div style={{ margin: '20px' }}>
      <Typography variant="h3" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projectsData.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardActionArea href={project.demoUrl} target="_blank">
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.demoUrl} target="_blank">
                  Live Demo
                </Button>
                <Button size="small" color="primary" href={project.githubUrl} target="_blank">
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
