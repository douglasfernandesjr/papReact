import React, { Component } from "react";

export class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.info ?? "Olá, mundo!",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  render() {
    return (
      <div>
        <input
          type="text" name="name" value={this.state.title} onChange={this.handleChange}
        />
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default Title;
