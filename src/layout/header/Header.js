import React from "react";
import { Card } from "@material-ui/core";

const appTitle = {
  color: "blue",
  textAlign: "center"
};

function Header() {
  return (
    <div className="header">
      <Card tile>
        <h1 className="app-title" style={appTitle}>
          This is the header for now.
        </h1>
      </Card>
    </div>
  );
}

export default Header;
