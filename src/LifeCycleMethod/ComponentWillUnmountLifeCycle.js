import React from "react";

export default class ComponentWillUnmountLifeCycle extends React.Component {
  componentWillUnmount() {
    alert("component unmounte");
  }
  render() {
    return (
      <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
        <li>04</li>
        <li>05</li>
      </ul>
    );
  }
}
