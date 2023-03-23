import React, { Suspense } from "react";
import { Link, useLocation, useLoaderData, defer, Await } from "react-router-dom";
import { getVan } from "../api/firebase";

export function loader({params}) {
  const vanId = params.id;
  return defer({ vans: getVan(vanId) });
}

export default function VanDetail() {
  const location = useLocation();
  const dataPromise = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">&larr; <span>Back to {type} vans</span></Link>
      <Suspense fallback={<h2>Loading van detail...</h2>}>
        <Await resolve={dataPromise.vans}>
          {(vanDetail) => (
            <div className="van-detail">
              <img src={vanDetail.imageUrl} />
              <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i>
              <h2>{vanDetail.name}</h2>
              <p className="van-price"><span>${vanDetail.price}</span>/day</p>
              <p>{vanDetail.description}</p>
              <button className="link-button">Rent this van</button>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  )
}

