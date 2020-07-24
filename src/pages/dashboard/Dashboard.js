import React, { Component } from "react";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import ItemDisplay from "./ItemDisplay";

const dashCard = {
  margin: " 15% auto",
  width: "85%",
};

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Card style={dashCard}>
          <CardHeader title="Your wish list." />
          <CardContent>
            <ItemDisplay />
          </CardContent>
        </Card>
      </div>
    );
  }
}
