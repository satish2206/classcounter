import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + this.props.diff,
    });
  };

  decrement = () => {
    this.setState((currState, currProps) => {
      return {
        count: currState.count - this.props.diff,
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
