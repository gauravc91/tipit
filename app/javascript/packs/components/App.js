import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";
import Box from "./Box";
import ControlPanel from "./ControlPanel";
import checkered from "../assets/images/checkered.png";
import default_logo from "../assets/images/default_logo.png";
import * as Constants from "../constants";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { RIEInput, RIETextArea } from "riek";

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
  },
  tabs: {
    padding: 10
  },
  tabLink: {
    height: "30px",
    lineHeight: "30px",
    padding: "0 15px",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    display: "inline-block"
  },
  content: {
    padding: 10
  }
};

const App = ({ state, actions }) => {
  return (
    <Tabs className="tabs tabs-1" style={styles.tabs}>
      <div className="tab-links">
        <TabLink to="tab1" style={styles.tabLink}>Editor</TabLink>
        <TabLink to="tab2" style={styles.tabLink}>Campaign Setup</TabLink>
      </div>

      <div className="content" style={styles.content}>
        <TabContent for="tab1">
          <Editor state={state} actions={actions} />
        </TabContent>
        <TabContent for="tab2">
          <h2>Tab2 content</h2>
          <div>(╯°□°）╯︵ ┻━┻)</div>
        </TabContent>
      </div>
    </Tabs>
  );
};

const Editor = ({ state, actions }) => {
  return (
    <div
      style={{
        ...styles.editor,
        backgroundImage: `url(${state.bg ? state.bg : checkered})`
      }}
    >
      <Box>
        <img
          src={state.logo ? state.logo : default_logo}
          style={{ ...styles.logo, width: `${50 * state.logo_size}` }}
        />
        <br />
        <TitleSetting title={state.title} actions={actions} />
        <br />
        <DescriptionSetting description={state.description} actions={actions} />
      </Box>
    </div>
  );
};

const TitleSetting = ({ title, actions }) => {
  let onChange = obj => {
    actions.updateTitle(obj.title);
  };
  return <RIEInput value={title} change={onChange} propName="title" />;
};

const DescriptionSetting = ({ description, actions }) => {
  let onChange = obj => {
    actions.updateDescription(obj.description);
  };
  return (
    <RIETextArea value={description} change={onChange} propName="description" />
  );
};

function mapStateToProps(state) {
  return {
    state: state.AppReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
