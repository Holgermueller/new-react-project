import React from "react";

const footer = {
  textAlign: "center",
  bottom: "0",
  width: "100%",
  position: "fixed",
  backgroundColor: "white"
};

function Footer() {
  return (
    <div className="Footer">
      <footer style={footer}>&copy; 2020 / Holger Mueller </footer>
    </div>
  );
}

export default Footer;
