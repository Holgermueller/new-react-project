import React from "react";
import Artist from "./Artist";
import AlbumTitle from "./AlbumTitle";
import Genre from "./Genre";
import { Card } from "@material-ui/core";

const bannersStyles = {
  float: "right",
  width: "45%",
  marginRight: "3%"
};

function BannersDiv() {
  return (
    <div className="banners">
      <Card style={bannersStyles}>
        <Artist />
        <AlbumTitle />
        <Genre />
      </Card>
    </div>
  );
}

export default BannersDiv;
