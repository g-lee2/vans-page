import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <img src={hostVanDetail.imageUrl} width={150} />
      <h2>{hostVanDetail.name}</h2>
      <p>{hostVanDetail.price}</p>
      <p>{hostVanDetail.type}</p>
    </div>
  );
}

export default HostVansDetails;
