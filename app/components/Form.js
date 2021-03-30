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
      this.setState(initialState);
    }
  }

  render() {
    const {
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      email,
      emailError,
      password,
      passwordError,
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          className={`
          form__input
          ${firstNameError && "form__input--invalid"}
          ${firstName.length > 1 && "form__input--valid"}
          `}
          autoComplete="off"
          placeholder="First Name"
          onChange={this.handleChange}
          value={firstName}
        />

        <div
          className={`
              form__errorMessage
              ${firstName.length > 1 && "form__errorMessage--hide"}
              `}
        >
          {firstNameError}
        </div>

        <input
          type="text"
          name="lastName"
          className={`
          form__input 
          ${lastNameError && "form__input--invalid"}
          ${lastName.length > 1 && "form__input--valid"}
          `}
          autoComplete="off"
          placeholder="Last Name"
          onChange={this.handleChange}
          value={lastName}
        />
        <div
          className={`
              form__errorMessage
              ${lastName.length > 1 && "form__errorMessage--hide"}
              `}
        >
          {lastNameError}
        </div>

        <input
          type="text"
          name="email"
          className={`
          form__input
          ${emailError && "form__input--invalid"}
          ${(email.length > 4) & email.includes("@") && "form__input--valid"}
          `}
          autoComplete="off"
          placeholder="Email"
          onChange={this.handleChange}
          value={email}
        />

        <div
          className={`
              form__errorMessage
              ${(email.length > 4) & email.includes("@") && "form__errorMessage--hide"}
              `}
        >
          {emailError}
        </div>

        <input
          type="password"
          name="password"
          className={`
          form__input 
          ${passwordError && "form__input--invalid"}
          ${password.length > 5 && "form__input--valid"}
          `}
          autoComplete="off"
          placeholder="Password"
          onChange={this.handleChange}
          value={password}
        />

        <div
          className={`
              form__errorMessage
              ${password.length > 5 && "form__errorMessage--hide"}
              `}
        >
          {passwordError}
        </div>

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
