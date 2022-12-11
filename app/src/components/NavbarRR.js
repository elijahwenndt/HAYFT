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
    // <nav className="stick-top">
      <div className="container-fluid mb-3 sticky-top text-white">
        <div className="row text-center align-items-center hover text-white bg-primary p-2">
        <h4 id="links" className="col-6 text-start fw-bold hover">
          <Link to="/">HAYFT</Link>
        </h4>
        {!state.currentUser && (
          <div id="links" className="col-3 text-end hover text-white">
            <Link to="/login">Login</Link>
          </div>
        )}
        {!state.currentUser && (
          <div id="links" className="col-3 text-start hover text-white">
            <Link to="/register">Register</Link>
          </div>
        )}
        {state.currentUser && (
          <div id="links" className="col-2 text-center hover text-white">
            <Link to="/profile">Profile</Link>
          </div>
        )}
        {state.currentUser && (
          <div id="links" className="col-2 text-center hover text-white text-wrap">
            <Link to="/yourjourney">Your Journey</Link>
          </div>
        )}
        {state.currentUser && (
          <div id="links" className="col-2 text-center hover text-white" onClick={() => logout()}>
            Logout
          </div>
        )}
      </div>
      </div>
    // </nav>
  );
}

export default NavBar;
