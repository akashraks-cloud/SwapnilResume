import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 3,
  backgroundColor: theme.palette.grey[200],
  '& .MuiLinearProgress-bar': {
    borderRadius: 3,
    backgroundColor: theme.palette.primary.main,
  },
}));

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {skill}
        </Typography>
      </Box>
      <StyledLinearProgress variant="determinate" value={level} />
    </Box>
  );
};

export default SkillBar;