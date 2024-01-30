import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "165899755294-qd0apcf1krcd1svol3hmb2240ubncm76.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "Streamers",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignINClick = () => this.auth.signIn();

  onSignOUTClick = () => this.auth.signOut();

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOUTClick} className="ui red google button">
          <i className="google icon"></i> Sign out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignINClick} className="ui red google button">
          <i className="google icon"></i> Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
