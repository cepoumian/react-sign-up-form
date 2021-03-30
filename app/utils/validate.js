export default function validate() {
  let firstNameError = "";
  let lastNameError = "";
  let emailError = "";
  let passwordError = "";

  if (!this.state.firstName) {
    firstNameError = "Please type your first name.";
  }

  if (!this.state.lastName) {
    lastNameError = "Please type your last name.";
  }

  if (!this.state.email.includes("@")) {
    emailError = "Please type a valid email.";
  }

  if (this.state.password.length < 6 || this.state.password.length > 12) {
    passwordError =
      "Please type a password that is at least 6 characters long and does not exceed 12 characters.";
  }

  if (firstNameError || lastNameError || emailError || passwordError) {
    this.setState({ firstNameError, lastNameError, emailError, passwordError });
    return false;
  }

  return true;
}
