import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isMobile } from 'react-device-detect';


import { GlobalStyles } from "./themes/globalStyles";
import { lightTheme, darkTheme } from "./themes/themes";

import Header from './components/Header';
import HeaderMobile from "./components/HeaderMobile";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Article from "./pages/Article";
import Community from "./pages/Community";
import Result from "./pages/Result";

import * as SC from './AppStyled';

function App() {


  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <SC.Container>
        <Router>
          {isMobile ? <HeaderMobile/> : <Header />}
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/search" exact component={() => <Search />} />
            <Route path="/article" exact component={() => <Article />} />
            <Route path="/community" exact component={() => <Community />} />
            <Route path="/results" exact component={() => <Result />} />
          </Switch>
        </Router>
      </SC.Container>
    </ThemeProvider>
  );
}

export default App;
