import React, { Component } from "react";
import { Card, CardContent, Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import db from "../firebase/firebaseInit";

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

export default class Recent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsFromDb: []
    };
  }

  componentDidMount = () => {
    db.collection("albums").onSnapshot(
      querySnapshot => {
        let albumsFromDb = [];
        querySnapshot.forEach(doc => {
          let recentAlbumData = {
            albumId: doc.id,
            albumTitle: doc.data().AlbumTitle
          };
          albumsFromDb.push(recentAlbumData);
        });
        this.setState({ albumsFromDb: albumsFromDb });
      },
      err => {
        console.log(err);
      }
    );
  };

  loadRecentAlbums = () => {
    return this.state.albumsFromDb.map((singleAlbum, i) => {
      return <AlbumListing singleAlbum={singleAlbum} key={i} />;
    });
  };

  render() {
    return (
      <div className="recents-component">
        <Card style={recentsCard}>
          <CardContent>
            <h1>Recent Albums:</h1>
            <Divider />
            {this.state.albumsFromDb ? (
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
