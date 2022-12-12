import React, { useState } from "react";
import AuthService from "./../services/auth.service";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    // firstName: "",
    // lastName: "",
    // email: "",
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  let navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user);
    // toast.success('registration successful, proceed to login')
    // navigate('/login')
  };

  return (
    <div className="container w-75 rounded">
      <div className="row bg-primary text-center rounded-top p-3">
        <div className="col-12 text-white fs-4 fw-bold">Register Account</div>
      </div>
      <div className="row justify-content-center text-center rounded">
        <div className="c-form bg-light">
          <form onSubmit={handleRegister}>
            <div>
              <div className="col-12 mt-3 fw-bold">
                <label htmlFor="username">Username:</label>
              </div>
              <div className="col-12">
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => handleChange("username", e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <div className="col-12 fw-bold">
                <label htmlFor="pass">Password (8 characters minimum):</label>
              </div>
              <div className="col-12">
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minLength="8"
                  required
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="col-12 fw-bold">
                <label htmlFor="passConf">Confirm Password:</label>
              </div>
              <div className="col-12">
                <input
                  type="password"
                  id="passConf"
                  name="password"
                  minLength="8"
                  required
                  onChange={(e) => handleChange("passwordConf", e.target.value)}
                />
              </div>
            </div>
            <input
              className="my-3 border border-2 border-secondary rounded p-2"
              id="bordertest"
              type="submit"
              value="Register"
              disabled={
                user.password &&
                user.password.length >= 8 &&
                user.password === user.passwordConf
                  ? false
                  : true
              }
            />
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
