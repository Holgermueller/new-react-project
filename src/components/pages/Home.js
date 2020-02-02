import React, { Component } from "react";
import Register from "../LoginRegister/Register";
import Login from "../LoginRegister/Login";
import { Card } from "@material-ui/core";

const loginRegisterDisplay = {
  margin: "15% auto",
  width: "55%"
};

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Card style={loginRegisterDisplay}>
          <Register />

          <Login />
        </Card>
      </div>
    );
  }
}
