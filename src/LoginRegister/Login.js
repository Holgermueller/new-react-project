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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: "",
      password: "",
      error: ""
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  openForm = () => {
    this.setState({ open: true });
  };

  closeForm = () => {
    this.setState({ open: false });
  };

  validateForm = e => {
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

  validatePassword = password => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(this.state.password);
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value, error: "" });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value, error: "" });
  };

  clearForm = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  login = () => {
    this.clearForm();
  };

  render() {
    const checkForError = this.state.error;
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
                onChange={this.handleUsernameChange}
                fullWidth
              />
              <TextField
                type="text"
                label="Password"
                value={this.state.password}
                variant="outlined"
                style={textfield}
                onChange={this.handlePasswordChange}
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
            <Button onClick={this.closeForm}>Cancel</Button>

            <Button type="submit" value="Submit" onClick={this.validateForm}>
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
