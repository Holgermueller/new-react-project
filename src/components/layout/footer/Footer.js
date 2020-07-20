import React from "react";
import { Card } from "@material-ui/core";

const footer = {
  textAlign: "center",
  bottom: "0",
  width: "100%",
  position: "fixed",
  backgroundColor: "white",
  padding: "2px",
};

function Footer() {
  return (
    <div className="Footer">
      <footer style={footer}>
        <Card> &copy; 2020 | Holger Mueller</Card>
      </footer>
    </div>
  );
}

export default Footer;
