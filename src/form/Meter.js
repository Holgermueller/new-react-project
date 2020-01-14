import React from "react";
import { Card } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";

const meterCard = {
  width: " 45%",
  margin: "5% auto",
  textAlign: "center"
};

const toxicityMeter = {
  width: "95%",
  margin: "auto"
};

function Meter() {
  return (
    <div className="meter">
      <Card style={meterCard}>
        <h2>Toxicity score:</h2>

        <LinearProgress style={toxicityMeter} variant="determinate" />
      </Card>
    </div>
  );
}

export default Meter;
