import React, { Component } from "react";
import ChildPart from "./ChildrenPart";
import "./ParentPart.css";

class ParentPart extends React.Component {
  state = {
    text: "Nothing yet"
  };

  changeText = newText => {
    this.setState({
      text: newText
    });
  };

  render() {
    return (
      <div>
        <div className="middleBody">
          <div className="sub-Title">Parent component</div>
          <div>message received from child component:</div>
          <li>
            {this.state.text}
            <button className="copyButton" onClick={this.changeText}>
              copy value to child
            </button>
          </li>
        </div>
        <div>
          <ChildPart onSubmit={this.changeText} />
        </div>
      </div>
    );
  }
}

export default ParentPart;
