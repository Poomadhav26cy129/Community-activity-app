import React from "react";
import { Link } from "react-router-dom";

const statusColors = {
  Reported: "status-blue",
  Verified: "status-purple",
  "In Progress": "status-orange",
  Resolved: "status-green",
};

export default function IssueCard({ issue }) {
  return (
    <Link to={`/issues/${issue.id}`} className="issue-card">
      <div className="issue-image-wrapper">
        <img
          src={issue.photo}
          alt={issue.title}
          className="issue-image"
        />

        <span
          className={`status-badge ${
            statusColors[issue.status] || "status-blue"
          }`}
        >
          {issue.status}
        </span>
      </div>

      <div className="issue-card-body">
        <div className="issue-category">
          {issue.category}
        </div>

        <h3>{issue.title}</h3>

        <p>{issue.description}</p>

        <div className="issue-meta">
          <span>📍 {issue.location}</span>
          <span>🕐 {issue.createdAt}</span>
        </div>

        <div className="issue-footer">
          <span>👤 {issue.author}</span>
          <span>✓ {issue.verifications} verified</span>
        </div>
      </div>
    </Link>
  );
}