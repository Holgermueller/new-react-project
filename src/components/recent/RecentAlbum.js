import React, { Component } from "react";
import { Card, CardContent, Divider } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import RecentAlbumCard from "./RecentAlbumCard";

const recentsCard = {
  width: "45%",
  float: "right",
  marginTop: "2%",
  marginRight: "3%"
};

const mapStateToProps = state => {
  return {
    albums: state.albums.albums
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

export default connect(mapStateToProps)(Recent);
