import React, { Component } from "react";
import { Card, CardContent, Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import RecentAlbumCard from "./RecentAlbumCard";

const recentsCard = {
  width: "45%",
  float: "right",
  marginTop: "2%",
  marginRight: "3%"
};

const mapStateToProps = state => {
  console.log(state.firestore);
  return {
    albums: state.firestore.albums
  };
};

class Recent extends Component {
  render() {
    const { albums } = this.props;
    return (
      <div className="recents-component">
        <Card style={recentsCard}>
          <CardContent>
            <h1>Recent Albums:</h1>
            <Divider />
            <Grid>
              <RecentAlbumCard albums={albums} />
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "albums"
    }
  ])
)(Recent);
