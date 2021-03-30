import React from "react";
import Button from "./Button";
import validate from "../utils/validate";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  firstNameError: "",
  lastNameError: "",
  emailError: "",
  passwordError: "",
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = validate.bind(this);
  }

  handleChange(event) {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox ? event.target.checked : event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          className="form__input"
          autoComplete="off"
          placeholder="First Name"
          onChange={this.handleChange}
          value={this.state.firstName}
        />

        <div className="form__errorMessage">{this.state.firstNameError}</div>

        <input
          type="text"
          name="lastName"
          className="form__input"
          autoComplete="off"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={this.state.lastName}
        />
        <div className="form__errorMessage">{this.state.lastNameError}</div>

        <input
          type="text"
          name="email"
          className="form__input"
          autoComplete="off"
          placeholder="Email"
          onChange={this.handleChange}
          value={this.state.email}
        />

        <div className="form__errorMessage">{this.state.emailError}</div>

        <input
          type="password"
          name="password"
          className="form__input"
          autoComplete="off"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <div className="form__errorMessage">{this.state.passwordError}</div>

        <Button choice="submit">claim your free trial</Button>
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
