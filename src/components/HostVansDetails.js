import React, { Suspense } from 'react';
import { Link, NavLink, Outlet, useLoaderData, defer, Await } from 'react-router-dom';
import { getVan } from "../api/firebase";

export function loader({params}) {
  const hostVanId = params.id;
  return defer({ vans: getVan(hostVanId) });
}

export default function HostVansDetails() {
  const dataPromise = useLoaderData();

  const hostStyle = {
    color: "#161616",
    textDecoration: "underline",
    fontWeight: 700
  }

  function hostVanDetailEl(hostVanDetail) {
    return (
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={hostVanDetail.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${hostVanDetail.type}`}>{hostVanDetail.type}</i>
            <h3>{hostVanDetail.name}</h3>
            <h4>${hostVanDetail.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink to="." end style={({isActive}) => isActive ? hostStyle : null}>Details</NavLink>
          <NavLink to="pricing" style={({isActive}) => isActive ? hostStyle : null}>Pricing</NavLink>
          <NavLink to="photos" style={({isActive}) => isActive ? hostStyle : null}>Photos</NavLink>
        </nav>
        <Outlet context={{ hostVanDetail }} />
      </div>
    );
  }
  
  return ( 
    <section>
      <Link to=".." relative="path" className="back-button">&larr;<span>Back to all vans</span></Link>
      <Suspense fallback={<h2>Loading host van detail...</h2>}>
        <Await resolve={dataPromise.vans}>
          {hostVanDetailEl}
        </Await>
      </Suspense>  
    </section>
  );
}
