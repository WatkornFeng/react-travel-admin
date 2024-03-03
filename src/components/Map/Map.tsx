import { LatLng, LatLngExpression } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { MARKER_RED } from "./constant";
import { useEffect, useState } from "react";
import { getLocationFromLatLng } from "../../utils/getLocation";
import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { SELECT_LOCATION } from "../../context/constant";

// const locationBangkok = undefined;

interface IProps {
  // setPosition: React.Dispatch<React.SetStateAction<LatLng | null>>;
  defaultLocation: LatLngExpression;
}

function Map({ defaultLocation }: IProps) {
  const { dispatch } = useBecomeHost() as IBecomeHostContext;

  const LocationMarker = () => {
    const map = useMapEvents({
      click(event) {
        dispatch({
          type: SELECT_LOCATION,
          payload: {
            latlng: event.latlng,
            province: "",
            countryCode: "",
          },
        });
        // setPosition(event.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={defaultLocation}
      zoom={6}
      scrollWheelZoom={true}
      // style={{ height: "100vh" }}
      style={{ height: "500px", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={locationBangkok} icon={MARKER_RED}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
