
import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      userName: "",

      oneTruth: {
        text: "",
        isLie: false,
      },
      twoTruth: {
        text: "",
        isLie: true,
      },
      threeTruth: {
        text: "",
        isLie: true,
      },

      voteBlock: Number,
    };

  }
  handleOneTruth = (event) => {
    console.log(event.target.value)

    const newObj = {
      ...this.state,
      oneTruth: {
        ...this.state.oneTruth,
        text: event.target.value
      }
    }
    this.setState(newObj)
  }
  handleTwoTruth = (event) => {
    console.log(event.target.value)

    const newObj = {
      ...this.state,
      twoTruth: {
        ...this.state.twoTruth,
        text: event.target.value
      }
    }
    this.setState(newObj)
  }

  handleThreeTruth = (event) => {
    console.log(event.target.value)

    const newObj = {
      ...this.state,
      threeTruth: {
        ...this.state.threeTruth,
        text: event.target.value
      }
    }
    this.setState(newObj)
  }
  
  handleuserName = (event) => {
    const newObj = {
      ...this.state,
      userName: event.target.value
    }
    this.setState(newObj
    )
  }


  render() {
    const { oneTruth } = this.state
    const { twoTruth } = this.state
    const { threeTruth } = this.state
    const { voteBlock } = this.state
    console.log(oneTruth)
    return (
      <div>
        <h1>Two Truths and a Lie</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label>User Name:</label>``
          <input name="userName" value={this.state.userName} onChange={this.handleuserName}></input>

          <br></br>

          <label>Prompt 1:</label>
          <input name="oneTruth" value={this.state.oneTruth.text} onChange={this.handleOneTruth}></input>
          <label>isLie:</label>
          <input name="oneTruth" checked={this.state.oneTruth.isLie} type="checkbox"></input>
          <br></br>
          <label>Prompt 2:</label>
          <input name="twoTruth" value={this.state.twoTruth.text} onChange={this.handleTwoTruth}></input>
          <label>isLie:</label>
          <input name="twoTruth" checked={this.state.twoTruth.isLie} type="checkbox"></input>
          <br></br>
          <label>Prompt 3:</label>
          <input name="threeTruth" value={this.state.threeTruth.text} onChange={this.handleThreeTruth}></input>
          <label>isLie:</label>
          <input name="threeTruth" checked={this.state.threeTruth.isLie} type="checkbox"></input>
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
