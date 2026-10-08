import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useApp } from "../context/AppContext";

export default function IssueDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { issues, verify } = useApp();

  const issue = issues.find((item) => item.id === id);

  if (!issue) {
    return (
      <div className="container narrow">
        <div className="empty-state">
          <div>🔍</div>

          <h2>Issue not found</h2>

          <p>
            This report may have been removed or is no longer
            available.
          </p>

          <Link to="/issues" className="primary-button">
            Back to issues
          </Link>
        </div>
      </div>
    );
  }

  async function handleVerify() {
    await verify(issue.id);

    alert(
      "Thanks! You verified this issue and earned 5 points."
    );
  }

  return (
    <div className="container narrow">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <article className="issue-detail">
        <div className="detail-image-wrapper">
          <img
            src={issue.photo}
            alt={issue.title}
            className="detail-image"
          />

          <span className="detail-category">
            {issue.category}
          </span>
        </div>

        <div className="detail-body">
          <div className="detail-status-row">
            <span className="detail-status">
              {issue.status}
            </span>

            <span className="detail-date">
              {issue.createdAt}
            </span>
          </div>

          <h1>{issue.title}</h1>

          <p className="detail-description">
            {issue.description}
          </p>

          <div className="detail-info">
            <div>
              <span>Reported by</span>
              <strong>👤 {issue.author}</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>📍 {issue.location}</strong>
            </div>

            <div>
              <span>Coordinates</span>
              <strong>
                {issue.latitude.toFixed(5)},{" "}
                {issue.longitude.toFixed(5)}
              </strong>
            </div>
          </div>

          <div className="verification-card">
            <div className="verification-icon">✓</div>

            <div>
              <strong>
                {issue.verifications} people verified this
                issue
              </strong>

              <p>
                Have you seen the same problem? Verify this
                report to help your community.
              </p>
            </div>
          </div>

          <button
            className="primary-button full-width"
            onClick={handleVerify}
          >
            ✓ I can verify this issue (+5 points)
          </button>
        </div>
      </article>
    </div>
  );
}