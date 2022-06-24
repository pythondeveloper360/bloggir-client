import { useState } from "react";
import { Link } from "react-router-dom";
import { checkAvailable, signUp } from "../ReqFuns";
const SignUp = ({ _selectScreen }) => {
  let [available, setAvailable] = useState("");
  let [_available, _setAvailable] = useState(true);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [reqeatPassword, setRepeatPassword] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");
  let [done, setDone] = useState(false);
  function checkAvailablity(username) {
    if (username) {
      checkAvailable(username)
        .then((res) => res.json())
        .then((data) => {
          if (data.found) {
            setAvailable("⚠️ Already taken");
            _setAvailable(false);
            setError("⚠️ Username already taken");
          } else {
            if (error === "⚠️ Username already taken") {
              setError("");
            }
            setAvailable("✔️ Available");
            _setAvailable(true);
          }
        });
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div className="signupBox">
        <input
          placeholder="Username"
          className="loginInput"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <div className="loginInput">
          <button
            id="checkBtn"
            onClick={() => {
              checkAvailablity(username);
            }}
          >
            Check
          </button>
          <span style={{ fontSize: 15, marginLeft: 10 }}>{available}</span>
        </div>
        <input
          placeholder="Name"
          className="loginInput"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="loginInput"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="loginInput"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Repeat Password"
          className="loginInput"
          value={reqeatPassword}
          onChange={(event) => {
            setRepeatPassword(event.target.value);
          }}
        ></input>

        <button
          className="loginInput"
          onClick={() => {
            checkAvailablity(username);
            if (!name) {
              setError("⚠️ Please provide name");
            } else if (!email) {
              setError("⚠️ Email must be provided");
            } else if (password !== reqeatPassword) {
              setError("⚠️ Passwords does not match");
            } else if (!_available) {
              setError("⚠️ Username already taken");
            } else {
              signUp(username, password, name)
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.status) {
                    setDone(true);
                  }
                });
            }
          }}
        >
          SignUp
        </button>
        <span style={{ margin: 3 }}>
          {done ? (
            <>
              <span style={{ marginRight: 3 }}>All done</span>
              <Link
                to="/"
                onClick={() => {
                  _selectScreen("/login");
                }}
              >
                Go to login page{" "}
              </Link>
            </>
          ) : (
            error
          )}
        </span>
      </div>
    </div>
  );
};

export default SignUp;
