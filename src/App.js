import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyles } from "./themes/globalStyles";
import { lightTheme, darkTheme } from "./themes/themes";

import Header from './components/Header';

import Home from "./pages/Home";

import * as SC from './AppStyled';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <SC.Container>
        <Router>
          <Header actual={"search"} />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/search" exact component={() => <Home />} />
            <Route path="/article" exact component={() => <Home />} />
            <Route path="/community" exact component={() => <Home />} />
          </Switch>
        </Router>
      </SC.Container>
    </ThemeProvider>
  );
}

export default App;
