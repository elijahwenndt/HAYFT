import React, { useState } from "react";
import AuthService from "./../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(username, password).then(async (resp) => {
      // toast.error("error test");
      // try {
      let data = jwtDecode(resp.access);
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data,
        });
        navigate("/profile");
        // toast.error("error test");
      // } catch {
      //   toast.error("error test");
      // }
    })
    .catch(error => toast.error("username or password incorrect!"))
  };

  return (
    <div className="container w-75 rounded">
      <div className="row bg-primary text-center text-white rounded-top p-3">
        <div className="col-12 fs-4 fw-bold">Log In</div>
      </div>
      <div className="row justify-content-center text-center rounded">
        <div className="c-form bg-light">
          <form onSubmit={handleLogin}>
            <div>
              <div className="col-12 mt-3 fw-bold">
                <label htmlFor="username">Username</label>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="col-12 fw-bold">
                <label htmlFor="pass">Password</label>
              </div>
              <div className="col-12">
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minLength="8"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <input
              id="bordertest"
              className="my-3 text-white bg-primary rounded p-2"
              type="submit"
              value="Sign in"
            />
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
