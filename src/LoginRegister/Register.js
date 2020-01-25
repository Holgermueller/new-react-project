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
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
  }

  openForm = () => {
    this.setState({ open: true });
  };

  closeForm = () => {
    this.setState({ open: false });
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleConfirmPasswordChange = e => {
    this.setState({ confirmPassword: e.target.value });
  };

  checkUsername = () => {};

  checkEmail = () => {};

  validatePassword = () => {};

  confirmPassword = () => {};

  clearForm = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  register = () => {
    this.clearForm();
    this.closeForm();
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
                onChange={this.handleUsernameChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPasswordChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
            </form>

            <span>Errors: (Errors will appear here.)</span>
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
