import React, { useState } from 'react';
import { Box, Typography, Stack, Container, Card, CardContent, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const TimelineContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  position: 'relative'
}));

const TimelineWrapper = styled(Box)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '4px',
    background: 'linear-gradient(180deg, #6366F1, #8B5CF6, #06B6D4)',
    transform: 'translateX(-50%)',
    borderRadius: '2px',
    boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
  }
});

const TimelineItem = styled(Box)<{ isLeft: boolean; index: number }>(({ theme, isLeft, index }) => ({
  display: 'flex',
  justifyContent: isLeft ? 'flex-end' : 'flex-start',
  width: '50%',
  marginLeft: isLeft ? 0 : '50%',
  marginBottom: theme.spacing(6),
  animation: `${isLeft ? slideInLeft : slideInRight} 0.8s ease-out ${index * 0.2}s both`,
  position: 'relative'
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: isLeft => isLeft ? 'calc(100% + 16px)' : '-28px',
  top: '24px',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  border: `4px solid ${theme.palette.background.default}`,
  boxShadow: `0 0 20px ${theme.palette.primary.main}60`,
  zIndex: 2
}));

const TimelineCard = styled(Card)<{ expanded: boolean }>(({ theme, expanded }) => ({
  background: 'rgba(30, 41, 59, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  transform: expanded ? 'scale(1.02)' : 'scale(1)',
  boxShadow: expanded 
    ? '0 25px 50px -12px rgba(99, 102, 241, 0.3)' 
    : '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'scale(1.02)',
    boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.3)'
  }
}));

interface ExperienceData {
  year: string;
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

const ExperienceTimeline: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const experiences: ExperienceData[] = [
    {
      year: '2024',
      title: 'Senior Technical Lead',
      company: 'Fortune 500 MNC',
      duration: '2020 - Present',
      description: [
        'Leading technical architecture for enterprise IoT solutions',
        'Managing cross-functional teams of 15+ developers',
        'Driving digital transformation initiatives for Fortune 500 clients'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'Microservices', 'AWS'],
      achievements: [
        'Delivered 5+ major projects worth $2M+',
        'Reduced system downtime by 40%',
        'Mentored 20+ junior developers'
      ]
    },
    {
      year: '2020',
      title: 'Technical Architect',
      company: 'Fortune 500 MNC',
      duration: '2017 - 2020',
      description: [
        'Designed scalable transport management systems',
        'Implemented IoT sensor integration solutions',
        'Led REST API development and third-party integrations'
      ],
      technologies: ['JSF 2', 'Primefaces', 'Apache Tomcat', 'JMS', 'Oracle'],
      achievements: [
        'Automated transport operations for 3 major clients',
        'Improved operational efficiency by 60%',
        'Successfully integrated 50+ IoT sensors'
      ]
    },
    {
      year: '2015',
      title: 'Senior Software Developer',
      company: 'Fortune 500 MNC',
      duration: '2014 - 2017',
      description: [
        'Developed comprehensive audit reporting systems',
        'Built scalable web applications using Java Struts',
        'Implemented Jasper Reports for business intelligence'
      ],
      technologies: ['Java Struts', 'Hibernate', 'Oracle 10g', 'Jasper Reports'],
      achievements: [
        'Delivered ARPS system for State Bank of India',
        'Processed 1M+ audit records efficiently',
        'Achieved 99.9% system uptime'
      ]
    },
    {
      year: '2011',
      title: 'Software Developer',
      company: 'Fortune 500 MNC',
      duration: '2011 - 2014',
      description: [
        'Started career in enterprise Java development',
        'Learned full-stack development practices',
        'Contributed to multiple banking sector projects'
      ],
      technologies: ['Java', 'JSP', 'HTML/CSS', 'JavaScript', 'SQL'],
      achievements: [
        'Successfully completed training programs',
        'Contributed to 3 major banking projects',
        'Earned recognition for code quality'
      ]
    }
  ];

  return (
    <TimelineContainer>
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          <Box textAlign="center">
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Professional Journey
            </Typography>
            <Typography variant="h5" sx={{ 
              color: 'text.secondary', 
              fontWeight: 400,
              fontFamily: 'Inter'
            }}>
              14+ years of continuous growth and innovation
            </Typography>
          </Box>

          <TimelineWrapper sx={{ width: '100%', mt: 4 }}>
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isExpanded = expandedItem === index;
              
              return (
                <TimelineItem 
                  key={index} 
                  isLeft={isLeft} 
                  index={index}
                  sx={{ pr: isLeft ? 4 : 0, pl: isLeft ? 0 : 4 }}
                >
                  <TimelineDot sx={{ 
                    left: isLeft ? 'calc(100% + 16px)' : '-28px' 
                  }} />
                  
                  <TimelineCard
                    expanded={isExpanded}
                    onClick={() => setExpandedItem(isExpanded ? null : index)}
                    sx={{ maxWidth: '400px', width: '100%' }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={2}>
                        <Box>
                          <Typography variant="h6" sx={{ 
                            color: 'primary.main',
                            fontWeight: 700,
                            fontSize: '2rem'
                          }}>
                            {exp.year}
                          </Typography>
                          <Typography variant="h5" sx={{ 
                            fontWeight: 600,
                            mb: 0.5
                          }}>
                            {exp.title}
                          </Typography>
                          <Typography variant="body1" sx={{ 
                            color: 'secondary.main',
                            fontWeight: 500
                          }}>
                            {exp.company}
                          </Typography>
                          <Typography variant="body2" sx={{ 
                            color: 'text.secondary'
                          }}>
                            {exp.duration}
                          </Typography>
                        </Box>

                        <Stack spacing={1}>
                          {exp.description.map((desc, i) => (
                            <Typography key={i} variant="body2" sx={{ 
                              color: 'text.secondary',
                              display: 'flex',
                              alignItems: 'flex-start',
                              '&::before': {
                                content: '"•"',
                                color: 'primary.main',
                                marginRight: 1,
                                fontSize: '1.2rem'
                              }
                            }}>
                              {desc}
                            </Typography>
                          ))}
                        </Stack>

                        {isExpanded && (
                          <>
                            <Box>
                              <Typography variant="body2" sx={{ 
                                fontWeight: 600,
                                mb: 1,
                                color: 'text.primary'
                              }}>
                                Technologies:
                              </Typography>
                              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                {exp.technologies.map((tech, i) => (
                                  <Chip
                                    key={i}
                                    label={tech}
                                    size="small"
                                    sx={{
                                      backgroundColor: 'rgba(99, 102, 241, 0.2)',
                                      color: 'primary.light',
                                      border: '1px solid rgba(99, 102, 241, 0.3)'
                                    }}
                                  />
                                ))}
                              </Stack>
                            </Box>

                            <Box>
                              <Typography variant="body2" sx={{ 
                                fontWeight: 600,
                                mb: 1,
                                color: 'text.primary'
                              }}>
                                Key Achievements:
                              </Typography>
                              <Stack spacing={0.5}>
                                {exp.achievements.map((achievement, i) => (
                                  <Typography key={i} variant="body2" sx={{ 
                                    color: 'success.light',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    '&::before': {
                                      content: '"✓"',
                                      color: 'success.main',
                                      marginRight: 1,
                                      fontSize: '1rem'
                                    }
                                  }}>
                                    {achievement}
                                  </Typography>
                                ))}
                              </Stack>
                            </Box>
                          </>
                        )}
                      </Stack>
                    </CardContent>
                  </TimelineCard>
                </TimelineItem>
              );
            })}
          </TimelineWrapper>
        </Stack>
      </Container>
    </TimelineContainer>
  );
};

export default ExperienceTimeline;