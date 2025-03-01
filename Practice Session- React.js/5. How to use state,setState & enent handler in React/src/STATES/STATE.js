import React, { Component } from "react";

export default class STATE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1> Count: {count} </h1>
        <button className="btn__for-setState" onClick={this.handleIncrement}>
          Increment +
        </button>
        <button
          className="btn__for-setState"
          onClick={this.handleDecrement}
          disabled={count === 0 ? true : false}
        >
          Decrement +
        </button>
      </div>
    );
  }
}
