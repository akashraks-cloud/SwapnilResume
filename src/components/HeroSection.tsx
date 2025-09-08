import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Container, IconButton, Avatar, Chip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import profileImage from '../img/past-forward-1980s.jpg';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: #6366F1; }
`;

const codeFloat = keyframes`
  0%, 100% { 
    transform: translateY(0px) translateX(0px) rotateY(0deg);
    opacity: 0.7;
  }
  25% { 
    transform: translateY(-15px) translateX(10px) rotateY(90deg);
    opacity: 1;
  }
  50% { 
    transform: translateY(-30px) translateX(-5px) rotateY(180deg);
    opacity: 0.8;
  }
  75% { 
    transform: translateY(-15px) translateX(-10px) rotateY(270deg);
    opacity: 1;
  }
`;

const aiPulse = keyframes`
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
  }
  50% { 
    transform: scale(1.1) rotate(180deg);
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.8);
  }
`;

const profileImageGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3),
                0 0 40px rgba(139, 92, 246, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.6),
                0 0 60px rgba(139, 92, 246, 0.4);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, 
    ${theme.palette.grey[900]} 0%, 
    ${theme.palette.grey[800]} 25%, 
    ${theme.palette.primary.dark} 50%, 
    ${theme.palette.secondary.dark} 75%, 
    ${theme.palette.grey[900]} 100%)`,
  backgroundSize: '400% 400%',
  animation: 'gradientShift 15s ease infinite',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  '@keyframes gradientShift': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
}));

const ParticleContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  overflow: 'hidden'
});

const Particle = styled(Box)<{ delay: number; duration: number; size: number }>(({ delay, duration, size }) => ({
  position: 'absolute',
  width: `${size}px`,
  height: `${size}px`,
  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
  borderRadius: '50%',
  animation: `${float} ${duration}s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  opacity: 0.6,
  filter: 'blur(1px)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200%',
    height: '200%',
    background: 'inherit',
    borderRadius: '50%',
    animation: `${glow} 3s ease-in-out infinite`,
    filter: 'blur(10px)',
    zIndex: -1
  }
}));

const CodeElement = styled(Box)<{ delay: number; duration: number }>(({ delay, duration }) => ({
  position: 'absolute',
  animation: `${codeFloat} ${duration}s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  color: '#6366F1',
  fontSize: '1.2rem',
  fontFamily: 'monospace',
  opacity: 0.7,
  userSelect: 'none',
  pointerEvents: 'none',
  '&:hover': {
    opacity: 1,
    transform: 'scale(1.1)'
  }
}));

const AIIcon = styled(Box)<{ delay: number }>(({ delay }) => ({
  position: 'absolute',
  animation: `${aiPulse} 4s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  color: '#8B5CF6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(139, 92, 246, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(139, 92, 246, 0.3)'
}));

const ProfileImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% + 20px)',
    height: 'calc(100% + 20px)',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #6366F1, #8B5CF6, #06B6D4)',
    animation: `${profileImageGlow} 3s ease-in-out infinite`,
    zIndex: -1
  }
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  border: '4px solid rgba(255, 255, 255, 0.1)',
  animation: `${fadeInUp} 1s ease-out 0.3s both`,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const TypingText = styled(Typography)<{ delay: number }>(({ delay }) => ({
  overflow: 'hidden',
  borderRight: '3px solid #6366F1',
  whiteSpace: 'nowrap',
  margin: '0 auto',
  letterSpacing: '.15em',
  animation: `${typing} 3.5s steps(40, end) ${delay}s both, ${blink} 0.75s step-end infinite`
}));

const LinkedInButton = styled(IconButton)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0077B5, #005885)',
  color: 'white',
  padding: theme.spacing(1.5),
  '&:hover': {
    background: 'linear-gradient(135deg, #005885, #004066)',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(0, 119, 181, 0.3)'
  },
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 1s ease-out 1.4s both`
}));

const TechChip = styled(Chip)<{ delay: number }>(({ delay, theme }) => ({
  background: 'rgba(99, 102, 241, 0.1)',
  color: '#6366F1',
  border: '1px solid rgba(99, 102, 241, 0.3)',
  backdropFilter: 'blur(10px)',
  animation: `${fadeInUp} 1s ease-out ${delay}s both`,
  '&:hover': {
    background: 'rgba(99, 102, 241, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(99, 102, 241, 0.3)'
  },
  transition: 'all 0.3s ease'
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  cursor: 'pointer',
  animation: `${fadeInUp} 1s ease-out 2s both`,
  '&:hover': {
    color: 'rgba(255, 255, 255, 1)',
    transform: 'translateX(-50%) translateY(-5px)'
  },
  transition: 'all 0.3s ease'
}));

const ScrollIcon = styled(KeyboardArrowDownIcon)(() => ({
  fontSize: '2rem',
  animation: `${bounce} 2s infinite`,
  marginTop: '0.5rem'
}));

