import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "../context/AppContext";
import MapView from "../components/MapView";
import IssueCard from "../components/IssueCard";

export default function Dashboard() {
  const { issues, profile } = useApp();

  const resolved = issues.filter(
    (issue) => issue.status === "Resolved"
  ).length;

  return (
    <div className="container">
      <section className="hero">
        <div>
          <div className="eyebrow">YOUR COMMUNITY</div>

          <h1>
            Small reports.
            <br />
            <span>Big impact.</span>
          </h1>

          <p>
            Spot a problem in your city, report it with evidence,
            and help your community make the area better.
          </p>

          <Link to="/report" className="primary-button">
            📍 Report a Problem
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <strong>{profile.points}</strong>
            <span>Points</span>
          </div>

          <div>
            <strong>{profile.reports}</strong>
            <span>Reports</span>
          </div>

          <div>
            <strong>{profile.verifications}</strong>
            <span>Verifications</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">LIVE MAP</div>
            <h2>What's happening nearby?</h2>
          </div>

          <Link to="/issues" className="text-button">
            View all →
          </Link>
        </div>

        <MapView issues={issues} />
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">COMMUNITY REPORTS</div>
            <h2>Recent issues</h2>
          </div>

          <Link to="/report" className="secondary-button">
            + Add report
          </Link>
        </div>

        <div className="issue-grid">
          {issues.slice(0, 4).map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </section>

      <section className="impact-card">
        <div>
          <div className="eyebrow">COMMUNITY IMPACT</div>

          <h2>
            Every report helps create
            <br />
            a better city.
          </h2>

          <p>
            Keep reporting problems and verifying issues around
            you. Your contributions make it easier for communities
            to identify what needs attention.
          </p>
        </div>

        <div className="impact-number">
          <strong>{issues.length}</strong>
          <span>Active reports</span>
        </div>
      </section>
    </div>
  );
}