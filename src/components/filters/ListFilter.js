import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

export default class ListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }
  showForm = () => {
    this.setState = { visibility: true };
  };

  render() {
    return (
      <div>
        <Button onClick={this.showForm}>Filter List</Button>
        <TextField style={{}} label="Search List..." />
      </div>
    );
  }
}
