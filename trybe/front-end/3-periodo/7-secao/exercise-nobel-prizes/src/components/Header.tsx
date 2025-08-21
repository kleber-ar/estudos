import { Component } from "react";
import logo from "../assets/nobel_logo.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Nobel Logo" />
      </header>
    );
  }
}
