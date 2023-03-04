import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const hostStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  } 

  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end style={({isActive}) => isActive ? hostStyle : null}>Dashboard</NavLink>
        <NavLink to="income" style={({isActive}) => isActive ? hostStyle : null}>Income</NavLink>
        <NavLink to="vans" style={({isActive}) => isActive ? hostStyle : null}>Vans</NavLink>
        <NavLink to="reviews" style={({isActive}) => isActive ? hostStyle : null}>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
