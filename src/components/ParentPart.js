import React, { Component } from "react";

class ParentPart extends React.Component {
  render() {
    return (
      <div>
        <div className="subParent">Parent component:</div>
        <div>message received from child component:</div>
      </div>
    );
  }
}

export default ParentPart;
