
import './App.css';
import React, { Component } from 'react';


const serverURL = "http://cab2-108-53-232-66.ngrok.io";

async function ping(userName) {
  const response = await fetch(`${serverURL}/ping`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "access-control-request-headers": "content-type",
      "x-Trigger": "CORS",
    },
    body: JSON.stringify({
      userName: userName
    })
  }); console.log(response)
  const pingResponse = await response.text();
  console.log(response.text)
  console.log(pingResponse)
  return pingResponse;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      userName: "",

      pingTextState: "",

      oneTruth: {
        text: "",
        isLie: false,
      },
      twoTruth: {
        text: "",
        isLie: false,
      },
      threeTruth: {
        text: "",
        isLie: false,
      },

      voteBlock: 0,
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
  handleOneCheck = (event) => {

    this.setState({
      oneTruth: {
        ...this.state.oneTruth,
        isLie: !this.state.oneTruth.isLie
      }
    })
  }
  handleTwoCheck = (event) => {

    this.setState({
      twoTruth: {
        ...this.state.twoTruth,
        isLie: !this.state.twoTruth.isLie
      }
    })
  }
  handleThreeCheck = (event) => {

    this.setState({
      threeTruth: {
        ...this.state.threeTruth,
        isLie: !this.state.threeTruth.isLie
      }
    })
  }
   handlePingMe = async (event) => {
    
   
   const pingText =   ping(this.state.userName) 
   console.log("pingText ", pingText)
   this.setState({
     pingTextState: pingText
   })
  }


  render() {
    const { oneTruth } = this.state
    const { twoTruth } = this.state
    const { threeTruth } = this.state
    const { voteBlock } = this.state



    return (
      <div>
        <h1>Two Truths and a Lie</h1>

        <label>User Name:</label>
        <input name="userName" value={this.state.userName} onChange={this.handleuserName}></input>

        <br></br>

        <label>Prompt 1:</label>
        <input name="oneTruth" value={this.state.oneTruth.text} onChange={this.handleOneTruth}></input>
        <label>isLie:</label>
        <input name="oneTruth" checked={this.state.oneTruth.isLie} type="checkbox" onChange={this.handleOneCheck}></input>
        <br></br>
        <label>Prompt 2:</label>
        <input name="twoTruth" value={this.state.twoTruth.text} onChange={this.handleTwoTruth}></input>
        <label>isLie:</label>
        <input name="twoTruth" checked={this.state.twoTruth.isLie} type="checkbox" onChange={this.handleTwoCheck}></input>
        <br></br>
        <label>Prompt 3:</label>
        <input name="threeTruth" value={this.state.threeTruth.text} onChange={this.handleThreeTruth}></input>
        <label>isLie:</label>
        <input name="threeTruth" checked={this.state.threeTruth.isLie} type="checkbox" onChange={this.handleThreeCheck}></input>
        <br></br>
        <label>Vote:</label>
        <input type="number" name="voteBlock" value={this.state.voteBlock} onChange={this}></input>
        <br></br>
        <button >Send Prompt</button>
        <button>Send Vote</button>
        <button name="pingMe" onClick={this.handlePingMe}>Ping!</button>


      </div>
    )
  }
}


export default App;
