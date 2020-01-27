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

const errors = {
  textAlign: "center",
  color: "red"
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
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
    this.clearForm();
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value, error: "" });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value, error: "" });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value, error: "" });
  };

  handleConfirmPasswordChange = e => {
    this.setState({ confirmPassword: e.target.value, error: "" });
  };

  validateForm = e => {
    e.preventDefault();

    if (
      !this.state.username &&
      !this.state.email &&
      !this.state.password &&
      !this.state.confirmPassword
    ) {
      this.setState({ error: "You must fill out all of the fields." });
    } else if (!this.state.username) {
      this.setState({ error: "You must provide a username." });
    } else if (!this.state.email) {
      this.setState({ error: "You must provide an email." });
    } else if (!this.validateEmail(this.state.email)) {
      this.setState({ error: "Email is not valid." });
    } else if (!this.validatePassword(this.state.password)) {
      this.setState({ error: "Password does not fit criteria." });
    } else if (!this.state.password) {
      this.setState({ error: "You must provide a password" });
    } else if (!this.state.confirmPassword) {
      this.setState({ error: "You must provide a confirmation password." });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({ error: "Passwords must match." });
    } else {
      this.register();
    }
  };

  validateUsername = () => {};

  validateEmail = email => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(this.state.email);
  };

  validatePassword = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(this.state.password);
  };

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
  };

  render() {
    const checkForError = this.state.error;
    return (
      <div>
        <Button variant="outlined" fullWidth onClick={this.openForm}>
          <h1>Sign Up</h1>
        </Button>

        <Dialog open={this.state.open}>
          <DialogTitle>Sign up here:</DialogTitle>

          <DialogContent>
            <form>
              <TextField
                type="text"
                label="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                type="text"
                label="Confirm Password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPasswordChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
            </form>

            <span>
              {checkForError ? (
                <h2 style={errors}>Errors: {this.state.error}</h2>
              ) : (
                <p />
              )}
            </span>
          </DialogContent>

          <DialogActions>
            <Button
              aria-label="cancel"
              color="secondary"
              variant="outlined"
              onClick={this.closeForm}
            >
              Cancel
            </Button>

            <Button
              color="primary"
              variant="outlined"
              onClick={this.validateForm}
              disabled={
                !this.state.username ||
                !this.state.email ||
                !this.state.password ||
                !this.state.confirmPassword
              }
            >
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
