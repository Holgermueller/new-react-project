import React, { Component } from "react";
import { Card, CardContent, TextField } from "@material-ui/core";

const entryField = {
  margin: "2% auto"
};

const pageHeader = {
  textAlign: "center",
  width: "85%",
  margin: "7% auto"
};

export default class Format extends Component {
  render() {
    return (
      <div>
        <Card style={pageHeader}>
          <CardContent>
            <h1>Formats</h1>
            <TextField
              style={entryField}
              label="Filter Formats..."
              name="filterFormats"
              type="text"
              variant="outlined"
              fullWidth
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}
