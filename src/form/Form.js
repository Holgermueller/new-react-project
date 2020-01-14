import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";

const formCard = {
  margin: "5% auto",
  width: "55%"
};

const formStyles = {
  margin: "auto",
  textAlign: "center"
};

const buttonStyles = {
  margin: "2% auto"
};

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageToCheck: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ messageToCheck: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const messageToCheck = this.state.messageToCheck;
    console.log(messageToCheck);

    this.setState({
      messageToCheck: ""
    });
  };

  render() {
    return (
      <div className="form">
        <Card style={formCard}>
          <form onSubmit={this.handleSubmit}>
            <CardContent style={formStyles}>
              <TextField
                type="text"
                name="messageToCheck"
                value={this.state.messageToCheck}
                id="outlined-basic"
                label="Check your message here..."
                variant="outlined"
                onChange={this.handleChange}
                rows="5"
                multiline
                fullWidth
              ></TextField>
              <Divider />
              <CardActions>
                <Button
                  type="submit"
                  value="Submit"
                  style={buttonStyles}
                  variant="contained"
                >
                  Submit
                </Button>
              </CardActions>
            </CardContent>
          </form>
        </Card>
      </div>
    );
  }
}
