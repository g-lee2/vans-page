import React from "react";
import { Link, NavLink } from "react-router-dom";
import loginImg from "../assets/images/avatar-icon.png";

function Header() {
  const navStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">#VANLIFE</Link>
      <nav>
        <NavLink to="/host" style={({isActive}) => isActive ? navStyle : null}>Host</NavLink>
        <NavLink to="/about" style={({isActive}) => isActive ? navStyle : null}>About</NavLink>
        <NavLink to="/vans" style={({isActive}) => isActive ? navStyle : null}>Vans</NavLink>
        <Link to="login" className="login-link">
          <img src={loginImg} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}

export default Header;

