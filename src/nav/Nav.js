import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";

const bannerStyles = {
  float: "right",
  width: "45%",
  marginRight: "3%"
};

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Card style={bannerStyles}>
          <CardContent>
            <Typography variant="h3">My Library:</Typography>
            <Divider />
          </CardContent>
        </Card>
      </div>
    );
  }
}
