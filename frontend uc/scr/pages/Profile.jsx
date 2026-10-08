import React from "react";

import { useApp } from "../context/AppContext";

export default function Profile() {
  const { profile, badges, issues } = useApp();

  const earnedBadges = badges.filter(
    (badge) => badge.earned
  );

  return (
    <div className="container">
      <section className="profile-header">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="profile-avatar"
        />

        <div>
          <div className="eyebrow">COMMUNITY MEMBER</div>

          <h1>{profile.name}</h1>

          <p>{profile.username}</p>
        </div>

        <div className="profile-points">
          <strong>{profile.points}</strong>
          <span>points</span>
        </div>
      </section>

      <section className="profile-stats">
        <div>
          <strong>{profile.reports}</strong>
          <span>Reports</span>
        </div>

        <div>
          <strong>{profile.verifications}</strong>
          <span>Verifications</span>
        </div>

        <div>
          <strong>{profile.resolved}</strong>
          <span>Issues resolved</span>
        </div>

        <div>
          <strong>{earnedBadges.length}</strong>
          <span>Badges</span>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ACHIEVEMENTS</div>
            <h2>Your badges</h2>
          </div>
        </div>

        <div className="badge-grid">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`badge-card ${
                badge.earned ? "badge-earned" : "badge-locked"
              }`}
            >
              <div className="badge-icon">{badge.icon}</div>

              <h3>{badge.name}</h3>

              <p>{badge.description}</p>

              <span>
                {badge.earned ? "✓ Earned" : "🔒 Locked"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">YOUR CONTRIBUTIONS</div>
            <h2>Recent reports</h2>
          </div>
        </div>

        <div className="profile-issues">
          {issues
            .filter((issue) => issue.author === profile.name)
            .slice(0, 5)
            .map((issue) => (
              <div className="profile-issue" key={issue.id}>
                <img src={issue.photo} alt="" />

                <div>
                  <strong>{issue.title}</strong>
                  <span>{issue.category}</span>
                </div>

                <div className="profile-issue-points">
                  +{issue.points}
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}