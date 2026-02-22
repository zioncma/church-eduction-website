import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'utils/createEmotionCache';
import '../styles/globals.css';
import { CommonTemplate } from '../components/template/CommonTemplate';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <CommonTemplate>
        <Component {...pageProps} />
      </CommonTemplate>
    </CacheProvider>
  );
}