import React, { Component } from "react";
import WhiteKeyComponent from "./WhiteKeyComponent";

import "./Piano.css";

class PianoContainer extends Component {
  render() {
    return (
      <div className="PianoContainer">
        {this.props.pianoKeys.map(letter => (
          <WhiteKeyComponent
            clicked={this.props.clicked}
            key={letter + Math.random() * 10}
            letter={letter}
            addPressed={this.props.addPressed}
          />
        ))}
      </div>
    );
  }
}

export default PianoContainer;
