import { useState } from "react";
import "../App.css";
import { loginUser } from "../ReqFuns";
const Login = ({ loginAction, login }) => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div className="loginBox">
        <h3 className="loginInput">{login ? "You are already Logged In" : ""}</h3>

        <input
          className="loginInput"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Username"
        ></input>
        <input
          className="loginInput"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
        ></input>
        <button
          className="loginInput"
          onClick={() => {
            loginUser(username, password)
              .then((res) => res.json())
              .then((data) => {
                if (data.auth) {
                  localStorage.setItem("username", username);
                  localStorage.setItem("token", data.token);
                  localStorage.setItem("client_id", data.client_id);
                  setError("");
                  loginAction();
                } else {
                  setError("⚠️ Username or password is incorrect");
                }
              });
          }}
        >
          Login
        </button>
        <span className="loginInput">{error}</span>
      </div>
    </div>
  );
};
export default Login;
