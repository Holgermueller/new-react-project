import React, { Component } from "react";
import { Card } from "@material-ui/core";

export default class Recent extends Component {
  render() {
    return (
      <div>
        <Card style={recentsCard}>
          <h1>Recent Albums</h1>
        </Card>
      </div>
    );
  }
}
