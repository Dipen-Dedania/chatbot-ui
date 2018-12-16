import React, { Component } from "react";
import BotImg from "../../images/botimg.png";
import Button from "./Button";
import Card from "./Card";

export default class BotMessage extends Component {
  constructor() {
    super();
    this.state = {
      botMessage: ""
    };
  }

  render() {
    // if (this.props.message.toUpperCase() === "BUTTON") {
    //   this.setState({
    //     botMessage: Button
    //   });
    // } else if (this.props.message.toUpperCase() === "CARD") {
    //   this.setState({
    //     botMessage: Card
    //   });
    // } else {
    //   this.setState({
    //     botMessage: this.props.message
    //   });
    // }
    return (
      <div className="message">
        <div className="chat right">{this.state.botMessage}</div>
        <div className="profile-image">
          <img src={BotImg} alt="" />
        </div>
      </div>
    );
  }
}
