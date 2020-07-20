import React, { Component } from "react";
import { Card } from "@material-ui/core";

const dashCard = {
  margin: " 7% auto",
  width: "85%",
};

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Card style={dashCard}>
          <h1>This is the dashbaord</h1>
        </Card>
      </div>
    );
  }
}
