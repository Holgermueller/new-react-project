import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AddItemFrom from "./AddForm";

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
        <Button onClick={this.handleClickOpen}>
          <h3>Add Item +</h3>
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClickClose}>
          <DialogTitle>Add an item</DialogTitle>
          <DialogContent>
            <DialogContentText>Words here</DialogContentText>

            <AddItemFrom handleClickClose={this.props.handleClickClose} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="secondary" fullWidth>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
