import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import AuthService from "./../services/auth.service";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const [state, dispatch] = useGlobalState();

  let navigate = useNavigate();

  const logout = () => {
    AuthService.logout();
    dispatch({
      currentUserToken: null,
      currentUser: null,
    });
    navigate("/");
  };
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "space-evenly",
          listStyle: "none",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        {!state.currentUser && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!state.currentUser && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {state.currentUser && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
        {state.currentUser && (
          <button className="button" onClick={() => logout()}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
