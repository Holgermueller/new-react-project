import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from "@material-ui/core";

const textfield = {
  margin: "2% auto"
};

export default class Login extends Component {
  state = {
    open: false,
    username: "",
    password: ""
  };

  openForm = () => {
    this.setState({ open: true });
  };

  closeForm = () => {
    this.setState({ open: false });
  };

  login = () => {
    console.log("click");
  };

  render() {
    return (
      <div>
        <Button onClick={this.openForm}>
          <h1>Login</h1>
        </Button>

        <Dialog open={this.state.open}>
          <DialogTitle>Log in here:</DialogTitle>

          <DialogContent>
            <form>
              <TextField
                type="text"
                label="Username"
                value={this.state.username}
                variant="outlined"
                style={textfield}
                fullWidth
              ></TextField>
              <TextField
                type="text"
                label="Password"
                value={this.state.password}
                variant="outlined"
                style={textfield}
                fullWidth
              ></TextField>
            </form>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.closeForm}>Cancel</Button>

            <Button onClick={this.login}>Login</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
