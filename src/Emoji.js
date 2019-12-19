import React, { Component } from "react";
import "./Emoji.css";

class Emoji extends Component {
  render() {
    return (
      <span
        className="Emoji"
        role="img"
        aria-labelledby="a random generated emoji image"
      >
        {this.props.emoji}
      </span>
    );
  }
}

export default Emoji;
