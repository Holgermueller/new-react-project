import React from "react";
import { AppBar } from "@material-ui/core";

const appTitle = {
  color: "blue",
  textAlign: "center"
};

function Header() {
  return (
    <div className="header">
      <AppBar position="static" color="inherit">
        <h1 className="app-title" style={appTitle}>
          This is the header for now.
        </h1>
      </AppBar>
    </div>
  );
}

export default Header;
