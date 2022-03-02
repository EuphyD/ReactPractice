import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  //console.log("Event Handler Called", counterId);
  //new array[all the counters except the given counterID]
  //Thus, it delete the state line in the new array
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    //{key: value}
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            //call event to child comp
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            //value={counter.value}
            //id={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
