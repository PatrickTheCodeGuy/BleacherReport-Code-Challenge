import React, { Component } from "react";
import "./Piano.css";

class WhiteKeyComponent extends Component {
  render() {
    return (
      <div className="WhiteKeyComponent">
        <h1>{this.props.letter}</h1>
      </div>
    );
  }
}

export default WhiteKeyComponent;
