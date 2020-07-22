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

const inputField = {
  margin: "4px auto",
};

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
          <DialogTitle>Title</DialogTitle>
          <DialogContent>
            <DialogContentText>Words here</DialogContentText>
            <TextField
              fullWidth
              margin="dense"
              style={inputField}
              label="Artist"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="dense"
              style={inputField}
              label="Album Title"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="dense"
              style={inputField}
              label="Genre"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="dense"
              style={inputField}
              label="Label"
              variant="outlined"
            />
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
