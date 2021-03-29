import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import HeroMessage from "./components/HeroMessage";
import CtaButton from "./components/CtaButton";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="row">
          <div className="column">
            <HeroMessage></HeroMessage>
          </div>
          <div className="column">
            <CtaButton></CtaButton>
            <Form></Form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
