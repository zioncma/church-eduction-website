// import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import Theme from "./components/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import NewsFeedPage from './components/NewsFeedPage';
import EducationPage from './components/EducationPage';
import GrowthPage from './components/GrowthPage';

function App() {
  //Routing tabs
  const allTabs = ["/news", "/growth", "/course"];


  return (
    <Theme>
      <BrowserRouter>
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
            <Route path={allTabs[0]} render={() => <NewsFeedPage />} />
            <Route path={allTabs[1]} render={() => <GrowthPage />} />
            <Route path={allTabs[2]} render={() => <EducationPage />} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Theme>


  );
}

export default App;
