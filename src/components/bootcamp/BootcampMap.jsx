import React, { useEffect, useRef, useState } from "react";
import {
  getOfflineBootcamps,
  formatCurrency,
} from "../../data/bootcampHelpers";
import "./BootcampMap.css";

const BootcampMap = ({ onMarkerClick }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);

  const offlineBootcamps = getOfflineBootcamps();

  useEffect(() => {
    // Dynamically import Leaflet to avoid server-side rendering issues
    const initializeMap = async () => {
      try {
        // Check if Leaflet is available
        if (typeof window !== "undefined") {
          const L = await import("leaflet");
          await import("leaflet/dist/leaflet.css");

          // Fix for default marker icons
          delete L.Icon.Default.prototype._getIconUrl;
          L.Icon.Default.mergeOptions({
            iconRetinaUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
            iconUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
          });

          if (mapRef.current && !mapInstanceRef.current) {
            // Initialize map centered on India
            const map = L.map(mapRef.current).setView([20.5937, 78.9629], 5);

            // Add OpenStreetMap tiles
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
              attribution: "© OpenStreetMap contributors",
              maxZoom: 18,
            }).addTo(map);

            // Custom icon for bootcamp markers
            const bootcampIcon = L.divIcon({
              className: "custom-bootcamp-marker",
              html: '<div class="marker-pin"></div>',
              iconSize: [30, 42],
              iconAnchor: [15, 42],
              popupAnchor: [0, -42],
            });

            // Add markers for each offline bootcamp
            offlineBootcamps.forEach((bootcamp) => {
              if (bootcamp.location && bootcamp.location.coordinates) {
                const { lat, lng } = bootcamp.location.coordinates;

                const marker = L.marker([lat, lng], {
                  icon: bootcampIcon,
                }).addTo(map);

                const formatDate = (dateString) => {
                  const date = new Date(dateString);
                  return date.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });
                };

                // Create popup content
                const popupContent = `
                  <div class="bootcamp-popup">
                    <h4 class="bootcamp-popup__title">${bootcamp.name}</h4>
                    <div class="bootcamp-popup__details">
                      <p class="bootcamp-popup__date">
                        <strong>Dates</strong><br/>
                        ${formatDate(bootcamp.startDate)} - ${formatDate(
                  bootcamp.endDate
                )}
                      </p>
                      <p class="bootcamp-popup__time">
                        <strong>Time</strong> ${bootcamp.time}
                      </p>
                      <p class="bootcamp-popup__location">
                        <strong>Venue</strong><br/>
                        ${bootcamp.location.venue}
                      </p>
                      <p class="bootcamp-popup__price">
                        <strong>Price</strong> ${formatCurrency(
                          bootcamp.price
                        )}
                      </p>
                      <p class="bootcamp-popup__capacity">
                        <strong>Seats</strong> ${bootcamp.enrolled}/${
                  bootcamp.capacity
                }
                      </p>
                    </div>
                    <button class="bootcamp-popup__btn" data-bootcamp-id="${
                      bootcamp.id
                    }">
                      View Full Details
                    </button>
                  </div>
                `;

                marker.bindPopup(popupContent, {
                  maxWidth: 300,
                  className: "custom-popup",
                });

                // Handle view details button click
                marker.on("popupopen", () => {
                  const btn = document.querySelector(
                    `[data-bootcamp-id="${bootcamp.id}"]`
                  );
                  if (btn) {
                    btn.addEventListener("click", () => {
                      onMarkerClick(bootcamp);
                      map.closePopup();
                    });
                  }
                });
              }
            });

            mapInstanceRef.current = map;
            setMapLoaded(true);
          }
        }
      } catch (err) {
        console.error("Error loading map:", err);
        setError("Failed to load map. Please ensure Leaflet is installed.");
      }
    };

    initializeMap();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [offlineBootcamps, onMarkerClick]);

  if (error) {
    return (
      <div className="bootcamp-map-error">
        <p>{error}</p>
        <p className="text-sm text-gray-500 mt-2">
          Run: <code>npm install leaflet react-leaflet</code>
        </p>
      </div>
    );
  }

  return (
    <div className="bootcamp-map-container">
      <div className="bootcamp-map-info">
        <h3>Offline Bootcamp Locations</h3>
        <p>
          {offlineBootcamps.length} offline bootcamp
          {offlineBootcamps.length !== 1 ? "s" : ""} available
        </p>
      </div>
      <div ref={mapRef} className="bootcamp-map" />
      {!mapLoaded && (
        <div className="bootcamp-map-loading">
          <div className="spinner"></div>
          <p>Loading map...</p>
        </div>
      )}
    </div>
  );
};

export default BootcampMap;
