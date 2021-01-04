// import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import Theme from "./components/Theme";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import NewsFeedPage from './components/NewsFeedPage';
import EducationPage from './components/EducationPage';
import GrowthPage from './components/GrowthPage';

function App() {
  //Routing tabs
  const allTabs = ["/news", "/projects", "/aboutme"];

  return (
    <Theme>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Nav routes={allTabs}>
            <Route
              path="/"
              render={({ location }) => (
                <>
                  <NavTabs routes={allTabs} value={location.pathname} />
                </>
              )}
            />
          </Nav>

          <Switch>
            <Route exact path={allTabs[0]} render={() => <NewsFeedPage />} />
            <Route path={allTabs[1]} render={() => <EducationPage />} />
            <Route path={allTabs[2]} render={() => <GrowthPage />} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Theme>


  );
}

export default App;
