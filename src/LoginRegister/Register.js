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

export default class Register extends Component {
  state = {
    open: false,
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  openForm = () => {
    this.setState({ open: true });
  };

  closeForm = () => {
    this.setState({ open: false });
  };

  checkUsername = () => {};

  checkEmail = () => {};

  validatePassword = () => {};

  confirmPassword = () => {};

  clearForm = () => {};

  register = () => {
    console.log("click");
  };

  render() {
    return (
      <div>
        <Button onClick={this.openForm}>
          <h1>Sign Up</h1>
        </Button>

        <Dialog open={this.state.open}>
          <DialogTitle>Sign up here:</DialogTitle>

          <DialogContent>
            <form>
              <TextField
                type="text"
                label="Username"
                value={this.state.username}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Email"
                value={this.state.email}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Password"
                value={this.state.password}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Confirm Password"
                value={this.state.confirmPassword}
                variant="outlined"
                style={textfield}
                fullWidth
              />
            </form>
          </DialogContent>

          <DialogActions>
            <Button
              aria-label="cancel"
              color="secondary"
              onClick={this.closeForm}
            >
              Cancel
            </Button>

            <Button color="primary" onClick={this.register}>
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
