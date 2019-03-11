import React, { Component } from "react";
import PianoContainer from "./components/PianoContainer/PianoContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Letters in music alphabet for mapping
      keys: ["A", "B", "C", "D", "E", "F", "G"]
    };
  }
  render() {
    return (
      <div className="App">
        <PianoContainer pianoKeys={this.state.keys} />
      </div>
    );
  }
}

export default App;
