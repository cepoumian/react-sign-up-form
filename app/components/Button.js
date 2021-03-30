import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "",
    };
    this.setButtonStyle = this.setButtonStyle.bind(this);
  }

  componentDidMount() {
    this.setButtonStyle();
  }

  setButtonStyle() {
    this.setState({ choice: this.props.choice });
  }

  render() {
    return (
      <button className={`btn btn-${this.state.choice}`}>{this.props.children}</button>
    );
  }
}
