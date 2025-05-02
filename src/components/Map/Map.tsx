import { LatLngExpression, LatLngLiteral } from "leaflet";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import {
  IBecomeHostContext,
  useBecomeHost,
} from "../../context/BecomeHostContext";
import { SELECT_LOCATION } from "../../context/constant";
import { MARKER_RED } from "./constant";

interface IProps {
  defaultLocation: LatLngExpression;
}

function Map({ defaultLocation }: IProps) {
  const {
    dispatch,
    state: {
      propertyLocation: { latlng },
    },
  } = useBecomeHost() as IBecomeHostContext;

  const LocationMarker = () => {
    const map = useMapEvents({
      click(event) {
        dispatch({
          type: SELECT_LOCATION,
          payload: {
            latlng: event.latlng,
            province: null,
            countryCode: null,
            locationStr: null,
          },
        });
        map.flyTo(event.latlng);
      },
    });
    return latlng === null ? null : (
      <Marker position={latlng} icon={MARKER_RED}></Marker>
    );
  };

  return (
    <MapContainer
      center={defaultLocation}
      zoom={8}
      scrollWheelZoom={true}
      style={{ height: "75vh", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />
      {latlng && <ChangeCenter position={latlng} />}
    </MapContainer>
  );
}
function ChangeCenter({ position }: { position: LatLngLiteral }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
