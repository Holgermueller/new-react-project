import React from "react";
import { Card } from "@material-ui/core";

const meterCard = {
  width: " 45%",
  margin: "5% auto",
  textAlign: "center"
};

function Meter() {
  return (
    <div className="meter">
      <Card style={meterCard}>
        <h2>The meter will go here.</h2>
      </Card>
    </div>
  );
}

export default Meter;
