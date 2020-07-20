import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddAlbumDialog from "../dialogs/AddAlbumDialog";

const navStyles = {
  width: "100%",
  position: "fixed",
};

const actions = {
  float: "right",
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
                Album Wish List
              </h3>
            </Button>

            <div style={actions}>
              <AddAlbumDialog />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
