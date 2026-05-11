import React, { useState } from "react";
import {
  getAllBootcamps,
  getBootcampsByType,
} from "../../../data/bootcampHelpers";
import BootcampCard from "../../../components/bootcamp/BootcampCard";
import BootcampCalendar from "../../../components/bootcamp/BootcampCalendar";
import "./BootcampCalendar.css";

const BootcampList = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid', 'calendar'
  const [filterType, setFilterType] = useState("all"); // 'all', 'online', 'offline'
  const [selectedBootcamps, setSelectedBootcamps] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBootcamp, setSelectedBootcamp] = useState(null);

  const allBootcamps = getAllBootcamps();
  const filteredBootcamps = getBootcampsByType(filterType);

  const handleViewDetails = (bootcamp) => {
    setSelectedBootcamp(bootcamp);
    setShowModal(true);
  };

  const handleDateSelect = (date, bootcamps) => {
    setSelectedBootcamps(bootcamps);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBootcamp(null);
    setSelectedBootcamps([]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bootcamp-calendar-page fade-in">
      {/* Hero */}
      <section className="bg-gray-50 py-20 text-center border-b border-gray-100" style={{ paddingTop: '140px' }}>
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Bootcamp Calendar</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Intensive accelerators designed to build specific skills and
            readiness dimensions. Choose from online or offline sessions across
            India.
          </p>
        </div>
      </section>

      <section className="service-single-layout">
        <div className="container">

          <div className="category-content">
            {/* View Controls */}
            <div className="bootcamp-controls">
              {/* View Mode Toggle */}
              <div className="view-toggle">
                <button
                  className={`view-toggle__btn ${
                    viewMode === "grid" ? "view-toggle__btn--active" : ""
                  }`}
                  onClick={() => setViewMode("grid")}
                  title="Grid View"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <span>Grid</span>
                </button>
                <button
                  className={`view-toggle__btn ${
                    viewMode === "calendar" ? "view-toggle__btn--active" : ""
                  }`}
                  onClick={() => setViewMode("calendar")}
                  title="Calendar View"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Calendar</span>
                </button>
              </div>

              {/* Category Filter */}
              <div className="category-filter">
                <button
                  className={`category-filter__btn ${
                    filterType === "all" ? "category-filter__btn--active" : ""
                  }`}
                  onClick={() => setFilterType("all")}
                >
                  All ({allBootcamps.length})
                </button>
                <button
                  className={`category-filter__btn ${
                    filterType === "online"
                      ? "category-filter__btn--active"
                      : ""
                  }`}
                  onClick={() => setFilterType("online")}
                >
                  Online (
                  {allBootcamps.filter((b) => b.type === "online").length})
                </button>
                <button
                  className={`category-filter__btn ${
                    filterType === "offline"
                      ? "category-filter__btn--active"
                      : ""
                  }`}
                  onClick={() => setFilterType("offline")}
                >
                  Offline (
                  {allBootcamps.filter((b) => b.type === "offline").length})
                </button>
              </div>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="bootcamp-grid">
                {filteredBootcamps.length > 0 ? (
                  filteredBootcamps.map((bootcamp) => (
                    <BootcampCard
                      key={bootcamp.id}
                      bootcamp={bootcamp}
                      onViewDetails={handleViewDetails}
                    />
                  ))
                ) : (
                  <div className="bootcamp-empty">
                    <p>No bootcamps found for the selected filter.</p>
                  </div>
                )}
              </div>
            )}

            {/* Calendar View */}
            {viewMode === "calendar" && (
              <div className="bootcamp-calendar-view">
                <BootcampCalendar
                  onDateSelect={handleDateSelect}
                  filterType={filterType}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal for Bootcamp Details */}
      {showModal && (
        <div className="bootcamp-modal-overlay" onClick={closeModal}>
          <div className="bootcamp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="bootcamp-modal__close" onClick={closeModal}>
              ×
            </button>

            {selectedBootcamp ? (
              /* Single bootcamp details */
              <div className="bootcamp-modal__content">
                <div className="bootcamp-modal__header">
                  <span
                    className={`bootcamp-badge bootcamp-badge--${selectedBootcamp.type}`}
                  >
                    {selectedBootcamp.type === "online" ? "Online" : "Offline"}
                  </span>
                  <h2>{selectedBootcamp.name}</h2>
                  <p className="bootcamp-modal__description">
                    {selectedBootcamp.description}
                  </p>
                </div>

                <div className="bootcamp-modal__body">
                  <div className="bootcamp-modal__section">
                    <h3>Schedule</h3>
                    <p>
                      <strong>Dates:</strong>{" "}
                      {formatDate(selectedBootcamp.startDate)} -{" "}
                      {formatDate(selectedBootcamp.endDate)}
                    </p>
                    <p>
                      <strong>Time:</strong> {selectedBootcamp.time}
                    </p>
                    <p>
                      <strong>Duration:</strong> {selectedBootcamp.duration}
                    </p>
                  </div>

                  {selectedBootcamp.type === "online" ? (
                    <div className="bootcamp-modal__section">
                      <h3>Platform</h3>
                      <p>{selectedBootcamp.platform}</p>
                    </div>
                  ) : (
                    <div className="bootcamp-modal__section">
                      <h3>Location</h3>
                      <p>
                        <strong>{selectedBootcamp.location.venue}</strong>
                      </p>
                      <p>{selectedBootcamp.location.address}</p>
                    </div>
                  )}

                  <div className="bootcamp-modal__section">
                    <h3>Instructor</h3>
                    <p>{selectedBootcamp.instructor}</p>
                  </div>

                  <div className="bootcamp-modal__section">
                    <h3>What You'll Learn</h3>
                    <ul className="feature-list">
                      {selectedBootcamp.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bootcamp-modal__section">
                    <h3>Prerequisites</h3>
                    <p>{selectedBootcamp.prerequisites}</p>
                  </div>

                  <div className="bootcamp-modal__section">
                    <h3>Enrollment</h3>
                    <div className="bootcamp-capacity-bar">
                      <div
                        className="bootcamp-capacity-fill"
                        style={{
                          width: `${
                            (selectedBootcamp.enrolled /
                              selectedBootcamp.capacity) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedBootcamp.enrolled} / {selectedBootcamp.capacity}{" "}
                      seats filled
                    </p>
                  </div>
                </div>

                <div className="bootcamp-modal__footer">
                  <button
                    className="btn-register"
                    onClick={() => (window.location.href = "/contact")}
                    disabled={
                      selectedBootcamp.enrolled >= selectedBootcamp.capacity
                    }
                  >
                    {selectedBootcamp.enrolled >= selectedBootcamp.capacity
                      ? "Fully Booked"
                      : "Enquire for Batch"}
                  </button>
                </div>
              </div>
            ) : selectedBootcamps.length > 0 ? (
              /* Multiple bootcamps for a date */
              <div className="bootcamp-modal__content">
                <div className="bootcamp-modal__header">
                  <h2>Bootcamps on This Date</h2>
                  <p className="text-gray-600">
                    {selectedBootcamps.length} bootcamp
                    {selectedBootcamps.length > 1 ? "s" : ""} available
                  </p>
                </div>

                <div className="bootcamp-list-modal">
                  {selectedBootcamps.map((bootcamp) => (
                    <div
                      key={bootcamp.id}
                      className="bootcamp-list-item"
                      onClick={() => handleViewDetails(bootcamp)}
                    >
                      <div className="bootcamp-list-item__header">
                        <span
                          className={`bootcamp-badge-small bootcamp-badge--${bootcamp.type}`}
                        >
                          {bootcamp.type === "online" ? "O" : "L"}
                        </span>
                        <h4>{bootcamp.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{bootcamp.time}</p>
                      <p className="text-sm text-gray-600">
                        {bootcamp.type === "online"
                          ? bootcamp.platform
                          : bootcamp.location.city}
                      </p>
                      <button className="btn-view-details">
                        View Details →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default BootcampList;
