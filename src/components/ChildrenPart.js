import React, { Component } from "react";
import "./ChildrenPart.css";
import ParentPart from "./ParentPart.js";

class ChildPart extends Component {
  state = {
    InputValue: "", //Input
    list: []
  };

  handleGetInputValue = event => {
    this.setState({
      InputValue: event.target.value
    });
  };

  componentDidMount() {
    this.props.onRef(this);
  }

  handlePost = () => {
    //call Parent
    this.props.addValue(this.state.InputValue);
  };

  setTitleValue = value => {
    this.setState({
      InputValue: value
    });
  };

  PostAddValue = () => {};

  render() {
    return (
      <div className="lowerPart">
        <div>Child Component</div>
        <input
          value={this.state.InputValue}
          onChange={this.handleGetInputValue}
        />
        <button onClick={this.handlePost}>send to the parent</button>
      </div>
    );
  }
}

export default ChildPart;
