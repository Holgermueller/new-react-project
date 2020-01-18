import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const appTitle = {
  color: "blue",
  textAlign: "center"
};

function Header() {
  return (
    <div className="header">
      <AppBar position="static" color="inherit">
        <h1
          className="app-title"
          style={appTitle}
          component={RouterLink}
          to="/"
        >
          <LibraryMusicIcon />
          Album Organizer
        </h1>
      </AppBar>
    </div>
  );
}

export default Header;
