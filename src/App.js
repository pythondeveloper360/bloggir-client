import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/Nav";
class App extends Component {
  constructor() {
    super();
    this.alterDisplay = this.alterDisplay.bind(this);
    this.state = {
      loggedIn: false,
      mainDisplay: "login",
    };
  }
  componentDidMount() {
    // if (loginAuth()) {
    //   this.setState({ loggedIn: true });
    // }
  }

  alterDisplay(screen) {
    this.setState({ mainDisplay: screen });
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
              <Routes >
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Login />} />
              </Routes>
            </>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
