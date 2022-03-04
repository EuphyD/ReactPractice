import React, { Component } from "react";
import ChildPart from "./ChildrenPart";
import "./ParentPart.css";

class ParentPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: []
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


  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
*/
  copyValue = title => {
    console.log(title);
    this.setState({
      text: title
    });
    this.$Child.setTitleValue(title);
    // navigator.clipboard.writeText("Copy this text to clipboard")
  };

  addValue = item => {
    console.log(item);
    let arr = this.state.list;
    arr.push({
      title: item,
      id: new Date().getTime()
    });
    console.log(arr);
    this.setState({
      list: arr
    });
    console.log(this.state.list);
  };

  removeItem = id => {
    console.log(id);
    let arr = this.state.list;
    arr = arr.map(item => {
      if (item.id === id) {
        return false;
      } else {
        return item;
      }
    });
    console.log(arr);
    this.setState({
      list: arr
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="middleBody">
            <div className="sub-Title">Parent component</div>
            <div>message received from child component:</div>
            {this.state.list.map((item, index, arr) => {
              if (item === false) {
                return <span></span>;
              }
              return (
                <li
                  onClick={() => {
                    this.removeItem(item.id);
                  }}
                >
                  <span>{item.title}</span>
                  <button
                    className="copyButton"
                    onClick={() => {
                      this.copyValue(item.title);
                    }}
                  >
                    copy value to child
                  </button>
                </li>
              );
            })}
          </div>
          <div>
            <ChildPart
              onRef={ref => {
                this.$Child = ref;
              }}
              addValue={this.addValue}
              msg={this.state.text}
              onSubmit={this.changeText}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ParentPart;
