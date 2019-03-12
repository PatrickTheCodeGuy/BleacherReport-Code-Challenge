import React, { Component } from "react";
import "./Piano.css";

class WhiteKeyComponent extends Component {
  render() {
    let thisletter = this.props.letter;
    return (
      <div
        onClick={() => this.props.addPressed(this.props.letter)}
        className={
          this.props.clicked[thisletter]
            ? //allow for unique CSS on a per key basis
              `WhiteKeyComponent${this.props.letter} active`
            : `WhiteKeyComponent${this.props.letter}`
        }
      >
        <h1 className="key-letter">{this.props.letter}</h1>
      </div>
    );
  }
}

export default WhiteKeyComponent;
