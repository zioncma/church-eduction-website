import '../styles/globals.css';
import { CommonTemplate } from '../components/template/CommonTemplate';

export default function App({ Component, pageProps }) {
  return <CommonTemplate><Component {...pageProps} /></CommonTemplate>;
}