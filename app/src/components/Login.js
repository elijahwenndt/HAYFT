import React, { useState } from "react"
import AuthService from "./../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";

const Login = () => {
  let navigate = useNavigate();

  const [ state, dispatch ] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService
      .login(username, password)
      .then(async (resp) => {
        let data = jwtDecode(resp.access)
        await dispatch({
          currentUserToken: resp.access,
          currentUser: data
        })
        navigate('/profile')
      });
  }

  return (
    <div className="container w-75 vh-100">
      <div className="row bg-primary text-center text-white rounded-top p-2 justify-content-center align-items-center">
        <div className="col-12 fs-4 fw-bold">Log In</div>
      </div>
      
    <div className="c-form bg-light p-2">
      <form onSubmit={handleLogin}>
        <div>
          <div className="col-12 fw-bold">
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
    
  )

}

export default Login