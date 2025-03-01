import React, { Component, createRef } from "react";

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(this.userNameRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username"> Name: </label>
          <input type="text" id="username" ref={this.userNameRef}></input>
          <label htmlFor="password"> Password: </label>
          <input type="password" id="password"></input>
        </div>
        <button type="submit"> Registration</button>
      </form>
    );
  }
}
