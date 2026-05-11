import React from "react";
import {
  formatCurrency,
  getAvailabilityPercentage,
  isBootcampFull,
} from "../../data/bootcampHelpers";
import Button from "../common/Button";
import "./BootcampCard.css";

const BootcampCard = ({ bootcamp, onViewDetails }) => {
  const availabilityPercent = getAvailabilityPercentage(bootcamp);
  const isFull = isBootcampFull(bootcamp);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className={`bootcamp-card ${isFull ? "bootcamp-card--full" : ""}`}>
      <div className="bootcamp-card__image">
        <img src={bootcamp.image} alt={bootcamp.name} />
        <span
          className={`bootcamp-card__badge bootcamp-card__badge--${bootcamp.type}`}
        >
          {bootcamp.type === "online" ? "Online" : "Offline"}
        </span>
      </div>

      <div className="bootcamp-card__body">
        <h3 className="bootcamp-card__title">{bootcamp.name}</h3>
        <p className="bootcamp-card__description">{bootcamp.description}</p>

        <div className="bootcamp-card__details">
          <div className="bootcamp-card__detail">
            <span className="bootcamp-card__detail-label">Dates:</span>
            <span className="bootcamp-card__detail-value">
              {formatDate(bootcamp.startDate)} - {formatDate(bootcamp.endDate)}
            </span>
          </div>

          <div className="bootcamp-card__detail">
            <span className="bootcamp-card__detail-label">Time:</span>
            <span className="bootcamp-card__detail-value">{bootcamp.time}</span>
          </div>

          <div className="bootcamp-card__detail">
            <span className="bootcamp-card__detail-label">Duration:</span>
            <span className="bootcamp-card__detail-value">
              {bootcamp.duration}
            </span>
          </div>

          {bootcamp.type === "online" ? (
            <div className="bootcamp-card__detail">
              <span className="bootcamp-card__detail-label">Platform:</span>
              <span className="bootcamp-card__detail-value">
                {bootcamp.platform}
              </span>
            </div>
          ) : (
            <div className="bootcamp-card__detail">
              <span className="bootcamp-card__detail-label">Location:</span>
              <span className="bootcamp-card__detail-value">
                {bootcamp.location.city}
              </span>
            </div>
          )}

          <div className="bootcamp-card__detail">
            <span className="bootcamp-card__detail-label">Instructor:</span>
            <span className="bootcamp-card__detail-value">
              {bootcamp.instructor}
            </span>
          </div>
        </div>

        <div className="bootcamp-card__capacity">
          <div className="bootcamp-card__capacity-bar">
            <div
              className="bootcamp-card__capacity-fill"
              style={{ width: `${100 - availabilityPercent}%` }}
            ></div>
          </div>
          <span className="bootcamp-card__capacity-text">
            {bootcamp.enrolled}/{bootcamp.capacity} enrolled
            {isFull && <span className="bootcamp-card__full-badge">FULL</span>}
          </span>
        </div>

        <div className="bootcamp-card__footer" style={{ justifyContent: 'flex-end' }}>
          <Button
            variant="premium"
            size="medium"
            onClick={() => onViewDetails(bootcamp)}
            disabled={isFull}
          >
            {isFull ? "Fully Booked" : "View Details"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BootcampCard;
