import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { createItem } from "../../../store/actions/listActions";

const inputField = {
  margin: "4px auto",
};

class AddItemForm extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createItem(this.state);
  };

  clearForm = () => {
    this.setState({
      artist: "",
      title: "",
      genre: "",
      label: "",
      format: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <Button
          type="submit"
          style={inputField}
          fullWidth
          color="primary"
          onClick={this.props.handleClickClose}
        >
          Submit
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createItem: (listItem) => dispatch(createItem(listItem)),
  };
};

export default connect(null, mapDispatchToProps)(AddItemForm);
