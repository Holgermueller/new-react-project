import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";

const textfield = {
  margin: "2% auto",
};

const errors = {
  textAlign: "center",
  color: "red",
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
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  openForm = () => {
    this.setState({ open: true });
  };

  closeForm = () => {
    this.setState({ open: false });
    this.clearForm();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  validateForm = (e) => {
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

  validateEmail = (email) => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(this.state.email);
  };

  validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(this.state.password);
  };

  clearForm = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
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
                id="username"
                type="text"
                label="Username *"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                id="email"
                type="text"
                label="Email *"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                id="password"
                type="text"
                label="Password *"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
              <TextField
                id="confirmPassword"
                type="text"
                label="Confirm Password *"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                variant="outlined"
                style={textfield}
                fullWidth
              />
            </form>

            <span>
              <h6>* denotes required field.</h6>
            </span>

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
