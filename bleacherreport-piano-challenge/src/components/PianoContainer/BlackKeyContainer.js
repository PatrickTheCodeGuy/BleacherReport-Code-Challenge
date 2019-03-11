import React, { Component } from "react";
import BlackKeyComponent from "./BlackKeyComponent";
import "./Piano.css";

class BlackKeyContainer extends Component {
  render() {
    return (
      <div className="BlackKeyContainer">
        {this.props.numKeys.map(num => (
          <BlackKeyComponent key={num} />
        ))}
      </div>
    );
  }
}

export default BlackKeyContainer;
