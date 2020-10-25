import React from "react";

export default class UseEffectClass extends React.Component {
  constructor() {
    super();
    this.interval = 0;
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

  componentWillUnmount() {
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