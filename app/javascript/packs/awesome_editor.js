import React from "react";
import ReactDOM from "react-dom";
import ReactQuill from "react-quill";
import Draggable from "react-draggable";

const AwesomeEditor = props => {
  return (
    <div>
      <Editor />
    </div>
  );
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div>
        <Draggable>
          <div>
            <CustomToolbar />
          </div>
        </Draggable>

        <Draggable cancel=".no-cursor">
          <div
            className="box"
            style={{ backgroundColor: "grey", padding: 20, width: 200 }}
          >
            <div className="no-cursor" style={{ backgroundColor: "white" }}>
              <ReactQuill
                onChange={this.handleChange}
                placeholder={this.props.placeholder}
                modules={Editor.modules}
                formats={Editor.formats}
                theme={"snow"} // pass false to use minimal theme
              >
                <div key="editor" ref="editor" className="quill-contents" />

              </ReactQuill>
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

Editor.modules = {
  toolbar: {
    container: "#toolbar"
  }
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color"
];

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1" />
      <option value="2" />
      <option selected />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
      <option selected />
    </select>
  </div>
);

// Render component with data
document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("awesome_editor");
  const data = JSON.parse(node.getAttribute("data"));
  ReactDOM.render(<AwesomeEditor {...data} />, node);
});
