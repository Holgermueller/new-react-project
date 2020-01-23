import React, { Component } from "react";
import { Card, CardContent, Divider } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";

const recentsCard = {
  width: "45%",
  float: "right",
  marginTop: "2%",
  marginRight: "3%"
};

export default class Recent extends Component {
  render() {
    return (
      <div className="recents-component">
        <Card style={recentsCard}>
          <CardContent>
            <h1>Recent Albums:</h1>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText primary="Most-recent albums will appear here." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}
