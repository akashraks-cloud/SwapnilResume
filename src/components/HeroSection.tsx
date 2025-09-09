import React, { useEffect, useState } from 'react';
import { Box, Typography, Stack, Container, IconButton, Avatar, Chip, Tooltip } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
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
  50% { border-color: #1E3A8A; }
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
    box-shadow: 0 0 25px rgba(30, 58, 138, 0.8);
  }
`;

const profileImageGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(30, 58, 138, 0.3),
                0 0 40px rgba(30, 58, 138, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(30, 58, 138, 0.6),
                0 0 60px rgba(30, 58, 138, 0.4);
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
  background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
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
  color: '#1E3A8A',
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
  color: '#3B82F6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(30, 58, 138, 0.3)',
  '& .MuiSvgIcon-root': {
    fontSize: '2rem'
  }
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
    background: 'linear-gradient(45deg, #1E3A8A, #3B82F6, #06B6D4)',
    animation: `${profileImageGlow} 3s ease-in-out infinite`,
    zIndex: -1
  }
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  border: '4px solid rgba(255, 255, 255, 0.1)',
  animation: `${fadeInUp} 1s ease-out 0.3s both`,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const TypingText = styled(Typography)<{ delay: number }>(({ delay, theme }) => ({
  overflow: 'hidden',
  borderRight: '3px solid #1E3A8A',
  whiteSpace: 'nowrap',
  margin: '0 auto',
  letterSpacing: '.15em',
  animation: `${typing} 3.5s steps(40, end) ${delay}s both, ${blink} 0.75s step-end infinite`,
  fontSize: '4rem !important',
  fontWeight: '700 !important',
  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%) !important',
  WebkitBackgroundClip: 'text !important',
  WebkitTextFillColor: 'transparent !important',
  backgroundClip: 'text !important',
  textShadow: '0 0 30px rgba(30, 58, 138, 0.5)',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem !important',
    letterSpacing: '.1em'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem !important',
    letterSpacing: '.08em',
    whiteSpace: 'normal',
    lineHeight: '1.2 !important',
    textAlign: 'center',
    borderRight: 'none',
    animation: `${fadeInUp} 1s ease-out ${delay}s both`
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '2rem !important'
  }
}));

const ContactIconButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(30, 41, 59, 0.6)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(148, 163, 184, 0.3)',
  color: 'white',
  margin: theme.spacing(0.5),
  '&:hover': {
    background: 'rgba(30, 41, 59, 0.8)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
  },
  '&.email': {
    '&:hover': {
      background: 'linear-gradient(135deg, #EA4335, #C5221F)',
      borderColor: '#EA4335'
    }
  },
  '&.phone': {
    '&:hover': {
      background: 'linear-gradient(135deg, #34A853, #137333)',
      borderColor: '#34A853'
    }
  },
  '&.github': {
    '&:hover': {
      background: 'linear-gradient(135deg, #333, #000)',
      borderColor: '#333'
    }
  },
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 1s ease-out 1.4s both`
}));

const LinkedInButton = styled(ContactIconButton)(() => ({
  background: 'linear-gradient(135deg, #0077B5, #005885)',
  borderColor: '#0077B5',
  '&:hover': {
    background: 'linear-gradient(135deg, #005885, #004066)',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(0, 119, 181, 0.3)',
    borderColor: '#0077B5'
  }
}));

const NotificationToast = styled(Box)<{ show: boolean }>(({ show, theme }) => ({
  position: 'fixed',
  top: '2rem',
  left: '50%',
  background: 'rgba(16, 185, 129, 0.9)',
  color: 'white',
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(1),
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(16, 185, 129, 0.3)',
  fontSize: '0.875rem',
  fontWeight: 500,
  zIndex: 10000,
  opacity: show ? 1 : 0,
  visibility: show ? 'visible' : 'hidden',
  transform: show ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-20px)',
  transition: 'all 0.3s ease'
}));

const TechChip = styled(Chip)<{ delay: number }>(({ delay, theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  color: '#1E3A8A',
  border: '2px solid #1E3A8A',
  backdropFilter: 'blur(10px)',
  animation: `${fadeInUp} 1s ease-out ${delay}s both`,
  fontSize: '1rem',
  padding: theme.spacing(1, 2),
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  '& .MuiChip-icon': {
    fontSize: '1.5rem !important',
    marginLeft: theme.spacing(1),
    color: '#1E3A8A !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem !important'
    }
  },
  '& .MuiChip-label': {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#1E3A8A',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem'
    }
  },
  '&:hover': {
    background: '#1E3A8A',
    color: 'white',
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 8px 25px rgba(30, 58, 138, 0.4)',
    '& .MuiChip-icon': {
      color: 'white !important'
    },
    '& .MuiChip-label': {
      color: 'white'
    }
  },
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.8, 1.5),
    margin: theme.spacing(0.5)
  }
}));

const ScrollIndicator = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2, 3),
  color: 'rgba(255, 255, 255, 0.9)',
  cursor: 'pointer',
  animation: `${fadeInUp} 1s ease-out 2s both`,
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    color: 'rgba(255, 255, 255, 1)',
    transform: 'translateX(-50%) translateY(-8px) scale(1.05)'
  },
  transition: 'all 0.3s ease',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 2.5),
    bottom: '1rem'
  }
}));

