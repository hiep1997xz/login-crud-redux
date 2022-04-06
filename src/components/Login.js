import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  const login = async () => {
    let item = { email, password };
    let getData = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    getData = await getData.json();
    localStorage.setItem('user-info', JSON.stringify(getData));
    history.push("/add")
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
