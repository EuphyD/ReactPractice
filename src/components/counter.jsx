import React, { Component } from "react";

class Counter extends React.Component {
  //点击，就count+1 count->value
  //setState 自动改变
  //  handleIncrement = () => {
  //    this.setState({ value: this.state.value + 1 });
  //  };
  //  handleDelete = () => {
  //  this.setState({ value: this.state.value - 1 });
  //};

  render() {
    //props: it includes attributes added
    //props   ->  {value: , selected: }
    //CODE:
    //console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          click
        </button>
        <button
          //raising the event onDelete by call props
          //onClick={this.props.onDelete}

          //Delete the whole ID
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  //bootstrap，颜色改变
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  //count值显示：“zero”或者值本身
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