const GlassmorphicCard = styled(Box)(({ theme }) => ({
  background: 'rgba(30, 41, 59, 0.3)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(6),
  textAlign: 'center',
  animation: `${fadeInUp} 1s ease-out`,
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  position: 'relative',
  zIndex: 2
}));

const AnimatedText = styled(Typography)<{ delay: number }>(({ delay }) => ({
  animation: `${fadeInUp} 1s ease-out ${delay}s both`
}));

const HeroSection: React.FC = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
    size: number;
  }>>([]);

  const [codeElements, setCodeElements] = useState<Array<{
    id: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
    text: string;
  }>>([]);

  const [aiIcons, setAiIcons] = useState<Array<{
    id: number;
    left: string;
    top: string;
    delay: number;
    icon: React.ReactNode;
  }>>([]);

  const codeSnippets = [
    'const ai = new Intelligence()',
    'function develop() { }',
    'import React from "react"',
    'async/await',
    'useState()',
    'git commit -m "feat"',
    'npm install',
    'TypeScript',
    'API.fetch()',
    'component.render()'
  ];

  const techIcons = [
    <CodeIcon key="code" />,
    <SmartToyIcon key="ai" />,
    <DeveloperModeIcon key="dev" />,
    <TerminalIcon key="terminal" />,
    <DataObjectIcon key="data" />
  ];

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 2 + Math.random() * 6
      }));
      setParticles(newParticles);
    };

    const generateCodeElements = () => {
      const newCodeElements = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 6,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      }));
      setCodeElements(newCodeElements);
    };

    const generateAiIcons = () => {
      const newAiIcons = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 6,
        icon: techIcons[Math.floor(Math.random() * techIcons.length)]
      }));
      setAiIcons(newAiIcons);
    };

    generateParticles();
    generateCodeElements();
    generateAiIcons();
  }, []);

  return (
    <HeroContainer>
      <ParticleContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            delay={particle.delay}
            duration={particle.duration}
            size={particle.size}
            sx={{
              left: particle.left,
              top: particle.top
            }}
          />
        ))}
        
        {codeElements.map((element) => (
          <CodeElement
            key={element.id}
            delay={element.delay}
            duration={element.duration}
            sx={{
              left: element.left,
              top: element.top
            }}
          >
            {element.text}
          </CodeElement>
        ))}
        
        {aiIcons.map((iconElement) => (
          <AIIcon
            key={iconElement.id}
            delay={iconElement.delay}
            sx={{
              left: iconElement.left,
              top: iconElement.top
            }}
          >
            {iconElement.icon}
          </AIIcon>
        ))}
      </ParticleContainer>
      
      <Container maxWidth="lg">
        <GlassmorphicCard>
          <Stack spacing={4} alignItems="center">
            <ProfileImageContainer>
              <ProfileAvatar
                src={profileImage}
                alt="Swapnil Pande"
                sx={{
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                SP
              </ProfileAvatar>
            </ProfileImageContainer>
            
            <TypingText variant="h1" delay={0.5}>
              Swapnil Pande
            </TypingText>
            
            <AnimatedText variant="h3" delay={0.8} sx={{ 
              color: 'text.secondary',
              fontWeight: 400,
              fontFamily: 'Inter',
              textAlign: 'center'
            }}>
              Senior Software Developer & AI Enthusiast
            </AnimatedText>
            
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
              <TechChip delay={1.0} label="Java" icon={<CodeIcon />} />
              <TechChip delay={1.1} label="React" icon={<DeveloperModeIcon />} />
              <TechChip delay={1.2} label="AI/ML" icon={<SmartToyIcon />} />
              <TechChip delay={1.3} label="14+ Years" icon={<TerminalIcon />} />
            </Stack>
            
            <AnimatedText variant="body1" delay={1.0} sx={{ 
              maxWidth: '700px',
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'text.secondary',
              textAlign: 'center'
            }}>
              Transforming ideas into scalable web applications with expertise in 
              full-stack development, system architecture, and cutting-edge AI technologies at 
              Tata Consultancy Services.
            </AnimatedText>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
              <AnimatedText variant="body2" delay={1.2} sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 1,
                color: 'text.secondary'
              }}>
                📧 swapnilbipinpande@gmail.com
              </AnimatedText>
              <AnimatedText variant="body2" delay={1.3} sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 1,
                color: 'text.secondary'
              }}>
                📱 9769534547
              </AnimatedText>
            </Stack>
            
            <LinkedInButton
              onClick={() => window.open('https://www.linkedin.com/in/swapnil-pande', '_blank')}
              size="large"
            >
              <LinkedInIcon sx={{ fontSize: '2rem' }} />
            </LinkedInButton>
          </Stack>
        </GlassmorphicCard>
      </Container>
      
      <ScrollIndicator onClick={() => {
        const nextSection = document.querySelector('#skills-section');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        <Typography variant="body2" sx={{ 
          fontSize: '0.9rem',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          Scroll Down for More Details
        </Typography>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;