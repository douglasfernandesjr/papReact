import React, { Component } from "react";

export class Title extends Component {
  render() {
    const titulo = this.props.info ?? "Olá, mundo!";
    return <h1>{titulo}</h1>;
  }
}

export default Title;
