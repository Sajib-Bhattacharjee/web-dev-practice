import React, { Component } from "react";

import HOME from "../CONDITIONAL_RENDERING/homePage";
import LOGIN from "../CONDITIONAL_RENDERING/loginPage";

export default class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    const { isLoggedIn } = this.state;

    // if (isLoggedIn) {
    //   return <HOME />;
    // } else {
    //   return <LOGIN />;
    // }

    return <div>{isLoggedIn ? <HOME /> : <LOGIN />}</div>;
  }
}
