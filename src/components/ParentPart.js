import React, { Component } from "react";
import ChildPart from "./ChildrenPart";
import "./ParentPart.css";

class ParentPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "", //input框内容
      list: [] //列表的每一项
    };
  }

  changeText = newText => {
    this.setState({
      text: newText
    });
  };

  /*
  handleButtonClick() {
    this.setState({
      text: "",
      list: [...this.state.list, this.state.text]
    });
  }
  */

  handleItemDelete(index) {
    const list = [...this.state.list]; //拷贝数组 因为immutable--state不允许修改
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default ParentPart;
