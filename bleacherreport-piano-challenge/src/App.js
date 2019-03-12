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
      // Array holding the log of pressed keys
      pressed: [],
      // bool to allow classname change on click
      clicked: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
        G: false
      }
    };
  }
  // Adds functionality to keys
  // when pressed so that an array
  // of up to 5 letters will be stored
  addPressed = letter => {
    // If length of array is full (5) resets and adds letter
    if (this.state.pressed.length > 4) {
      this.setState({
        pressed: [letter],
        clicked: { ...this.state.clicked, [letter]: true }
      });
      // Resets key so it goes back to white after 700 ms
      setTimeout(() => {
        this.setState({
          clicked: { [letter]: false }
        });
      }, 700);
    } else {
      this.setState({
        pressed: [...this.state.pressed, letter],
        clicked: { ...this.state.clicked, [letter]: true }
      });
      // Resets key so it goes back to white after 700 ms
      setTimeout(() => {
        this.setState({
          clicked: { [letter]: false }
        });
      }, 700);
    }
  };

  render() {
    return (
      <div className="App">
        {/* Used individual components because mapping wouldnt allow for spacing each key differently (since keyboards dont have a black key between every white) */}
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
          //Passes add pressed which adds key letter to state
          addPressed={this.addPressed}
          // Passes key letter down
          pianoKeys={this.state.keys}
          clicked={this.state.clicked}
        />
        {/* Log (last 5 pressed keys) */}
        <h3 className="luklog">Last Used Keys </h3>
        <div className="log">
          {/* maps up to 5 letters for log */}
          {this.state.pressed.map(pressed => (
            <h3>{pressed}</h3>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
