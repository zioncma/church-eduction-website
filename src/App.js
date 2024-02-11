import Nav from './components/features/Nav';
import Footer from './components/Footer/Footer';
import Theme from './providers/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavTabs from './components/features/Nav/NavTabs';
import NewsFeedPage from './pages/NewsFeedPage';
import { EducationPage } from './pages/EducationPage';
import GrowthPage from './pages/GrowthPage';
import { ArchivePage } from './pages/ArchivePage';
import NoMatchPage from './pages/NoMatchPage';
import { ROUTES, rootPath, allTabs, mainPageTitles } from './routes';
import './App.css';

function App() {
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
              <Route
                path={allTabs[0]}
                render={() => <NewsFeedPage pageTitle={mainPageTitles[0]} />}
              />
              <Route
                path={allTabs[1]}
                render={() => <GrowthPage pageTitle={mainPageTitles[1]} />}
              />
              <Route
                path={allTabs[2]}
                render={() => <EducationPage pageTitle={mainPageTitles[2]} />}
              />
              <Route
                path={ROUTES[3].path}
                render={() => <ArchivePage pageTitle={ROUTES[3].title} />}
              />
              <Route path='*' component={NoMatchPage} />
            </Switch>
          </main>
        </div>
        <Footer />
      </Router>
    </Theme>
  );
}

export default App;
