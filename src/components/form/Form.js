import React, { Component } from "react";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { createAlbum } from "../../store/actions/albumActions";
import { connect } from "react-redux";

const formCard = {
  marginTop: "2%",
  marginLeft: "5%",
  marginBottom: "7%",
  width: "45%",
  position: "absolute"
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

const mapDispatchToProps = dispatch => {
  return {
    createAlbum: album => dispatch(createAlbum(album))
  };
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      albumTitle: "",
      genre: "",
      format: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.createAlbum(this.state);

    // db.collection("albums")
    //   .add({
    //     Artist: this.state.artist,
    //     AlbumTitle: this.state.albumTitle,
    //     Genre: this.state.genre,
    //     Format: this.state.format
    //   })
    //   .then(() => {
    //     console.log("addition success!!");
    //   })
    //   .catch(err => {
    //     console.log("Error: " + err);
    //   });

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
                id="artist"
                value={this.state.artist}
                label="Artist"
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
              ></TextField>
              <TextField
                style={entryField}
                type="text"
                name="Album"
                id="albumTitle"
                value={this.state.albumTitle}
                label="Album Title"
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
              ></TextField>
              <TextField
                style={entryField}
                type="text"
                name="Genre"
                id="genre"
                value={this.state.genre}
                label="Genre"
                variant="outlined"
                onChange={this.handleChange}
                fullWidth
              ></TextField>
              <TextField
                style={entryField}
                type="text"
                name="Format"
                id="format"
                value={this.state.format}
                label="Format"
                variant="outlined"
                onChange={this.handleChange}
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

export default connect(null, mapDispatchToProps)(Form);
