import React, { useState, Suspense } from 'react';
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import { getAllVans } from '../api/firebase';

export function loader() {
  return defer({ vans: getAllVans() });
}

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

  function renderVanElements(vans) {
    const filteredVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans;

    const vanElements = filteredVans.map(van => (
      <div key={van.id} className="van-tile">
        <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </Link>
      </div>
    )); 

    return (
      <div>
        <div className='van-list-filter-buttons'>
          <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
          <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
          <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
          {typeFilter && <button onClick={() => setSearchParams({})} className='van-type clear-filters'>Clear filter</button>}
        </div>
        <div className="van-list">
          {vanElements}
        </div>
      </div>
    )
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Suspense fallback={<h2>Loading Van...</h2>}>
        <Await resolve={dataPromise.vans}>
          {renderVanElements}
        </Await>
      </Suspense>
    </div>
  );
}
