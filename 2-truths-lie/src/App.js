
import './App.css';
import { v4 as uuidv4 } from "uuid";
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: true,
      textInput: "Old Text",
      objectValues: {
        oneTruth: {
          text: "My name is Jim?",
          isLie: false,
        },
        twoTruth: {
          text: "Current month is March?",
          isLie: true,
        },
        threeTruth: {
          text: "Coding is fun?",
          isLie: true,
        },
      },
    };
  }



  render() {
    const { oneTruth } = this.state
    const { twoTruth } = this.state
    const { threeTruth } = this.state
    const { voteBlock} = this.state
    return (
      <div>
        <h1>Two Truths and a Lie</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label>User Name:</label>
          <input></input>

          <br></br>

          <label>Prompt 1:</label>
          <input name="oneTruth" value={oneTruth} onChange={this.handleOnInputChange}></input>
          <label>isLie:</label>
          <input type="checkbox"></input>
          <br></br>
          <label>Prompt 2:</label>
          <input name="twoTruth" value={twoTruth} onChange={this.handleOnInputChange}></input>
          <label>isLie:</label>
          <input type="checkbox"></input>
          <br></br>
          <label>Prompt 3:</label>
          <input name="threeTruth" value={threeTruth} onChange={this.handleOnInputChange}></input>
          <label>isLie:</label>
          <input type="checkbox"></input>
          <br></br>
          <label>Vote:</label>
          <input name="voteBlock" value={voteBlock} onChange={this.handleOnInputChange}></input>
          <br></br>
          <button >Send Prompt</button>
          <button>Send Vote</button>

        </form>
      </div>
    )
  }
}


export default App;
