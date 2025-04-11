import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <div className={styles.map}>
        <h3>
          Location: {lat}, {lng}
        </h3>
        <button onClick={lat}></button>
      </div>
    </div>
  );
}

export default Map;
