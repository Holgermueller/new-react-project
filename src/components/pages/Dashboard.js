import React, { Component } from "react";
import { Card, CardContent, Divider } from "@material-ui/core";

const pageHeader = {
  margin: "10% auto 0 auto",
  width: "55%",
  textAlign: "center",
};

export default class Home extends Component {
  render() {
    return (
      <div className="dashboard">
        <Card style={pageHeader}>
          <CardContent>
            <h1>Hello, Name,</h1>
            <Divider />
            <h3>Welcome back.</h3>
          </CardContent>
        </Card>
      </div>
    );
  }
}
