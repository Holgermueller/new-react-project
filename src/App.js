import React from "react";
import Header from "./layout/header/Header";
import Meter from "./form/Meter";
import Form from "./form/Form";
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

      <Meter />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
