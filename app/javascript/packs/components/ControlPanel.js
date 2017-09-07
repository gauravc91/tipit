import React from "react";
import * as Constants from "../constants";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";
import $ from "jquery";

var styles = {
  base: {
    height: "100%"
  }
};

const ControlPanel = ({ actions }) => {
  return (
    <div style={styles.base}>
      <h1>Control Panel</h1>
      <BgSetting actions={actions} />
      <br />
      <LogoSetting actions={actions} />
      <br />
      <TitleSetting actions={actions} />
      <br />
      <DescriptionSetting actions={actions} />
    </div>
  );
};

const TitleSetting = ({ actions }) => {
  let onTitleChange = event => {
    actions.updateTitle(event.target.value);
  };
  return (
    <div>
      <span className="label label-default">Campaign Title</span>
      <input
        type="text"
        className="form-control"
        aria-label="..."
        placeholder="Title"
        onChange={onTitleChange}
      />
    </div>
  );
};

const DescriptionSetting = ({ actions }) => {
  let onDescriptionChange = event => {
    actions.updateDescription(event.target.value);
  };
  return (
    <div>
      <span className="label label-default">Campaign Description</span>
      <input
        type="text"
        className="form-control"
        aria-label="..."
        placeholder="Description"
        onChange={onDescriptionChange}
      />
    </div>
  );
};

const BgSetting = ({ actions }) => {
  let handleChange = event => {
    actions.updateBg(event.target.value);
  };

  return (
    <div>
      <span className="label label-default">Backgroud Image Url</span>
      <input
        type="text"
        className="form-control"
        aria-label="..."
        placeholder="Backgroud Url"
        onChange={handleChange}
      />
    </div>
  );
};

const LogoSetting = ({ actions }) => {
  let onUrlChange = event => {
    actions.updateLogo(event.target.value);
  };

  return (
    <div>
      <span className="label label-default">Logo Image Url</span>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="..."
          placeholder="Logo Url"
          onChange={onUrlChange}
        />
        <div className="input-group-btn">
          <button
            type="button"
            className="btn btn-default"
            onClick={() => actions.updateLogoSize(1)}
          >
            S
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => actions.updateLogoSize(2)}
          >
            M
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={() => actions.updateLogoSize(3)}
          >
            L
          </button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
