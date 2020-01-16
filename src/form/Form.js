import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";

const formCard = {
  marginTop: "5%",
  marginLeft: "5%",
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
      genre: ""
    };

    this.handleChangeArtist = this.handleChangeArtist.bind(this);
    this.hangleChangeAlbumTitle = this.hangleChangeAlbumTitle.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
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

  handleSubmit = e => {
    e.preventDefault();

    const Artist = this.state.artist;
    const AlbumTitle = this.state.albumTitle;
    const Genre = this.state.genre;

    console.log({
      Artist,
      AlbumTitle,
      Genre
    });

    this.setState({
      artist: "",
      albumTitle: "",
      genre: ""
    });
  };

  render() {
    return (
      <div className="form">
        <Card style={formCard}>
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
                rows="5"
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
                rows="5"
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
                rows="5"
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
