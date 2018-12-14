import React, { Component } from "react";
import Message from "./Message";
import Button from "./Button";
import Card from "./Card";

export default class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      chatHistory: [],
      messageToShow: ""
    };

    this.enterKeyPressed = this.enterKeyPressed.bind(this);
  }

  enterKeyPressed(e) {
    if (e.key === "Enter") {
      if (e.target.value.toUpperCase() === "BUTTON") {
        this.setState(
          {
            messageToShow: <Button message={e.target.value} />
          },
          function() {
            this.setState({
              chatHistory: [...this.state.chatHistory, this.state.messageToShow]
            });
          }
        );
      } else if (e.target.value.toUpperCase() === "CARD") {
        this.setState(
          {
            messageToShow: <Card message={e.target.value} />
          },
          function() {
            this.setState({
              chatHistory: [...this.state.chatHistory, this.state.messageToShow]
            });
          }
        );
      } else {
        this.setState(
          {
            messageToShow: <Message message={e.target.value} />
          },
          function() {
            this.setState({
              chatHistory: [...this.state.chatHistory, this.state.messageToShow]
            });
          }
        );
      }

      e.target.value = "";
    }
  }

  render() {
    return (
      <div
        className={`chatbox ${this.props.buttonActive ? "" : "chatbox-hidden"}`}
      >
        <div className="chatbox-container">
          <div className="chat-view">{this.state.chatHistory}</div>

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
