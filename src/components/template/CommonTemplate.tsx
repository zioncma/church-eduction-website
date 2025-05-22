import Nav from 'components/features/Nav';
import { Footer } from 'components/organism/Footer/Footer';
import Theme from 'providers/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { NavTabs } from 'components/features/Nav/NavTabs';
import { allTabs, mainPageTitles } from 'routes';
import '../../App.css';
import { usePathname } from 'next/navigation'

export function CommonTemplate({ children, ...optionals }) {
  const pathname = usePathname();
  // console.log('pathname', pathname);

  return (
    <Theme>
      <CssBaseline />
      <div className='App'>
        <Nav routes={allTabs} pageTitles={mainPageTitles}>
          <NavTabs
            routes={allTabs}
            value={pathname}
            labels={mainPageTitles}
          />
        </Nav>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </Theme>
  );
}

export default CommonTemplate;