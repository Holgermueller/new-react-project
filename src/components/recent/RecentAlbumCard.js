import React from "react";
import RecentAlbumSummary from "./RecentAlbumSummary";

const RecentCard = ({ albums }) => {
  return (
    <div>
      {albums &&
        albums.map(album => {
          return <RecentAlbumSummary album={album} />;
        })}
    </div>
  );
};

export default RecentCard;
