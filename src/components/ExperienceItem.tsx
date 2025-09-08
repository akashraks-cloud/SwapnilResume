import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const TimelineDot = styled(Box)(({ theme }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  zIndex: 2,
}));

const TimelineLine = styled(Box)(({ theme }) => ({
  width: 2,
  backgroundColor: theme.palette.primary.main,
  position: 'absolute',
  left: 5,
  top: 12,
  bottom: -20,
  zIndex: 1,
}));

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  location,
  description,
  isLast = false
}) => {
  return (
    <Box sx={{ position: 'relative', pb: isLast ? 0 : 3 }}>
      <Stack direction="row" spacing={2}>
        <Box sx={{ position: 'relative', pt: 0.5 }}>
          <TimelineDot />
          {!isLast && <TimelineLine />}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 500, color: 'primary.main', mb: 0.5 }}>
            {company}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            {duration} {location && `• ${location}`}
          </Typography>
          <Stack spacing={0.5}>
            {description.map((item, index) => (
              <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
                • {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ExperienceItem;