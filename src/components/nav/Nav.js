import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button } from "@material-ui/core";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddAlbumDialog from "../dialogs/addItem/AddAlbumDialog";
import ListFilter from "../filters/ListFilter";

const navStyles = {
  width: "100%",
  position: "fixed",
};

const actions = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-evenly",
};

export default class Nav extends Component {
  logOut = () => {
    console.log("click");
  };

  render() {
    return (
      <div className="nav">
        <AppBar style={navStyles} color="secondary">
          <ul style={actions}>
            <li>
              <Button component={RouterLink} to="/dashboard">
                <h3>
                  <LibraryMusicIcon />
                  Amazonless Wish List
                </h3>
              </Button>
            </li>

            <li>
              <ListFilter />
            </li>

            <li>
              <AddAlbumDialog />
            </li>

            <li>
              <Button onClick={this.logOut} component={RouterLink} to="/">
                Log Out
              </Button>
            </li>
          </ul>
        </AppBar>
      </div>
    );
  }
}
