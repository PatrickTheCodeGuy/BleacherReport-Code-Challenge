import React, { Component } from "react";
import WhiteKeyComponent from "./WhiteKeyComponent";

import "./Piano.css";

class PianoContainer extends Component {
  constructor() {
    super();
    this.state = {
      // Number of initial white keys
      // May add ability for user to extend piano
      keys: 7
    };
  }
  render() {
    return (
      <div className="PianoContainer">
        {this.props.pianoKeys.map(letter => (
          <WhiteKeyComponent letter={letter} />
        ))}
      </div>
    );
  }
}

export default PianoContainer;
