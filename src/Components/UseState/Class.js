import React from "react";
import "../../App.css";

export class Class extends React.Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <span className="Left">
        <p>Class Component</p>
        <input value={this.state.name} onChange={this.handleChange}></input>
      </span>
    );
  }
}