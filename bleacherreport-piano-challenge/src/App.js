import React, { Component } from "react";
import BlackKeyComponent from "./components/PianoContainer/BlackKeyComponent";
import PianoContainer from "./components/PianoContainer/PianoContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Letters in music alphabet for mapping
      keys: ["C", "D", "E", "F", "G", "A", "B"],
      pressed: []
    };
  }
  // Adds functionality to keys
  // when pressed so that an array
  // of up to 5 letters will be stored
  addPressed = letter => {
    console.log(letter);
    console.log("this is len of pressed ", this.state.pressed.length);
    if (this.state.pressed.length > 4) {
      this.setState({
        pressed: [letter]
      });
    } else {
      this.setState({
        pressed: [...this.state.pressed, letter]
      });
    }
  };

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

        <PianoContainer
          addPressed={this.addPressed}
          pianoKeys={this.state.keys}
        />
        <h3 className="luklog">Last Used Keys </h3>
        <div className="log">
          {this.state.pressed.map(pressed => (
            <h3>{pressed}</h3>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
