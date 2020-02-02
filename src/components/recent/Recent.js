import React, { Component } from "react";
import { Card, CardContent, Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const recentsCard = {
  width: "45%",
  float: "right",
  marginTop: "2%",
  marginRight: "3%"
};

const albumCard = {
  margin: "2% auto"
};

const AlbumListing = props => (
  <Card style={albumCard}>
    <h2>{props.singleAlbum.albumTitle}</h2>
  </Card>
);

class Recent extends Component {
  componentDidMount = state => {
    return {
      albumsFromStore: state
    };
  };

  loadRecentAlbums = () => {
    return this.albums.map((singleAlbum, i) => {
      return <AlbumListing singleAlbum={singleAlbum} key={i} />;
    });
  };

  render() {
    console.log(this.props);
    const { albums } = this.props;
    return (
      <div className="recents-component">
        <Card style={recentsCard}>
          <CardContent>
            <h1>Recent Albums:</h1>
            <Divider />
            {albums ? (
              <Grid>{this.loadRecentAlbums()}</Grid>
            ) : (
              <Grid>
                <Card>
                  <h1>Add some albums already!</h1>
                </Card>
              </Grid>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default connect()(Recent);
