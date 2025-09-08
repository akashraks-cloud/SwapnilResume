import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const SectionDivider = styled(Box)(({ theme }) => ({
  width: 4,
  height: 40,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 2,
  marginRight: theme.spacing(2),
}));

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <SectionDivider />
      <Typography variant="h4" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeader;