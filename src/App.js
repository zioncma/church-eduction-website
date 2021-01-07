// import './App.css';
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer/Footer";
import Theme from "./components/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import NewsFeedPage from "./components/NewsFeedPage";
import EducationPage from "./components/EducationPage";
import GrowthPage from "./components/GrowthPage";
import NoMatchPage from './components/NoMatchPage';

function App() {
  //Routing
  const allTabs = ["/news", "/growth", "/course"];
  // const { path, url } = useRouteMatch();

  return (
    <Theme>
      <Router>
        <CssBaseline />
        <div className="App">
          <Nav>
            <Route
              render={({ location }) => (
                <>
                  <NavTabs routes={allTabs} value={location.pathname} />
                </>
              )}
            />
          </Nav>

          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to={allTabs[0]} />;
              }}
            />
            <Route path={allTabs[0]} render={() => <NewsFeedPage />} />
            <Route path={allTabs[1]} render={() => <GrowthPage />} />
            <Route path={allTabs[2]} render={() => <EducationPage />} />
            <Route component={NoMatchPage} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </Theme>
  );
}

export default App;
