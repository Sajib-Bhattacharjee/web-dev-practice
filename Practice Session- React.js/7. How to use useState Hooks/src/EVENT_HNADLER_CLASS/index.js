import React, { Component } from "react";

export default class EVENT_HNADLER_CLASS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  handleChange = (e) => {
    // changedValue : e.target.value,
    this.setState(
      {
        changedValue: e.target.value,
      },
      () => {
        console.log(this.state.changedValue);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <p> {this.state.changedValue}</p>
      </div>
    );
  }
}
