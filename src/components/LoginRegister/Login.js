import React, { Component } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";

const buttonStyles = {
  textAlign: "center",
};

const textfield = {
  margin: "2% auto",
};

const errors = {
  textAlign: "center",
  color: "red",
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: "",
      password: "",
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

  validateForm = (e) => {
    e.preventDefault();
    if (!this.state.username && !this.state.password) {
      this.setState({ error: "You must fill out all of the fields." });
    } else if (!this.state.username) {
      this.setState({ error: "You must enter a username" });
    } else if (!this.state.password) {
      this.setState({ error: "You must enter a password." });
    } else if (!this.validatePassword(this.state.password)) {
      this.setState({ error: "That password is not valid." });
    } else {
      this.login();
    }
  };

  validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(this.state.password);
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  clearForm = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  login = () => {
    this.clearForm();
  };

  render() {
    const checkForError = this.state.error;
    return (
      <div>
        <Button
          variant="outlined"
          style={buttonStyles}
          fullWidth
          onClick={this.openForm}
        >
          <h1>Login</h1>
        </Button>

        <Dialog open={this.state.open}>
          <DialogTitle>Log in here:</DialogTitle>

          <DialogContent>
            <form>
              <TextField
                id="username"
                type="text"
                label="Username"
                value={this.state.username}
                variant="outlined"
                style={textfield}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="password"
                type="text"
                label="Password"
                value={this.state.password}
                variant="outlined"
                style={textfield}
                onChange={this.handleChange}
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
              onClick={this.closeForm}
              color="secondary"
              variant="outlined"
            >
              Cancel
            </Button>

            <Button
              color="primary"
              variant="outlined"
              type="submit"
              value="Submit"
              onClick={this.validateForm}
              disabled={!this.state.username || !this.state.password}
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
