import React from "react";

export default class LifeCycleMethods extends React.Component {
  constructor() {
    super();
    this.state = {};
    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("ComponentDidMount Called");
  }

  render() {
    console.log("Render Called");
    return (
      <>
        <h4>Life Cycle Methods</h4>
      </>
    );
  }
}
