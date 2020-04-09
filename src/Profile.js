import React from "react";

// export default function Profile(props) {
//   const showAlert = temp => {
//     alert(temp);
//   };

//   return (
//     <>
//       <h1 onClick={showAlert}>{props.title}</h1>
//       <h3 onClick={showAlert}>{props.subTitle}</h3>
//       <button onClick={props.openAlert}>Open Alert</button>
//       <p>
//         {"Full Name : " +
//           props.userData.firstName +
//           " " +
//           props.userData.lastName +
//           ", Age: " +
//           props.userData.age}
//       </p>
//     </>
//   );
// }

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Rakesh Shriwas",
      email: "rakesh.shriwas88@gmail.com"
    };
  }
  showAlert = temp => {
    alert(temp);
  };

  updateState = () => {
    this.setState({
      name: "Aman Shariwas",
      email: "aman@gmail.com",
      showText: true
    });
  };

  toggleText = () => {
    this.setState({
      showText: !this.state.showText
    });
  };

  render() {
    return (
      <>
        {this.state.showText ? <h1>{this.state.name}</h1> : null}
        <p>{this.state.email}</p>
        <button onClick={this.updateState}>Update Name and Email</button>
        <button onClick={this.toggleText}>Toggle Text</button>

        <h1 onClick={() => this.showAlert(this.props.title)}>
          {this.props.title}
        </h1>
        <h3 onClick={() => this.showAlert(this.props.subTitle)}>
          {this.props.subTitle}
        </h3>
        <button onClick={this.props.openAlert}>Open Alert</button>
        <p>
          {"Full Name : " +
            this.props.userData.firstName +
            " " +
            this.props.userData.lastName +
            ", Age: " +
            this.props.userData.age}
        </p>
      </>
    );
  }
}
