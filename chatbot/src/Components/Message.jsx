import React, { Component } from "react";
import ProfilePic from "../images/userimg.jpg";

export default class Message extends Component {
  render() {
    return (
      <div className="message">
        <div className="user-image">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="chat left">{this.props.message}</div>
      </div>
    );
  }
}
