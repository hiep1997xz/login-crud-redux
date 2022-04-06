import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user-name"));
  const logout = () => {
    localStorage.clear();
    history.push("/register");
  };
  return (
    <div>
      <Navbar bg="dark" variant="darrk">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto nav_bar_wrapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/add">Add Product</Link>
              <Link to="/update">Update Product</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>

        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown
                title={ user && user.name}
            //   title="User Name"
            >
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
};

export default Header;
