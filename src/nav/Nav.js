import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import AlbumIcon from "@material-ui/icons/Album";
import MicIcon from "@material-ui/icons/Mic";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const navStyles = {
  width: "100%",
  position: "absolute"
};

const navLinks = {
  marginLeft: "35%"
};

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <AppBar style={navStyles} color="secondary">
          <Toolbar>
            <Button component={RouterLink} to="/">
              <h3>
                <LibraryMusicIcon />
                Album Organizer
              </h3>
            </Button>

            <div style={navLinks}>
              <Button component={RouterLink} to="/">
                <HomeIcon />
                Home
              </Button>
              <Button component={RouterLink} to="/artist">
                <PersonIcon />
                Artist
              </Button>
              <Button component={RouterLink} to="/album">
                <MicIcon />
                Album
              </Button>
              <Button component={RouterLink} to="/format">
                <AlbumIcon />
                Format
              </Button>
              <Button component={RouterLink} to="/genre">
                Genre
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
