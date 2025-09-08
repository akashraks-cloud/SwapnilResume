import React from 'react';
import { Box, Typography, CircularProgress as MuiCircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCircularProgress = styled(MuiCircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}));

const BackgroundCircle = styled(MuiCircularProgress)(({ theme }) => ({
  color: theme.palette.grey[200],
  position: 'absolute',
  left: 0,
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}));

interface CircularProgressProps {
  value: number;
  label: string;
  size?: number;
}

const CircularProgressComponent: React.FC<CircularProgressProps> = ({ 
  value, 
  label, 
  size = 80 
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
        <BackgroundCircle
          variant="determinate"
          value={100}
          size={size}
          thickness={4}
        />
        <StyledCircularProgress
          variant="determinate"
          value={value}
          size={size}
          thickness={4}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: '1rem', fontWeight: 600 }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 500 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default CircularProgressComponent;