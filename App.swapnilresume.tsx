import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import theme from './src/theme/theme';
import ModernResume from './src/components/ModernResume';
import LoadingScreen from './src/components/LoadingScreen';

const createEmotionCache = () => {
  return createCache({
    key: 'mui',
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLoading ? (
          <LoadingScreen onLoadComplete={handleLoadComplete} />
        ) : (
          <ModernResume />
        )}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;