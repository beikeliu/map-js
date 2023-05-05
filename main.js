import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import { center, zoom, tileApi } from "./config";
const map = L.map("map").setView(center, zoom);
L.tileLayer(tileApi).addTo(map);

const input = document.querySelector(".center");
input.placeholder = center;

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const latlng = input.value.split(",");
    console.log(latlng);
    try {
      map.setView(latlng);
    } catch (e) {
      console.log(e);
    }
  }
});
map.on("click", (e) => {
  const {
    latlng: { lat, lng },
  } = e;
  input.value = `${Number(lat).toFixed(6)},${Number(lng).toFixed(6)}`;
});
