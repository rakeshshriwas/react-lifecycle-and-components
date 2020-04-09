import React from "react";

export default class ComponentDidUpdateLifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      active: null,
      whoIsActive: null
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("ComponentDidMount called");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
    if (this.state.whoIsActive == null)
      this.setState({
        whoIsActive: "By: Rakesh Shriwas"
      });
  }

  render() {
    console.log("Render called");

    return (
      <>
        <h1>Component Did Update LifeCycle {this.state.whoIsActive}</h1>
        <button
          onClick={() =>
            this.setState({
              active: "Active"
            })
          }
        >
          Activate
        </button>
      </>
    );
  }
}
