import React, { useState } from 'react';
import { Box, Typography, Stack, Container, Card, CardContent, IconButton } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const ContactContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.grey[800]} 100%)`,
  padding: theme.spacing(8, 0),
  position: 'relative'
}));

const ContactCard = styled(Card)<{ hovered: boolean; delay: number }>(({ theme, hovered, delay }) => ({
  background: 'rgba(30, 41, 59, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  animation: `${float} 3s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  transform: hovered ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
  boxShadow: hovered 
    ? '0 25px 50px -12px rgba(99, 102, 241, 0.4)' 
    : '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    '& .contact-icon': {
      animation: `${pulse} 0.6s ease-in-out`,
      color: theme.palette.primary.light
    }
  }
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: 'white',
  marginBottom: theme.spacing(2),
  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
  transition: 'all 0.3s ease'
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  width: '50px',
  height: '50px',
  background: 'rgba(99, 102, 241, 0.1)',
  border: '1px solid rgba(99, 102, 241, 0.3)',
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.primary.main,
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)'
  }
}));

const StatsCard = styled(Card)(({ theme }) => ({
  background: 'rgba(30, 41, 59, 0.6)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(148, 163, 184, 0.2)',
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(99, 102, 241, 0.2)'
  }
}));

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  action: string;
}

const ContactSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      value: 'swapnilbipinpande@gmail.com',
      action: 'mailto:swapnilbipinpande@gmail.com'
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      value: '+91 9769534547',
      action: 'tel:+919769534547'
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      value: 'Yavatmal, Maharashtra, India',
      action: '#'
    }
  ];

  const stats = [
    { number: '14+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '15+', label: 'Team Members Led' },
    { number: '3', label: 'Major Clients' }
  ];

  const handleContactClick = (action: string) => {
    if (action.startsWith('mailto:') || action.startsWith('tel:')) {
      window.location.href = action;
    }
  };

  return (
    <ContactContainer>
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Box textAlign="center">
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              Let's Connect
            </Typography>
            <Typography variant="h5" sx={{ 
              color: 'text.secondary', 
              fontWeight: 400,
              fontFamily: 'Inter',
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Ready to discuss your next project or explore collaboration opportunities? 
              I'm always excited to work on challenging and innovative solutions.
            </Typography>
          </Box>

          {/* Contact Cards */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              md: 'repeat(3, 1fr)' 
            },
            gap: 4,
            width: '100%'
          }}>
            {contactInfo.map((contact, index) => (
              <ContactCard
                key={index}
                hovered={hoveredCard === index}
                delay={index * 0.2}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleContactClick(contact.action)}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <ContactIcon className="contact-icon">
                    {contact.icon}
                  </ContactIcon>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600,
                    mb: 1,
                    color: 'text.primary'
                  }}>
                    {contact.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: 'text.secondary',
                    wordBreak: 'break-word'
                  }}>
                    {contact.value}
                  </Typography>
                </CardContent>
              </ContactCard>
            ))}
          </Box>

          {/* Stats Section */}
          <Box sx={{ width: '100%' }}>
            <Typography variant="h4" sx={{ 
              textAlign: 'center',
              mb: 4,
              fontWeight: 600
            }}>
              Professional Highlights
            </Typography>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { 
                xs: 'repeat(2, 1fr)', 
                md: 'repeat(4, 1fr)' 
              },
              gap: 3
            }}>
              {stats.map((stat, index) => (
                <StatsCard key={index}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 1
                  }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'text.secondary',
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </Typography>
                </StatsCard>
              ))}
            </Box>
          </Box>

          {/* Social Links */}
          <Box textAlign="center">
            <Typography variant="h6" sx={{ 
              mb: 3,
              fontWeight: 600
            }}>
              Connect on Social Platforms
            </Typography>
            <Stack direction="row" spacing={3} justifyContent="center">
              <SocialButton>
                <LinkedInIcon />
              </SocialButton>
              <SocialButton>
                <GitHubIcon />
              </SocialButton>
              <SocialButton>
                <EmailIcon />
              </SocialButton>
            </Stack>
          </Box>

          {/* Call to Action */}
          <Box textAlign="center" sx={{ 
            background: 'rgba(99, 102, 241, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: 3,
            p: 4,
            maxWidth: '600px'
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 600,
              mb: 2
            }}>
              Ready to Build Something Amazing?
            </Typography>
            <Typography variant="body1" sx={{ 
              color: 'text.secondary',
              mb: 3
            }}>
              Whether you need a technical architect, full-stack developer, or team leader, 
              I'm here to help bring your vision to life with cutting-edge technology and 
              proven expertise.
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'primary.light',
              fontWeight: 500
            }}>
              Available for freelance projects and consulting opportunities
            </Typography>
          </Box>
        </Stack>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;