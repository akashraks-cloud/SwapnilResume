import React, { useState } from 'react';
import { Box, Typography, Stack, Container, Card, CardContent, Chip, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ProjectsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.grey[800]} 50%, 
    ${theme.palette.background.default} 100%)`,
  padding: theme.spacing(8, 0),
  position: 'relative'
}));

const FlipCardContainer = styled(Box)<{ size: 'large' | 'medium' | 'small'; flipped: boolean }>(
  ({ theme, size, flipped }) => ({
    perspective: '1000px',
    height: size === 'large' ? '400px' : size === 'medium' ? '320px' : '280px',
    cursor: 'pointer',
    animation: `${fadeInScale} 0.6s ease-out`,
  })
);

const FlipCardInner = styled(Box)<{ flipped: boolean }>(
  ({ flipped }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  })
);

const ProjectCard = styled(Card)<{ side: 'front' | 'back' }>(
  ({ theme, side }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    background: side === 'front' 
      ? 'rgba(30, 41, 59, 0.8)' 
      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(139, 92, 246, 0.9))',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(148, 163, 184, 0.2)',
    borderRadius: theme.spacing(3),
    transition: 'all 0.4s ease',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
    transform: side === 'back' ? 'rotateY(180deg)' : 'rotateY(0deg)',
    '&:hover': {
      borderColor: theme.palette.primary.main,
      boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.4)',
    }
  })
);

const FlipIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  background: 'rgba(99, 102, 241, 0.8)',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '1rem',
  zIndex: 2,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(99, 102, 241, 1)',
    transform: 'scale(1.1)'
  }
}));

const ProjectIcon = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  color: 'white',
  marginBottom: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
}));

interface Project {
  title: string;
  client: string;
  duration: string;
  description: string;
  technologies: string[];
  impact: string[];
  size: 'large' | 'medium' | 'small';
  icon: string;
}

const ProjectPortfolio: React.FC = () => {
  const [flippedProjects, setFlippedProjects] = useState<Set<number>>(new Set());

  const handleCardFlip = (index: number) => {
    setFlippedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const projects: Project[] = [
    {
      title: 'Integrated Transport Management System',
      client: 'Hindustan Zinc Ltd, Vedanta Aluminium, Birla Corporation Ltd',
      duration: '2015 - Ongoing',
      description: 'Comprehensive IoT-enabled transport automation system with real-time tracking, sensor integration, and intelligent route optimization for industrial operations.',
      technologies: ['JSF 2', 'Primefaces 6', 'Apache Tomcat', 'REST APIs', 'JMS', 'IoT Sensors'],
      impact: [
        'Automated transport operations for 3 major industrial clients',
        'Integrated 50+ IoT sensors for real-time monitoring',
        'Reduced operational costs by 35%',
        'Improved delivery accuracy by 60%'
      ],
      size: 'large',
      icon: '🚛'
    },
    {
      title: 'Audit Report Processing System (ARPS)',
      client: 'State Bank of India',
      duration: '2011 - 2014',
      description: 'Enterprise-grade audit management system handling complex financial reporting, compliance tracking, and automated report generation for banking operations.',
      technologies: ['Java Struts 1.2', 'Oracle 10g', 'Jasper Reports', 'XML', 'Ajax'],
      impact: [
        'Processed 1M+ audit records efficiently',
        'Reduced report generation time by 70%',
        'Achieved 99.9% system uptime',
        'Streamlined compliance workflows'
      ],
      size: 'large',
      icon: '🏦'
    },
    {
      title: 'Supply Chain Optimization Platform',
      client: 'Multiple Industrial Clients',
      duration: '2018 - 2020',
      description: 'Advanced analytics platform for supply chain visibility, demand forecasting, and inventory optimization across multiple manufacturing facilities.',
      technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Apache Kafka', 'Machine Learning'],
      impact: [
        'Optimized inventory levels across 10+ facilities',
        'Reduced supply chain costs by 25%',
        'Improved demand forecasting accuracy by 40%'
      ],
      size: 'medium',
      icon: '📊'
    },
    {
      title: 'Real-time Logistics Dashboard',
      client: 'Birla Corporation',
      duration: '2019 - 2021',
      description: 'Interactive dashboard providing real-time visibility into logistics operations, vehicle tracking, and performance analytics.',
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'D3.js'],
      impact: [
        'Real-time tracking of 200+ vehicles',
        'Improved response time by 50%',
        'Enhanced operational visibility'
      ],
      size: 'medium',
      icon: '📱'
    },
    {
      title: 'Compliance Management System',
      client: 'Financial Services Sector',
      duration: '2016 - 2017',
      description: 'Automated compliance tracking and reporting system ensuring regulatory adherence across multiple financial products.',
      technologies: ['Java EE', 'Oracle', 'Spring Framework', 'REST APIs'],
      impact: [
        'Automated 80% of compliance processes',
        'Reduced compliance violations by 90%',
        'Streamlined audit preparations'
      ],
      size: 'small',
      icon: '⚖️'
    },
    {
      title: 'Employee Performance Analytics',
      client: 'Internal MNC Project',
      duration: '2020 - 2021',
      description: 'Data-driven platform for analyzing employee performance, skill development tracking, and career progression planning.',
      technologies: ['Python', 'React', 'PostgreSQL', 'Apache Spark', 'Tableau'],
      impact: [
        'Analyzed performance data for 1000+ employees',
        'Improved skill matching accuracy by 45%',
        'Enhanced career development planning'
      ],
      size: 'small',
      icon: '👥'
    }
  ];

  return (
    <ProjectsContainer>
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          <Box textAlign="center">
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Project Portfolio
            </Typography>
            <Typography variant="h5" sx={{ 
              color: 'text.secondary', 
              fontWeight: 400,
              fontFamily: 'Inter'
            }}>
              Transforming business challenges into innovative solutions
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              md: 'repeat(3, 1fr)' 
            },
            gridTemplateRows: { 
              xs: 'auto', 
              md: 'repeat(3, 1fr)' 
            },
            gap: 3,
            width: '100%',
            mt: 4,
            '& > :nth-of-type(1)': {
              gridColumn: { md: 'span 2' },
              gridRow: { md: 'span 2' }
            },
            '& > :nth-of-type(2)': {
              gridColumn: { md: 'span 1' },
              gridRow: { md: 'span 2' }
            }
          }}>
            {projects.map((project, index) => {
              const isFlipped = flippedProjects.has(index);
              
              return (
                <FlipCardContainer
                  key={index}
                  size={project.size}
                  flipped={isFlipped}
                  onClick={() => handleCardFlip(index)}
                >
                  <FlipCardInner flipped={isFlipped}>
                    {/* Front Side */}
                    <ProjectCard side="front">
                      <FlipIndicator>
                        <FlipCameraAndroidIcon sx={{ fontSize: '1rem' }} />
                      </FlipIndicator>
                      <CardContent sx={{ 
                        p: { xs: 2, md: 3 }, 
                        height: '100%', 
                        position: 'relative',
                        overflow: 'auto'
                      }}>
                        <Stack spacing={2} sx={{ height: '100%' }}>
                          <Box>
                            <ProjectIcon>
                              {project.icon}
                            </ProjectIcon>
                            <Typography variant="h5" sx={{ 
                              fontWeight: 600,
                              mb: 1,
                              lineHeight: 1.2,
                              fontSize: { xs: '1rem', md: '1.25rem' }
                            }}>
                              {project.title}
                            </Typography>
                            <Typography variant="body2" sx={{ 
                              color: 'primary.light',
                              fontWeight: 500,
                              mb: 0.5,
                              fontSize: { xs: '0.75rem', md: '0.875rem' }
                            }}>
                              {project.client}
                            </Typography>
                            <Typography variant="body2" sx={{ 
                              color: 'text.secondary',
                              mb: 2,
                              fontSize: { xs: '0.7rem', md: '0.875rem' }
                            }}>
                              {project.duration}
                            </Typography>
                          </Box>

                          <Typography variant="body2" sx={{ 
                            color: 'text.secondary',
                            lineHeight: 1.4,
                            flex: 1,
                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                            overflow: 'auto'
                          }}>
                            {project.description}
                          </Typography>

                          <Stack direction="row" spacing={1} sx={{ 
                            flexWrap: 'wrap', 
                            gap: 0.5,
                            '& .MuiChip-root': {
                              fontSize: { xs: '0.6rem', md: '0.75rem' },
                              height: { xs: '20px', md: '24px' }
                            }
                          }}>
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <Chip
                                key={i}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(99, 102, 241, 0.2)',
                                  color: 'primary.light'
                                }}
                              />
                            ))}
                            {project.technologies.length > 3 && (
                              <Chip
                                label={`+${project.technologies.length - 3}`}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                                  color: 'secondary.light'
                                }}
                              />
                            )}
                          </Stack>
                        </Stack>
                      </CardContent>
                    </ProjectCard>

                    {/* Back Side */}
                    <ProjectCard side="back">
                      <FlipIndicator>
                        <FlipCameraAndroidIcon sx={{ fontSize: '1rem' }} />
                      </FlipIndicator>
                      <CardContent sx={{ 
                        p: { xs: 2, md: 3 }, 
                        height: '100%', 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        overflow: 'auto'
                      }}>
                        <Typography variant="h6" sx={{ 
                          fontWeight: 600,
                          mb: 2,
                          color: 'white',
                          fontSize: { xs: '1rem', md: '1.25rem' }
                        }}>
                          Key Impact
                        </Typography>
                        <Stack spacing={1} sx={{ mb: 3, width: '100%', overflow: 'auto' }}>
                          {project.impact.map((impact, i) => (
                            <Typography key={i} variant="body2" sx={{ 
                              color: 'white',
                              display: 'flex',
                              alignItems: 'flex-start',
                              fontSize: { xs: '0.75rem', md: '0.875rem' },
                              lineHeight: 1.4,
                              '&::before': {
                                content: '"✓"',
                                marginRight: 1,
                                fontSize: '1rem',
                                flexShrink: 0
                              }
                            }}>
                              {impact}
                            </Typography>
                          ))}
                        </Stack>
                        <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                          <IconButton 
                            component="a"
                            href="https://github.com/akashraks-cloud"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                transform: 'scale(1.1)'
                              },
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <LaunchIcon />
                          </IconButton>
                          <IconButton 
                            component="a"
                            href="https://github.com/akashraks-cloud"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                transform: 'scale(1.1)'
                              },
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <CodeIcon />
                          </IconButton>
                        </Stack>
                      </CardContent>
                    </ProjectCard>
                  </FlipCardInner>
                </FlipCardContainer>
              );
            })}
          </Box>
        </Stack>
      </Container>
    </ProjectsContainer>
  );
};

export default ProjectPortfolio;