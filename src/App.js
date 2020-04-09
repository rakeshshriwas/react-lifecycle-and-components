import React from "react";
import "./styles.css";
// import Profile from "./Profile";
// import LifeCycleMethods from "./LiftCycleMethods";
// import ComponentDidMountLifeCycle from "./LifeCycleMethod/ComponentDidMountLifeCycle";
// import ComponentDidUpdateLifeCycle from "./LifeCycleMethod/ComponentDidUpdateLifeCycle";
import ComponentWillUnmountLifeCycle from "./LifeCycleMethod/ComponentWillUnmountLifeCycle";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    };
  }
  // const openAlert = () => {
  //   alert("Open Alert");
  // };

  // const dataObj = {
  //   firstName: "Rakesh",
  //   lastName: "Shriwas",
  //   age: 30
  // };

  updateToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    return (
      <div className="App">
        {/* <Profile
        title={"Functional Components"}
        subTitle={"Start editing to see some magic happen!"}
        openAlert={openAlert}
        userData={dataObj}
      /> */}
        {/* <LifeCycleMethods /> */}
        {/* <ComponentDidMountLifeCycle /> */}
        {/* <ComponentDidUpdateLifeCycle /> */}
        {this.state.toggle ? <ComponentWillUnmountLifeCycle /> : null}
        <button onClick={this.updateToggle}>Distroy Component</button>
      </div>
    );
  }
}
