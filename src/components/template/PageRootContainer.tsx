import Nav from 'components/features/Nav';
import { Footer } from 'components/organism/Footer/Footer';
import Theme from 'providers/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { NavTabs } from 'components/features/Nav/NavTabs';
import { ROUTES, rootPath, allTabs, mainPageTitles } from 'routes';
import './App.css';

function PageRootContainer() {
  return (
    <Theme>
      <Router>
        <CssBaseline />
        <div className='App'>
          <Nav routes={allTabs} pageTitles={mainPageTitles}>
            <Route
              render={({ location }) => (
                <NavTabs
                  routes={allTabs}
                  value={location.pathname}
                  labels={mainPageTitles}
                />
              )}
            />
          </Nav>
          <main>
            <Switch>
              <Route
                exact
                path={rootPath}
                render={() => {
                  return <Redirect to={ROUTES[0].path} />;
                }}
              />
            </Switch>
          </main>
        </div>
        <Footer />
      </Router>
    </Theme>
  );
}

export default PageRootContainer;