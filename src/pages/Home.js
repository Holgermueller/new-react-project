import React, { Component } from "react";
import Register from "../components/LoginRegister/Register.js";
import Login from "../components/LoginRegister/Login.js";
import { Card } from "@material-ui/core";

const loginRegisterDisplay = {
  margin: "15% auto",
  width: "55%",
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
