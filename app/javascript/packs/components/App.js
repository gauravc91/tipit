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
import Button from "./Button";
import { ChromePicker } from "react-color";
import Select from "react-select";

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
  },
  toolbar: {
    borderRadius: 5,
    boxShadow: "0px 0px 5px #777",
    padding: 10,
    backgroundColor: Constants.COLOR_WHITE_HEX,
    position: "absolute"
  },
  input: {
    textAlign: "center",
    display: "flex",
    boxShadow: "none",
    width: "100%"
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
      <Toolbar state={state} actions={actions} />
      <Box>
        <img
          src={state.logo ? state.logo : default_logo}
          style={{ ...styles.logo, width: `${50 * state.logo_size}` }}
        />
        <br />
        <TitleText state={state} actions={actions} />
        <br />
        <DescriptionSetting description={state.description} actions={actions} />
      </Box>
    </div>
  );
};

const TitleText = ({ state, actions }) => {
  return (
    <input
      style={{
        ...styles.input,
        borderStyle: `${state.toolbar === "title" ? "solid" : "none"}`,
        fontSize: `${state.title.font_size}px`,
        fontStyle: state.title.font_style,
        fontWeight: state.title.font_weight,
        color: state.title.color,
        fontFamily: state.title.font_family
      }}
      type="text"
      aria-label="..."
      placeholder="Click to Edit"
      onChange={event => {
        actions.updateTitle("text", event.target.value);
      }}
      name="campaign[title]"
      onFocus={() => {
        actions.updateToolbar("title");
      }}
    />
  );
};

const DescriptionSetting = ({ description, actions }) => {
  let onChange = obj => {
    actions.updateDescription(obj.description);
  };
  return (
    <RIETextArea value={description} change={onChange} propName="description" />
  );
};

const Toolbar = ({ state, actions }) => {
  console.log("state.toolbar ", state.toolbar);
  return (
    <div>
      {state.toolbar === "title" &&
        <TitleSettings title={state.title} actions={actions} />}
    </div>
  );
};

const TitleSettings = ({ title, actions }) => {
  return (
    <div
      style={{
        ...styles.toolbar
      }}
    >
      <Button
        onClick={() => actions.updateTitle("font_size", 40)}
        label="h1"
        pressed={title.font_size == 40}
      />
      <Button
        onClick={() => actions.updateTitle("font_size", 30)}
        label="h2"
        pressed={title.font_size == 30}
      />
      <Button
        onClick={() => actions.updateTitle("font_size", 20)}
        label="h3"
        pressed={title.font_size == 20}
      />
      <Button
        style={{
          fontWeight: "bold"
        }}
        onClick={() => {
          let newFontWeight = title.font_weight == "bold" ? "normal" : "bold";
          actions.updateTitle("font_weight", newFontWeight);
        }}
        label="B"
        pressed={title.font_weight == "bold"}
      />
      <Button
        style={{
          fontStyle: "italic"
        }}
        onClick={() => {
          let newFontStyle = title.font_style == "italic" ? "normal" : "italic";
          actions.updateTitle("font_style", newFontStyle);
        }}
        label="I"
        pressed={title.font_style == "italic"}
      />
      <br />
      <Select
        value={title.font_family}
        options={[
          { value: "roboto", label: "Roboto" },
          { value: "serif", label: "Serif" }
        ]}
        onChange={selected => {
          actions.updateTitle("font_family", selected.value);
        }}
        searchable={false}
        clearable={false}
      />
      <br />
      <ChromePicker
        color={title.color}
        onChangeComplete={color => {
          actions.updateTitle("color", color.hex);
        }}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => actions.updateToolbar(null)}
      >
        Done
      </button>
    </div>
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
