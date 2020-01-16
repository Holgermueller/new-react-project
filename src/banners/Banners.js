import React from "react";
import Artist from "./Artist";
import AlbumTitle from "./AlbumTitle";
import Genre from "./Genre";
import Format from "./Format";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";

const bannersStyles = {
  float: "right",
  width: "45%",
  marginRight: "3%"
};

function BannersDiv() {
  return (
    <div className="banners">
      <Card style={bannersStyles}>
        <CardContent>
          <Typography variant="h3">Library:</Typography>
        </CardContent>

        <Divider variant="middle" />
        <Artist />
        <AlbumTitle />
        <Genre />
        <Format />
      </Card>
    </div>
  );
}

export default BannersDiv;
