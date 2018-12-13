import React, { Component } from "react";

export default class ChatBox extends Component {
  // constructor(){
  //   super()

  //   this.state{
  //     chatBoxClass :
  //   }
  // }
  render() {
    return (
      <div
        className={`chatbox ${this.props.buttonActive ? "" : "chatbox-hidden"}`}
      >
        1
      </div>
    );
  }
}
