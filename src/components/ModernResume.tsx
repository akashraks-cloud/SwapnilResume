import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import SkillsShowcase from './SkillsShowcase';
import ExperienceTimeline from './ExperienceTimeline';
import ProjectPortfolio from './ProjectPortfolio';
import ContactSection from './ContactSection';
import PDFExportButton from './PDFExportButton';

const ModernResume: React.FC = () => {
  return (
    <Box sx={{ 
      overflow: 'hidden',
      position: 'relative'
    }}>
      <PDFExportButton />
      <HeroSection />
      <SkillsShowcase />
      <ExperienceTimeline />
      <ProjectPortfolio />
      <ContactSection />
    </Box>
  );
};

export default ModernResume;