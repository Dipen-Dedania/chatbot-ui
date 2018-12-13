import React, { Component } from "react";

export default class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "111111"
    };

    this.enterKeyPressed = this.enterKeyPressed.bind(this);
  }

  enterKeyPressed(e) {
    if (e.key === "Enter") {
      this.setState({
        inputValue: e.target.value
      });
    }
  }

  render() {
    return (
      <div
        className={`chatbox ${this.props.buttonActive ? "" : "chatbox-hidden"}`}
      >
        <div className="chatbox-container">
          <div className="chat-view">{this.state.inputValue}</div>

          <input
            type="text"
            placeholder="Start a Converstation"
            className="chat-textbox"
            onKeyPress={this.enterKeyPressed}
          />
        </div>
      </div>
    );
  }
}
