import { Link } from "react-router-dom";
import "../App.css";
let NavBar = ({ loggedIn, screen, selectScreen }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={process.env.PUBLIC_URL + "/Bloggir.png"}
          className="logo"
          alt="logo"
        ></img>
        <ul className="navBar">
          {loggedIn ? (
            <>
              <Link
              to = '/'
                className={`navBarItem ${
                  screen === "/home" ? "navBarSelected" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/cp"
                onClick={() => {
                  selectScreen("cp");
                }}
                className={`navBarItem ${
                  screen === "/cp" ? "navBarSelected" : ""
                }`}
              >
                Control Pannel
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                onClick={() => {
                  selectScreen("/login");
                }}
                className={`navBarItem ${
                  screen === "/login" ? "navBarSelected" : ""
                }`}
              >
                Login
              </Link>
              <Link
                to={`/signup`}
                onClick={() => {
                  selectScreen("/signup");
                }}
                className={`navBarItem ${
                  screen === "/signup" ? "navBarSelected" : ""
                }`}
              >
                SignUp
              </Link>
            </>
          )}
        </ul>
      </div>
      <div className="seperator"></div>
    </>
  );
};
export default NavBar;