const ScrollIcon = styled(KeyboardArrowDownIcon)(() => ({
  fontSize: '2.5rem',
  animation: `${bounce} 2s infinite`,
  marginTop: '0.5rem',
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
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
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    margin: theme.spacing(0, 2),
    borderRadius: theme.spacing(2)
  }
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

  const [copyNotification, setCopyNotification] = useState<string | null>(null);

  const handleCopyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyNotification(`${type} copied to clipboard!`);
      setTimeout(() => setCopyNotification(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyNotification(`${type} copied to clipboard!`);
      setTimeout(() => setCopyNotification(null), 2000);
    }
  };

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
    <>
      <NotificationToast show={!!copyNotification}>
        {copyNotification}
      </NotificationToast>
      
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
                  width: { xs: 120, sm: 150, md: 180 },
                  height: { xs: 120, sm: 150, md: 180 },
                  background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
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
              textAlign: 'center',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.875rem' },
              lineHeight: { xs: 1.3, md: 1.2 },
              px: { xs: 2, md: 0 }
            }}>
              Senior Software Developer & AI Certified Technical Lead
            </AnimatedText>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              flexWrap="wrap" 
              justifyContent="center"
              alignItems="center"
              sx={{
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                padding: { xs: 3, md: 4 },
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                '& > *': {
                  margin: { xs: '6px !important', md: '8px !important' }
                }
              }}
            >
              <Typography variant="h6" sx={{
                color: 'white',
                fontWeight: 600,
                textAlign: 'center',
                mb: { xs: 1, sm: 0 },
                mr: { sm: 2 },
                fontSize: { xs: '1rem', md: '1.125rem' },
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
              }}>
                Core Expertise:
              </Typography>
              <TechChip delay={1.0} label="Java" icon={<CodeIcon />} />
              <TechChip delay={1.1} label="React" icon={<DeveloperModeIcon />} />
              <TechChip delay={1.2} label="AI/ML" icon={<SmartToyIcon />} />
              <TechChip delay={1.3} label="14+ Years" icon={<TerminalIcon />} />
            </Stack>
            
            <AnimatedText variant="body1" delay={1.0} sx={{ 
              maxWidth: '700px',
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: { xs: 1.6, md: 1.7 },
              color: 'text.secondary',
              textAlign: 'center',
              px: { xs: 2, md: 0 }
            }}>
              Transforming ideas into scalable web applications with expertise in 
              full-stack development, system architecture, and cutting-edge AI technologies at 
              Fortune 500 Multinational Company.
            </AnimatedText>
            
            <Stack 
              direction="row" 
              spacing={{ xs: 1, md: 2 }} 
              justifyContent="center" 
              flexWrap="wrap"
              sx={{ 
                '& > *': {
                  margin: { xs: '4px !important', md: '8px !important' }
                }
              }}
            >
              <Tooltip 
                title="Email: akashraks@gmail.com (Click to copy)" 
                placement="top"
                arrow
              >
                <ContactIconButton 
                  className="email"
                  onClick={() => handleCopyToClipboard('akashraks@gmail.com', 'Email')}
                  sx={{
                    padding: { xs: 1, md: 1.5 }
                  }}
                >
                  <EmailIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                </ContactIconButton>
              </Tooltip>
              
              <Tooltip 
                title="Phone: +91 9769534547 (Click to copy)" 
                placement="top"
                arrow
              >
                <ContactIconButton 
                  className="phone"
                  onClick={() => handleCopyToClipboard('+91 9769534547', 'Phone')}
                  sx={{
                    padding: { xs: 1, md: 1.5 }
                  }}
                >
                  <PhoneIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                </ContactIconButton>
              </Tooltip>
              
              <Tooltip 
                title="LinkedIn Profile" 
                placement="top"
                arrow
              >
                <LinkedInButton
                  onClick={() => window.open('https://www.linkedin.com/in/swapnil-pande-8a219832/', '_blank')}
                  sx={{
                    padding: { xs: 1, md: 1.5 }
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                </LinkedInButton>
              </Tooltip>
              
              <Tooltip 
                title="GitHub Profile" 
                placement="top"
                arrow
              >
                <ContactIconButton 
                  className="github"
                  onClick={() => window.open('https://github.com/akashraks-cloud', '_blank')}
                  sx={{
                    padding: { xs: 1, md: 1.5 }
                  }}
                >
                  <GitHubIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                </ContactIconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </GlassmorphicCard>
      </Container>
      
      <ScrollIndicator onClick={() => {
        const nextSection = document.querySelector('#skills-section');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}>
        <Typography variant="body2" sx={{ 
          fontSize: { xs: '0.8rem', md: '0.9rem' },
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textAlign: 'center',
          lineHeight: 1.2,
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
        }}>
          Explore My Skills
          <br />
          <span style={{ fontSize: '0.7em', opacity: 0.8 }}>Scroll Down</span>
        </Typography>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroContainer>
    </>
  );
};

export default HeroSection;