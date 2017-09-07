import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";
import Box from "./Box";
import ControlPanel from "./ControlPanel";
import checkered from "../assets/images/checkered.png";
import default_logo from "../assets/images/default_logo.png";
import * as Constants from "../constants";

var styles = {
  base: {
    textAlign: "center",
    display: "flex"
  },
  editor: {
    border: "2px solid #ccc",
    backgroundSize: "cover"
  },
  logo: {},
  description: {
    color: Constants.COLOR_GREY_HEX
  }
};

const App = ({ bg, logo, logo_size, title, description, actions }) => {
  return (
    <div style={styles.base}>
      <div className="col-sm-4">
        <ControlPanel />
      </div>
      <div
        className="col-sm-8"
        style={{
          ...styles.editor,
          backgroundImage: `url(${bg ? bg : checkered})`
        }}
      >
        <Box>
          <img
            src={logo ? logo : default_logo}
            style={{ ...styles.logo, width: `${50 * logo_size}` }}
          />
          <h1>{title}</h1>
          <h5 style={styles.description}>{description}</h5>
        </Box>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return state.AppReducer;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
