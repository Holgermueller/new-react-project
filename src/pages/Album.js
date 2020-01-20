import React, { Component } from "react";
import { Card, CardContent, TextField } from "@material-ui/core";

const entryField = {
  margin: "2% auto"
};

const pageHeader = {
  textAlign: "center",
  width: "55%",
  margin: "7% auto"
};

const pageContent = {
  textAlign: "center",
  width: "85%",
  margin: "auto"
};

export default class Album extends Component {
  render() {
    return (
      <div className="album">
        <div>
          <Card style={pageHeader}>
            <CardContent>
              <h1>Albums</h1>
              <TextField
                style={entryField}
                label="Filter Albums..."
                name="filterAlbums"
                type="text"
                variant="outlined"
                fullWidth
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <Card style={pageContent}>
            <CardContent>
              <h1>Albums will appear here:</h1>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
