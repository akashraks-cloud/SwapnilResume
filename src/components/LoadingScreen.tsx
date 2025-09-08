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

const LoadingContainer = styled(Box)<{ fadeOut: boolean }>(({ fadeOut }) => ({
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

const TerminalContainer = styled(Box)({
  position: 'relative',
  padding: '2rem',
  borderRadius: '8px',
  backgroundColor: 'rgba(20, 0, 20, 0.9)',
  border: '2px solid #8B5CF6',
  boxShadow: '0 0 50px rgba(139, 92, 246, 0.3)',
  fontFamily: '"Courier New", "Monaco", "Lucida Console", monospace',
  minWidth: '400px',
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
  }
});

const CodeLine = styled(Typography)<{ delay: number; animate: boolean }>(({ delay, animate }) => ({
  color: '#8B5CF6',
  fontFamily: 'inherit',
  fontSize: '1.2rem',
  lineHeight: 1.8,
  margin: 0,
  overflow: 'hidden',
  borderRight: '3px solid #8B5CF6',
  whiteSpace: 'nowrap',
  width: animate ? '100%' : '0',
  animation: animate ? `${typewriter} 1.5s steps(40, end) ${delay}s both, ${blink} 0.75s step-end infinite ${delay + 1.5}s` : 'none',
}));

const GlitchText = styled(Typography)<{ animate: boolean }>(({ animate }) => ({
  color: '#FFFFFF',
  fontFamily: '"Courier New", monospace',
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '2rem',
  animation: animate ? `${glitch} 0.3s ease-in-out 3s 3` : 'none',
  textShadow: animate ? '2px 2px 0px #8B5CF6, -2px -2px 0px #A78BFA' : 'none',
}));

const MatrixChar = styled(Box)<{ delay: number; left: string }>(({ delay, left }) => ({
  position: 'absolute',
  top: 0,
  left: left,
  color: '#8B5CF6',
  fontFamily: '"Courier New", monospace',
  fontSize: '1rem',
  animation: `${matrixRain} 6s linear infinite`,
  animationDelay: `${delay}s`,
  opacity: 0.4,
  pointerEvents: 'none',
}));

const LoadingScreen: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [matrixChars, setMatrixChars] = useState<Array<{
    id: number;
    char: string;
    left: string;
    delay: number;
  }>>([]);

  const codeLines = [
    '> Initializing quantum processors...',
    '> Loading neural networks...',
    '> Compiling reality.exe...',
    '> console.log("Hello World");'
  ];

  useEffect(() => {
    // Generate matrix rain characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixElements = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      char: chars[Math.floor(Math.random() * chars.length)],
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
    }));
    setMatrixChars(matrixElements);

    // Step progression timer
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < codeLines.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

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
    };
  }, [onLoadComplete]);

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
        {codeLines.map((line, index) => (
          <CodeLine
            key={index}
            delay={index * 0.8}
            animate={currentStep >= index}
          >
            {line}
          </CodeLine>
        ))}
        
        <GlitchText animate={currentStep >= codeLines.length - 1}>
          &gt; Hello World
        </GlitchText>
      </TerminalContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen;