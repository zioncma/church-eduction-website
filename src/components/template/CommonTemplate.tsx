import { NavContainer } from 'components/features/Nav';
import { Footer } from 'components/organism/Footer/Footer';
import { Theme } from 'providers/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { NavTabs } from 'components/features/Nav/NavTabs';
import { allTabs, mainPageTitles } from 'routes';
import { usePathname } from 'next/navigation';

export function CommonTemplate({ children, ...optionals }) {
  const pathname = usePathname();
  // console.log('pathname', pathname);

  return (
    <Theme>
      <CssBaseline />
      <div className='App'>
        <NavContainer routes={allTabs} pageTitles={mainPageTitles}>
          <NavTabs
            routes={allTabs}
            value={pathname}
            labels={mainPageTitles}
          />
        </NavContainer>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </Theme>
  );
}

export default CommonTemplate;