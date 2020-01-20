import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";

const formCard = {
  marginTop: "2%",
  marginLeft: "5%",
  marginBottom: "7%",
  width: "45%",
  position: "fixed"
};

const formStyles = {
  margin: "auto",
  textAlign: "center"
};

const entryField = {
  margin: "2% auto"
};

const buttonStyles = {
  margin: "2% auto"
};

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      albumTitle: "",
      genre: "",
      format: ""
    };

    this.handleChangeArtist = this.handleChangeArtist.bind(this);
    this.hangleChangeAlbumTitle = this.hangleChangeAlbumTitle.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
    this.handleChangeFormat = this.handleChangeFormat.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeArtist = e => {
    this.setState({ artist: e.target.value });
  };

  hangleChangeAlbumTitle = e => {
    this.setState({ albumTitle: e.target.value });
  };

  handleChangeGenre = e => {
    this.setState({ genre: e.target.value });
  };

  handleChangeFormat = e => {
    this.setState({ format: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const Artist = this.state.artist;
    const AlbumTitle = this.state.albumTitle;
    const Genre = this.state.genre;
    const Format = this.state.format;

    console.log({
      Artist,
      AlbumTitle,
      Genre,
      Format
    });

    this.setState({
      artist: "",
      albumTitle: "",
      genre: "",
      format: ""
    });
  };

  render() {
    return (
      <div className="form">
        <Card style={formCard}>
          <CardContent>
            <h1>Add an album:</h1>
            <Divider />
          </CardContent>
          <form onSubmit={this.handleSubmit}>
            <CardContent style={formStyles}>
              <TextField
                style={entryField}
                type="text"
                name="Artist"
                value={this.state.artist}
                label="Artist"
                variant="outlined"
                onChange={this.handleChangeArtist}
                fullWidth
              ></TextField>
              <TextField
                style={entryField}
                type="text"
                name="Album"
                value={this.state.albumTitle}
                label="Album Title"
                variant="outlined"
                onChange={this.hangleChangeAlbumTitle}
                fullWidth
              ></TextField>
              <TextField
                style={entryField}
                type="text"
                name="Genre"
                value={this.state.genre}
                label="Genre"
                variant="outlined"
                onChange={this.handleChangeGenre}
                fullWidth
              ></TextField>
              <TextField
                style={entryField}
                type="text"
                name="Format"
                value={this.state.format}
                label="Format"
                variant="outlined"
                onChange={this.handleChangeFormat}
                fullWidth
              ></TextField>
              <Divider />
              <CardActions>
                <Button
                  type="submit"
                  value="Submit"
                  style={buttonStyles}
                  variant="contained"
                >
                  Submit
                </Button>
              </CardActions>
            </CardContent>
          </form>
        </Card>
      </div>
    );
  }
}
