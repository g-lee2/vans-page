import React from "react";
import { Outlet, Navigate } from 'react-router-dom';

function AuthRequired() {
  const auth = { token: null };
  if (!auth.token) {
    return <Navigate to="login" />
  }

  if (auth.token) {
    return <Outlet />
  }
  
}

export default AuthRequired;
