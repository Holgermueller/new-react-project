import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layout/header/Header";
import Form from "./form/Form";
import Artist from "./pages/Artist";
import Album from "./pages/Album";
import Format from "./pages/Format";
import Genre from "./pages/Genre";
import Footer from "./layout/footer/Footer";
import { Switch, FormControlLabel } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";

const darkThemeControl = {
  marginLeft: "5%",
  marginTop: "3%"
};

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  return (
    <div className="App">
      <Router>
        <Header />

        <ThemeProvider theme={theme}>
          <div style={darkThemeControl}>
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Dark Theme"
              theme={theme}
            />
          </div>
        </ThemeProvider>

        <Route path="/" exact component={Form} />
        <Route path="/artist" component={Artist} />
        <Route path="/album" component={Album} />
        <Route path="/format" component={Format} />
        <Route path="/genre" component={Genre} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
