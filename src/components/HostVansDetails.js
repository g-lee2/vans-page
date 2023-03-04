import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function HostVansDetails() {
  const params = useParams();
  const [hostVanDetail, setHostVanDetail] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setHostVanDetail(data.vans))
  }, []);

  if (!hostVanDetail) {
    return <h1>Loading...</h1>
  } 
  
  return ( 
    <section>
      <Link to=".." relative="path" className="back-button">&larr;<span>Back to all vans</span></Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={hostVanDetail.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${hostVanDetail.type}`}>{hostVanDetail.type}</i>
            <h3>{hostVanDetail.name}</h3>
            <h4>${hostVanDetail.price}/day</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostVansDetails;
