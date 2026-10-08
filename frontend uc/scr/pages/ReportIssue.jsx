import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApp } from "../context/AppContext";
import { categories } from "../data/mockData";

export default function ReportIssue() {
  const navigate = useNavigate();
  const { addIssue } = useApp();

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [location, setLocation] = useState({
    latitude: 13.0827,
    longitude: 80.2707,
  });

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handlePhoto(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    setPhoto(file);

    const reader = new FileReader();

    reader.onload = () => {
      setPhotoPreview(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Location is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        alert(
          "Unable to access your location. Please allow location access."
        );
      }
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!category) {
      alert("Please select an issue category.");
      return;
    }

    if (!title.trim()) {
      alert("Please add a title.");
      return;
    }

    if (!description.trim()) {
      alert("Please describe the issue.");
      return;
    }

    if (!photo) {
      alert("Please upload a photo as verification.");
      return;
    }

    setSubmitting(true);

    try {
      await addIssue({
        title,
        description,
        category,
        latitude: location.latitude,
        longitude: location.longitude,
        location: "Community location",
        photo: photoPreview,
      });

      setSuccess(true);

      setTimeout(() => {
        navigate("/issues");
      }, 1500);
    } catch (error) {
      console.error(error);
      alert("Unable to submit the issue.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="container narrow">
        <div className="success-screen">
          <div className="success-icon">✓</div>

          <h1>Report submitted!</h1>

          <p>
            Thank you for helping your community. You earned
            <strong> 20 points</strong> for this report.
          </p>

          <p className="muted">
            Redirecting you to community issues...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container narrow">
      <section className="page-header">
        <div className="eyebrow">MAKE A REPORT</div>

        <h1>Report a community issue</h1>

        <p>
          Help your community identify problems by providing a
          location, description, and photo evidence.
        </p>
      </section>

      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-section">
          <label className="form-label">
            What is the problem?
          </label>

          <div className="category-grid">
            {categories.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`category-button ${
                  category === item.name
                    ? "category-selected"
                    : ""
                }`}
                onClick={() => setCategory(item.name)}
              >
                <span className="category-icon">
                  {item.icon}
                </span>

                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label className="form-label" htmlFor="title">
            Issue title
          </label>

          <input
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Large pothole near school"
            maxLength={100}
          />
        </div>

        <div className="form-section">
          <label className="form-label" htmlFor="description">
            Describe the problem
          </label>

          <textarea
            id="description"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            placeholder="Tell the community what is happening..."
            rows={5}
            maxLength={500}
          />
        </div>

        <div className="form-section">
          <label className="form-label">Location</label>

          <div className="location-box">
            <div>
              <strong>📍 Selected location</strong>

              <span>
                {location.latitude.toFixed(5)},{" "}
                {location.longitude.toFixed(5)}
              </span>
            </div>

            <button
              type="button"
              className="secondary-button"
              onClick={useCurrentLocation}
            >
              Use my location
            </button>
          </div>
        </div>

        <div className="form-section">
          <label className="form-label">
            Photo verification
          </label>

          <p className="form-help">
            Upload a photo showing the problem. This helps the
            community verify that the issue actually exists.
          </p>

          <label className="photo-upload">
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Issue preview"
                className="photo-preview"
              />
            ) : (
              <>
                <span className="upload-icon">📷</span>

                <strong>Upload a photo</strong>

                <span>
                  JPG, PNG or WEBP · Max 10MB
                </span>
              </>
            )}

            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handlePhoto}
              hidden
            />
          </label>
        </div>

        <div className="points-notice">
          <span>⭐</span>

          <div>
            <strong>Earn 20 points</strong>

            <p>
              Every valid photo-verified report contributes to
              your community score.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="primary-button full-width"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
}