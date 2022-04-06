import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("./add");
    }
  }, []);

  const signUp = async () => {
    let item = { name, email, password };
    const getdata = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    getdata = await getdata.json();
    console.log(getdata);
    localStorage.setItem("user-info", JSON.stringify(getdata));
    history.push("/add");
  };

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User Sign In</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="name"
      />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br />
      <button className="btn btn-primary" onClick={signUp}>
        Sign In
      </button>
    </div>
  );
};

export default Register;
