import React from "react";
import { Card } from "@material-ui/core";

const albumCard = {
  margin: "2% auto"
};

const RecentAlbumSummary = ({ album }) => {
  return (
    <div>
      <Card style={albumCard}>
        <h1>{album.AlbumTitle}</h1>
      </Card>
    </div>
  );
};

export default RecentAlbumSummary;
