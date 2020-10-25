import React from "react";

function getRandomColor() {
  const ColorCode = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
  return ColorCode;
}

export default class UseEffectClass extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      textColor: "white"
    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  componentDidMount() {
    this.setState({textColor: getRandomColor()});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name) this.setState({textColor: getRandomColor()});
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <span className="Left">
        <p style={{
          "color": this.state.textColor
        }}>Class Component</p>

        <input value={this.state.name} onChange={this.handleChange}></input>
      </span>
    );
  }
}