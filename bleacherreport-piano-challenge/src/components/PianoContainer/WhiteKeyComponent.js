import React, { Component } from "react";
import "./Piano.css";

class WhiteKeyComponent extends Component {
  render() {
    return (
      <div className="WhiteKeyComponent">
        <h1
          onClick={() => this.props.addPressed(this.props.letter)}
          className="key-letter"
        >
          {this.props.letter}
        </h1>
      </div>
    );
  }
}

export default WhiteKeyComponent;
