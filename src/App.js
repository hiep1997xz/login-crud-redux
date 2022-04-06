import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header.js";
import Login from "./components/Login.js";
import Proteced from "./components/Proteced";
import Register from "./components/Register";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/add">
          <Proteced Cmp={AddProduct} />
        </Route>
        <Route path="/update">
          <Proteced Cmp={UpdateProduct} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
