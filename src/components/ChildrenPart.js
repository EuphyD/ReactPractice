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

  handlePost = () => {
    const { InputValue } = this.state;
    console.log("InputValue: ", InputValue);
    //call Parent
    this.props.onSubmit(this.state.InputValue);

    this.setState({ InputValue: "" });
  };

  render() {
    return (
      <div className="lowerPart">
        <div>Child Component</div>
        <input
          value={this.state.InputValue}
          onChange={this.handleGetInputValue}
        />
        <button onClick={this.handlePost}>Submit</button>
      </div>
    );
  }
}

export default ChildPart;
