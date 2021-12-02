import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalStyles } from "./themes/globalStyles";
import { lightTheme, darkTheme } from "./themes/themes"

import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
