import React from "react";

export default class UseEffectClass extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Romalia"
    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  componentDidMount() {
    document.title = this.state.name;
  }

  componentDidUpdate() {
    document.title = this.state.name;
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