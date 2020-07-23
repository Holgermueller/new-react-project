import React, { Component } from "react";
import { TextField } from "@material-ui/core";

const inputField = {
  margin: "4px auto",
};

export default class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      title: "",
      genre: "",
      label: "",
      format: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <TextField
          fullWidth
          margin="dense"
          style={inputField}
          label="Artist/Author"
          variant="outlined"
          value={this.state.artist}
          onChange={this.handleChange}
          id="artist"
        />
        <TextField
          fullWidth
          margin="dense"
          style={inputField}
          label="Title"
          variant="outlined"
          value={this.state.title}
          onChange={this.handleChange}
          id="title"
        />
        <TextField
          fullWidth
          margin="dense"
          style={inputField}
          label="Genre"
          variant="outlined"
          value={this.state.genre}
          onChange={this.handleChange}
          id="genre"
        />
        <TextField
          fullWidth
          margin="dense"
          style={inputField}
          label="Label/Publisher"
          variant="outlined"
          value={this.state.label}
          onChange={this.handleChange}
          id="label"
        />
        <TextField
          fullWidth
          margin="dense"
          style={inputField}
          label="Format (i.e. book, music,..."
          variant="outlined"
          value={this.state.format}
          onChange={this.handleChange}
          id="format"
        />
      </div>
    );
  }
}
