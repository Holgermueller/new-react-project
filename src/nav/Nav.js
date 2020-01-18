import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Card } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import AlbumIcon from "@material-ui/icons/Album";
import MicIcon from "@material-ui/icons/Mic";

const navStyles = {
  width: "100%",
  bottom: "0",
  position: "absolute",
  backgroundColor: "blue",
  color: "white"
};

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Card style={navStyles}>
          <BottomNavigation showLabels>
            <BottomNavigationAction
              label="Home"
              value="Home"
              icon={<HomeIcon />}
              component={RouterLink}
              to="/"
            />
            <BottomNavigationAction
              label="Artist"
              value="Artist"
              icon={<PersonIcon />}
              component={RouterLink}
              to="/artist"
            />
            <BottomNavigationAction
              label="Album"
              icon={<AlbumIcon />}
              component={RouterLink}
              to="/album"
            />
            <BottomNavigationAction
              label="Format"
              icon={<MicIcon />}
              component={RouterLink}
              to="/format"
            />
            <BottomNavigationAction
              label="Genre"
              component={RouterLink}
              to="/genre"
            />
          </BottomNavigation>
        </Card>
      </div>
    );
  }
}
