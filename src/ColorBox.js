import React, { Component } from "react";
import "./ColorBox.css";
import "./Palette.css";

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background: background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}
