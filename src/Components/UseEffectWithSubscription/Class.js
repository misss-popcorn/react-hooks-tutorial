import React from "react";

export default class UseEffectClass extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span className="Left">
        <p>Class Component</p>
        <p>{this.state.count}</p>
      </span>
    );
  }
}