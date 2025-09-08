import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const scanLine = keyframes`
  0% { top: 0%; opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: #8B5CF6; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const matrixRain = keyframes`
  0% { transform: translateY(-100vh); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

const LoadingContainer = styled(Box)<{ fadeOut: boolean }>(({ fadeOut, theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
  padding: theme.spacing(1),
  animation: fadeOut ? `${fadeOut} 0.5s ease-out forwards` : 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #8B5CF6, transparent)',
    animation: `${scanLine} 4s ease-in-out infinite`,
  }
}));

const TerminalContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2),
  borderRadius: '8px',
  backgroundColor: 'rgba(20, 0, 20, 0.9)',
  border: '2px solid #8B5CF6',
  boxShadow: '0 0 50px rgba(139, 92, 246, 0.3)',
  fontFamily: '"Courier New", "Monaco", "Lucida Console", monospace',
  width: '100%',
  maxWidth: '600px',
  minWidth: '280px',
  maxHeight: '90vh',
  overflow: 'auto',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
    maxWidth: '700px',
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
    maxWidth: '800px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10px',
    left: '15px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#FF5F56',
    boxShadow: '20px 0 0 #FFBD2E, 40px 0 0 #27CA3F',
    [theme.breakpoints.down('sm')]: {
      width: '8px',
      height: '8px',
      top: '8px',
      left: '10px',
      boxShadow: '14px 0 0 #FFBD2E, 28px 0 0 #27CA3F',
    }
  }
}));

const CodeLine = styled(Typography)<{ delay: number; animate: boolean }>(({ delay, animate, theme }) => ({
  color: '#8B5CF6',
  fontFamily: 'inherit',
  fontSize: '0.9rem',
  lineHeight: 1.6,
  margin: 0,
  overflow: 'hidden',
  borderRight: '3px solid #8B5CF6',
  whiteSpace: 'nowrap',
  width: animate ? '100%' : '0',
  animation: animate ? `${typewriter} 1.5s steps(40, end) ${delay}s both, ${blink} 0.75s step-end infinite ${delay + 1.5}s` : 'none',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
    lineHeight: 1.8,
  }
}));

const OutputText = styled(Typography)<{ show: boolean }>(({ show, theme }) => ({
  color: '#00FF00',
  fontFamily: '"Courier New", monospace',
  fontSize: '0.9rem',
  lineHeight: 1.6,
  marginTop: '0.5rem',
  marginLeft: '1rem',
  opacity: show ? 1 : 0,
  transition: 'opacity 0.3s ease-in',
  textShadow: '0 0 10px #00FF00',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
    lineHeight: 1.8,
  }
}));

const MatrixChar = styled(Box)<{ delay: number; left: string }>(({ delay, left, theme }) => ({
  position: 'absolute',
  top: 0,
  left: left,
  color: '#8B5CF6',
  fontFamily: '"Courier New", monospace',
  fontSize: '0.8rem',
  animation: `${matrixRain} 6s linear infinite`,
  animationDelay: `${delay}s`,
  opacity: 0.4,
  pointerEvents: 'none',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  }
}));

const LoadingScreen: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [matrixChars, setMatrixChars] = useState<Array<{
    id: number;
    char: string;
    left: string;
    delay: number;
  }>>([]);

  const codeLines = [
    '> Initializing technical expertise...',
    '> Adding loads of software experience...',
    '> Compiling hardwork.exe...',
    '> console.log("Hello World");'
  ];

  // Responsive code lines for mobile
  const mobileCodeLines = [
    '> Init technical expertise...',
    '> Adding software experience...',
    '> Compiling hardwork.exe...',
    '> console.log("Hello World");'
  ];

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Generate matrix rain characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixElements = Array.from({ length: isMobile ? 30 : 50 }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    }));
    setMatrixChars(matrixElements);

    const displayLines = isMobile ? mobileCodeLines : codeLines;

    // Step progression timer
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < displayLines.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    // Show output after last line completes typing (800ms delay + 1.5s typing + 200ms buffer)
    const outputTimer = setTimeout(() => {
      setShowOutput(true);
    }, (displayLines.length - 1) * 800 + 1500 + 200);

    // Complete loading after 4 seconds
    const completeTimer = setTimeout(() => {
      setShouldFadeOut(true);
      setTimeout(() => {
        onLoadComplete();
      }, 500); // Wait for fade out animation
    }, 4000);

    return () => {
      clearInterval(stepTimer);
      clearTimeout(completeTimer);
      clearTimeout(outputTimer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [onLoadComplete, isMobile]);

  return (
    <LoadingContainer fadeOut={shouldFadeOut}>
      {/* Matrix Rain Background */}
      {matrixChars.map((char) => (
        <MatrixChar
          key={char.id}
          delay={char.delay}
          left={char.left}
        >
          {char.char}
        </MatrixChar>
      ))}
      
      <TerminalContainer>
        {(isMobile ? mobileCodeLines : codeLines).map((line, index) => (
          <CodeLine
            key={index}
            delay={index * 0.8}
            animate={currentStep >= index}
          >
            {line}
          </CodeLine>
        ))}
        
        
        <OutputText show={showOutput}>
          Hello World
        </OutputText>
      </TerminalContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen;