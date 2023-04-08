import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/global.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import type { AppProps } from 'next/app';

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
