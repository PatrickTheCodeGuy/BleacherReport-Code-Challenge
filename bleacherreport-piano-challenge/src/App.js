import React, { Component } from "react";
import BlackKeyComponent from "./components/PianoContainer/BlackKeyComponent";
import PianoContainer from "./components/PianoContainer/PianoContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Letters in music alphabet for mapping
      keys: ["C", "D", "E", "F", "G", "A", "B"]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="black-key-1">
          <BlackKeyComponent />
        </div>
        <div className="black-key-2">
          <BlackKeyComponent />
        </div>
        <div className="black-key-3">
          <BlackKeyComponent />
        </div>
        <div className="black-key-4">
          <BlackKeyComponent />
        </div>
        <div className="black-key-5">
          <BlackKeyComponent />
        </div>

        <PianoContainer pianoKeys={this.state.keys} />
      </div>
    );
  }
}

export default App;
