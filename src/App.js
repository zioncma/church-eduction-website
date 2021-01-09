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
  const mainPageTitles = ["最新消息", "成人主日學", "信仰成長路"];
  
  //Routing
  const allTabs = ["/church-eduction-website/news", "/church-eduction-website/growth", "/church-eduction-website/course"]; //TODO: need to fix later

  return (
    <Theme>
      <Router>
        <CssBaseline />
        <div className="App">
          <Nav>
            <Route
              render={({ location }) => (
                <>
                  <NavTabs routes={allTabs} value={location.pathname} labels={mainPageTitles} />
                </>
              )}
            />
          </Nav>

          <Switch>
            <Route
              exact
              path="/church-eduction-website" //TODO: need to fix later
              render={() => {
                return <Redirect to={allTabs[0]} />;
              }}
            />
            <Route path={allTabs[0]} render={() => <NewsFeedPage title={mainPageTitles[0]} />} />
            <Route path={allTabs[1]} render={() => <GrowthPage title={mainPageTitles[1]} />} />
            <Route path={allTabs[2]} render={() => <EducationPage title={mainPageTitles[2]} />} />
            <Route component={NoMatchPage} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </Theme>
  );
}

export default App;
