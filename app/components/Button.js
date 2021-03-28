import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
    };
    this.setButtonStyle = this.setButtonStyle.bind(this);
  }

  componentDidMount() {
    this.setButtonStyle();
  }

  setButtonStyle() {
    this.setState({ type: this.props.type });
  }

  render() {
    return (
      <button className={`btn btn-${this.state.type}`}>{this.props.children}</button>
    );
  }
}
