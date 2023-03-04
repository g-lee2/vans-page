import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVansPhotos() {
  const {hostVanDetail} = useOutletContext();
  return (
    <img src={hostVanDetail.imageUrl} className="host-van-detail-image" />
  );
}

export default HostVansPhotos;
