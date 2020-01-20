import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
import Form from "../form/Form";
import Recent from "../recent/Recent";

const pageHeader = {
  margin: "8% auto 0 auto",
  width: "55%",
  textAlign: "center"
};

export default class Home extends Component {
  render() {
    return (
      <div className="dashboard">
        <Card style={pageHeader}>
          <CardContent>
            <h1>Hello, Name,</h1>
          </CardContent>
        </Card>
        <Form />
        <Recent />
      </div>
    );
  }
}
