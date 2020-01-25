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
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      username: "",
      password: ""
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

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  clearForm = () => {
    this.setState({
      username: "",
      password: ""
    });
  };

  login = () => {
    this.clearForm();
    this.closeForm();
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
          </DialogContent>

          <DialogActions>
            <Button onClick={this.closeForm}>Cancel</Button>

            <Button type="submit" value="Submit" onClick={this.login}>
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
