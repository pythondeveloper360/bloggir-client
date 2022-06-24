import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/Nav";
import SignUp from "./components/SignUp";
import { loginAuth } from "./ReqFuns";
class App extends Component {
  constructor() {
    super();
    this.alterDisplay = this.alterDisplay.bind(this);
    this.redirectToLoginPage = this.redirectToLoginPage.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      loggedIn: false,
      mainDisplay: "login",
    };
  }
  componentDidMount() {
    let username = localStorage.getItem("username");
    let token = localStorage.getItem("token");
    let client_id = localStorage.getItem("client_id")
    console.log(username)
    console.log(token)
    console.log(client_id)
    if (username && token && client_id) {
      loginAuth(username,token,client_id)
        .then((res) => res.json())
        .then((data) => {
          if (data.auth) {
            this.setState({ loggedIn: true });
          }
        });
    }

    if (!this.state.loggedIn && window.location.pathname === "/") {
      this.setState({ mainDisplay: "/login" });
    } else if (this.state.loggedIn) {
      this.setState({ mainDisplay: "/home" });
    } else {
      this.setState({ mainDisplay: window.location.pathname });
    }
  }

  alterDisplay(screen) {
    this.setState({ mainDisplay: screen });
  }
  login() {
    this.setState({ loggedIn: true });
  }
  redirectToLoginPage() {
    this.setState({ mainDisplay: "/login" });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar
            loggedIn={this.state.loggedIn}
            screen={this.state.mainDisplay}
            selectScreen={this.alterDisplay}
          />
          {this.state.loggedIn ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cp" element={<Home />} />
            </Routes>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Login loginAction={this.login} />} />
                <Route
                  path="/signup"
                  element={<SignUp _selectScreen={this.alterDisplay}  />}
                />
              </Routes>
            </>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
