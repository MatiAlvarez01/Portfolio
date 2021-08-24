import './App.css';
import "./Fonts.css";
/*import logo from './logo.svg';*/
import styled from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LanguageSelect from './components/LanguageSelect/LanguageSelect';
import LandingEn from './components/Languages/English/Landing/LandingEn';
import LandingEs from './components/Languages/Español/Landing/LandingEs';
import NavBarEs from './components/Languages/Español/NavBar/NavbarEs';
import NavBarEn from './components/Languages/English/NavBar/NavBarEn';
import Social from './components/Social/Social';

const WebContainDiv = styled.div`
  padding: 2% 10% 2% 10%;
  background-color: whitesmoke;
  @media screen and (min-width: 768px) {
    padding: 2% 10% 2% 10%;
  }
  @media screen and (min-width: 1024px) {
    padding: 1% 7% 2% 7%;
  }
`

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LanguageSelect />
        </Route>
        <WebContainDiv>
          <Social />
          <Route exact path="/español">
            <NavBarEs />
            <LandingEs />
          </Route>
          <Route exact path="/english">
            <NavBarEn />
            <LandingEn />
          </Route>
        </WebContainDiv>
      </Switch>
    </Router>
  );
}

export default App;
