import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366F1',
      light: '#8B5CF6',
      dark: '#4F46E5',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#8B5CF6',
      light: '#A78BFA',
      dark: '#7C3AED',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#0F172A',
      paper: 'rgba(30, 41, 59, 0.8)'
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#CBD5E1'
    },
    grey: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A'
    },
    info: {
      main: '#06B6D4',
      light: '#67E8F9',
      dark: '#0891B2'
    },
    success: {
      main: '#10B981',
      light: '#6EE7B7',
      dark: '#059669'
    },
    warning: {
      main: '#F59E0B',
      light: '#FCD34D',
      dark: '#D97706'
    },
    error: {
      main: '#EF4444',
      light: '#FCA5A5',
      dark: '#DC2626'
    }
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#F8FAFC'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#F8FAFC'
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F8FAFC'
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F8FAFC'
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F8FAFC'
    },
    body1: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#CBD5E1'
    },
    body2: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#94A3B8'
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
        }
      }
    }
  }
});

export default theme;