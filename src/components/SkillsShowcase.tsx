import React, { useState } from 'react';
import { Box, Typography, Stack, Container, Card, CardContent } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import DatasetLinkedOutlinedIcon from '@mui/icons-material/DatasetLinkedOutlined';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const SkillsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(180deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.grey[800]} 50%, 
    ${theme.palette.background.default} 100%)`,
  padding: theme.spacing(8, 0),
  position: 'relative'
}));

const FloatingSkillCard = styled(Card)<{ delay: number; hovered: boolean }>(({ theme, delay, hovered }) => ({
  background: 'rgba(30, 41, 59, 0.6)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  animation: `${float} 3s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  transform: hovered ? 'translateY(-20px) scale(1.05)' : 'translateY(0) scale(1)',
  boxShadow: hovered 
    ? '0 25px 50px -12px rgba(99, 102, 241, 0.4)' 
    : '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2)
  },
  '&:hover': {
    borderColor: theme.palette.primary.main,
    background: 'rgba(99, 102, 241, 0.1)',
  }
}));

const SkillIcon = styled(Box)<{ hovered: boolean }>(({ theme, hovered }) => ({
  fontSize: '5rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  animation: hovered ? `${pulse} 0.6s ease-in-out` : 'none',
  transition: 'all 0.3s ease',
  '& .MuiSvgIcon-root': {
    fontSize: '5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem'
    }
  },
  '&:hover': {
    color: theme.palette.primary.light,
    transform: 'scale(1.1)'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '4rem'
  }
}));

const ProgressBar = styled(Box)<{ progress: number; animated: boolean }>(({ theme, progress, animated }) => ({
  width: '100%',
  height: '8px',
  backgroundColor: 'rgba(148, 163, 184, 0.2)',
  borderRadius: '4px',
  overflow: 'hidden',
  marginTop: theme.spacing(2),
  '&::after': {
    content: '""',
    display: 'block',
    height: '100%',
    width: animated ? `${progress}%` : '0%',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '4px',
    transition: 'width 1s ease-out',
    boxShadow: `0 0 10px ${theme.palette.primary.main}40`
  }
}));

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  description: string;
}

const SkillsShowcase: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [animateProgress, setAnimateProgress] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setAnimateProgress(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills: Skill[] = [
    {
      name: 'Java & Spring Boot',
      level: 95,
      icon: <LocalCafeOutlinedIcon />,
      description: '14+ years of enterprise Java development'
    },
    {
      name: 'React & React Native',
      level: 85,
      icon: <TripOriginOutlinedIcon />,
      description: 'Modern frontend development with React ecosystem'
    },
    {
      name: 'JavaScript & TypeScript',
      level: 90,
      icon: <JavascriptOutlinedIcon />,
      description: 'Advanced JavaScript and TypeScript programming'
    },
    {
      name: 'Database Systems',
      level: 90,
      icon: <DnsOutlinedIcon />,
      description: 'Oracle, SQL Server, PostgreSQL expertise'
    },
    {
      name: 'System Architecture',
      level: 85,
      icon: <WysiwygOutlinedIcon />,
      description: 'Scalable system design and architecture'
    },
    {
      name: 'Data Integration',
      level: 80,
      icon: <DatasetLinkedOutlinedIcon />,
      description: 'REST APIs, JMS, and third-party integrations'
    }
  ];

  return (
    <SkillsContainer id="skills-section">
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          <Box textAlign="center">
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Technical Expertise
            </Typography>
            <Typography variant="h5" sx={{ 
              color: 'text.secondary', 
              fontWeight: 400,
              fontFamily: 'Inter'
            }}>
              Mastering technologies that power modern applications
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)' 
            },
            gap: 4,
            width: '100%',
            mt: 4
          }}>
            {skills.map((skill, index) => (
              <FloatingSkillCard
                key={skill.name}
                delay={index * 0.2}
                hovered={hoveredSkill === index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <CardContent sx={{ 
                  p: { xs: 2, md: 3 }
                }}>
                  <SkillIcon hovered={hoveredSkill === index}>
                    {skill.icon}
                  </SkillIcon>
                  
                  <Typography variant="h6" sx={{ 
                    mb: 1, 
                    fontWeight: 600,
                    color: 'text.primary',
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}>
                    {skill.name}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                    minHeight: { xs: '32px', md: '40px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    lineHeight: { xs: 1.4, md: 1.5 }
                  }}>
                    {skill.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ 
                      fontWeight: 500,
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      Proficiency
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  
                  <ProgressBar 
                    progress={skill.level} 
                    animated={animateProgress}
                  />
                </CardContent>
              </FloatingSkillCard>
            ))}
          </Box>
        </Stack>
      </Container>
    </SkillsContainer>
  );
};

export default SkillsShowcase;