import React from "react";

import Button from "./Button";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="firstName"
          className="form__input"
          autoComplete="off"
          placeholder="First Name"
          onChange={this.handleChange}
          value={this.state.firstName}
        />

        <input
          type="text"
          id="lastName"
          className="form__input"
          autoComplete="off"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={this.state.lastName}
        />

        <input
          type="text"
          id="email"
          className="form__input"
          autoComplete="off"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />

        <input
          type="text"
          id="password"
          className="form__input"
          autoComplete="off"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <Button type="submit">claim your free trial</Button>
        <div className="form__terms">
          <span className="form__terms--text">
            By clicking the button you are agreeing to our
          </span>
          <a href="#" className="form__terms--link">
            Terms and Services
          </a>
        </div>
      </form>
    );
  }
}
