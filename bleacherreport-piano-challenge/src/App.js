import React, { Component } from "react";
import BlackKeyComponent from "./components/PianoContainer/BlackKeyComponent";
import PianoContainer from "./components/PianoContainer/PianoContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: "",
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
  // Handles input of text string
  handleChange = event => {
    event.preventDefault();
    // Automatically uppercases to match notes
    let upperCase = event.target.value.toUpperCase();
    this.setState({
      [event.target.name]: upperCase
    });
  };

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

  // On click func for playing notes in text box
  playNotes = () => {
    let notes = Array.from(this.state.notes);
    let counter = 0;
    for (let i = 0; i < notes.length; i++) {
      if (
        notes[i] === "A" ||
        notes[i] === "B" ||
        notes[i] === "C" ||
        notes[i] === "D" ||
        notes[i] === "E" ||
        notes[i] === "F" ||
        notes[i] === "G"
      ) {
        let noteUsed = notes[i];

        // Two setTimeouts are needed because of how fast the for loop is, it only would do the last index. so by adding a counter (for the index we are COUNTING (aka letters between A-G) then multiply that by a second, we get each individ key lighting up now)
        setTimeout(() => {
          if (this.state.pressed.length > 4) {
            this.setState({
              pressed: [noteUsed],
              clicked: { [noteUsed]: true }
            });
          } else {
            this.setState({
              pressed: [...this.state.pressed, noteUsed],
              clicked: { [noteUsed]: true }
            });
          }
        }, counter * 1000);

        setTimeout(() => {
          this.setState({
            clicked: { [noteUsed]: false }
          });
        }, (counter + 1) * 1000);

        // add one to counter because letter was between A-G
        counter++;
      }
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
        <div className="text-area">
          <textarea
            onChange={this.handleChange}
            name="notes"
            placeholder="Add some notes here. . ."
            className="textbox"
          />
          <button onClick={() => this.playNotes()} className="play-button">
            ▶
          </button>
        </div>
      </div>
    );
  }
}

export default App;
