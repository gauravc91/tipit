import React from "react";
import { connect } from "react-redux";
import actions from "../actions";
import { bindActionCreators } from "redux";

const App = ({ count, actions: { plusOne } }) => {
  return (
    <div>
      <h1>I am a component {count}</h1>
      <h2>with Redux Integration</h2>
      <button onClick={plusOne}>Click me</button>
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
