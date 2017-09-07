import React from "react";
import * as Constants from "../constants";

var styles = {
  base: {
    backgroundColor: Constants.COLOR_WHITE_HEX,
    borderRadius: 5,
    boxShadow: "0px 0px 5px #777",
    padding: "40px 50px",
    textAlign: "center",
    margin: "150px 25%"
  }
};

const Box = ({ children }) => {
  return (
    <div style={styles.base}>
      {children}
    </div>
  );
};

export default Box;
