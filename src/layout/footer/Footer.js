import React from "react";

const footer = {
  textAlign: "center",
  bottom: "0",
  position: "absolute"
};

function Footer() {
  return (
    <div className="Footer">
      <footer style={footer}>&copy; 2020 / Holger Mueller </footer>
    </div>
  );
}

export default Footer;
