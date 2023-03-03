import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const hostStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  } 

  return (
    <>
      <nav className="host-nav">
        <NavLink to="/host" end style={({isActive}) => isActive ? hostStyle : null}>Dashboard</NavLink>
        <NavLink to="/host/income" style={({isActive}) => isActive ? hostStyle : null}>Income</NavLink>
        <NavLink to="/host/vans" style={({isActive}) => isActive ? hostStyle : null}>Vans</NavLink>
        <NavLink to="/host/reviews" style={({isActive}) => isActive ? hostStyle : null}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
