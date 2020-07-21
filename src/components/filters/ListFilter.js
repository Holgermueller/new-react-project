import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export default class ListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
  }
  showForm = () => {};

  render() {
    return (
      <div>
        <TextField
          id="textField"
          style={{}}
          label="Filter List..."
          variant="outlined"
          color="secondary"
        />
      </div>
    );
  }
}
