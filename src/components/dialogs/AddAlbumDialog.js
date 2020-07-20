import React, { Component } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

export default class AddAlbumDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Add Item</Button>
        <Dialog open={this.state.open} onClose={this.handleClickClose}>
          <DialogTitle>Title</DialogTitle>
          <DialogContent>
            <DialogContentText>Words here</DialogContentText>
            <TextField autoFocus label="Title" />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose}>Cancel</Button>
            <Button onClick={this.handleClickClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
