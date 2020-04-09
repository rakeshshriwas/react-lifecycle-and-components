import React from "react";

export default class ComponentDidMountLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("ComponentDidMount called");
    this.setState({
      data: "Hello"
    });
  }

  render() {
    console.log("Render called");

    return <h1>Component Did Mount LifeCycle</h1>;
  }
}
