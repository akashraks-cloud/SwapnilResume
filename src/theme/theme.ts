import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1E3A8A', // Navy Blue (sparingly used)
      light: '#3B82F6', // Light Navy accent
      dark: '#1E40AF', // Dark Navy
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#6B7280', // Medium Grey
      light: '#9CA3AF', // Light Grey
      dark: '#374151', // Dark Grey
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#000000', // Pure Black
      paper: 'rgba(17, 24, 39, 0.9)' // Very Dark Grey overlay
    },
    text: {
      primary: '#FFFFFF', // Pure White
      secondary: '#D1D5DB' // Light Grey text
    },
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    info: {
      main: '#0EA5E9', // Professional Blue
      light: '#38BDF8',
      dark: '#0284C7'
    },
    success: {
      main: '#059669', // Professional Green
      light: '#10B981',
      dark: '#047857'
    },
    warning: {
      main: '#D97706', // Professional Orange
      light: '#F59E0B',
      dark: '#B45309'
    },
    error: {
      main: '#DC2626', // Professional Red
      light: '#EF4444',
      dark: '#B91C1C'
    }
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      background: 'linear-gradient(135deg, #FFFFFF 0%, #D1D5DB 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      '@media (max-width: 960px)': {
        fontSize: '3rem'
      },
      '@media (max-width: 600px)': {
        fontSize: '2.5rem',
        lineHeight: 1.2
      },
      '@media (max-width: 480px)': {
        fontSize: '2rem'
      }
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#F8FAFC',
      '@media (max-width: 960px)': {
        fontSize: '2.5rem'
      },
      '@media (max-width: 600px)': {
        fontSize: '2rem',
        lineHeight: 1.3
      },
      '@media (max-width: 480px)': {
        fontSize: '1.75rem'
      }
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#F8FAFC',
      '@media (max-width: 960px)': {
        fontSize: '1.75rem'
      },
      '@media (max-width: 600px)': {
        fontSize: '1.5rem',
        lineHeight: 1.4
      },
      '@media (max-width: 480px)': {
        fontSize: '1.25rem'
      }
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F8FAFC',
      '@media (max-width: 600px)': {
        fontSize: '1.25rem'
      },
      '@media (max-width: 480px)': {
        fontSize: '1.125rem'
      }
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F8FAFC',
      '@media (max-width: 600px)': {
        fontSize: '1.125rem'
      },
      '@media (max-width: 480px)': {
        fontSize: '1rem'
      }
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: '#F8FAFC',
      '@media (max-width: 600px)': {
        fontSize: '1rem'
      },
      '@media (max-width: 480px)': {
        fontSize: '0.875rem'
      }
    },
    body1: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#CBD5E1',
      '@media (max-width: 600px)': {
        fontSize: '0.875rem',
        lineHeight: 1.5
      }
    },
    body2: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#CBD5E1',
      '@media (max-width: 600px)': {
        fontSize: '0.75rem',
        lineHeight: 1.5
      }
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(17, 24, 39, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(107, 114, 128, 0.2)',
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(30, 58, 138, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 58, 138, 0.05) 0%, transparent 50%)',
          minHeight: '100vh',
        },
        '*::-webkit-scrollbar': {
          width: '8px',
        },
        '*::-webkit-scrollbar-track': {
          background: '#111827',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#374151',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#4B5563',
          },
        },
        // Firefox scrollbar styling
        html: {
          scrollbarWidth: 'thin',
          scrollbarColor: '#374151 #111827',
        },
      },
    },
  }
});

export default theme;