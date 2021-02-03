import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import Theme from './components/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavTabs from './components/NavTabs';
import NewsFeedPage from './components/NewsFeedPage';
import EducationPage from './components/EducationPage';
import GrowthPage from './components/GrowthPage';
import ArchivePage from './components/ArchivePage';
import NoMatchPage from './components/NoMatchPage';
import './App.css';

function App() {
  const mainPageTitles = ['最新消息', '信仰成長路', '成人主日學', '資料庫'];

  //Routing
  const rootPath = '/';
  const allTabs = ['/news', '/growth', '/course', '/archive']; //TODO: need to fix later

  return (
    <Theme>
      <Router>
        <CssBaseline />
        <div className='App'>
          <Nav routes={allTabs} pageTitles={mainPageTitles}>
            <Route
              render={({ location }) => (
                <>
                  <NavTabs
                    routes={allTabs}
                    value={location.pathname}
                    labels={mainPageTitles}
                  />
                </>
              )}
            />
          </Nav>

          <Switch>
            <Route
              exact
              path={rootPath}
              render={() => {
                return <Redirect to={allTabs[0]} />;
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
            <Route path={allTabs[3]} render={() => <ArchivePage pageTitle={mainPageTitles[3]} />} />
            <Route path='*' component={NoMatchPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Theme>
  );
}

export default App;
