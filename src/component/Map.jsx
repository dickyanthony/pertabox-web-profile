import React, { useMemo } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

export default function Map(props) {
  const { className } = props;
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 1.1214816811658828, lng: 104.00545245102158 }),
    []
  );
  return (
    <>
      {!isLoaded ? (
        <h1>Loading</h1>
      ) : (
        <GoogleMap center={center} zoom={15} mapContainerClassName={className}>
          <MarkerF
            position={{ lat: 1.1214816811658828, lng: 104.00545245102158 }}
          />
        </GoogleMap>
      )}
    </>
  );
}
