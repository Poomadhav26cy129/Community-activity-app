import React, { useState } from "react";

import { useApp } from "../context/AppContext";
import IssueCard from "../components/IssueCard";

export default function Issues() {
  const { issues } = useApp();

  const [filter, setFilter] = useState("All");

  const filteredIssues =
    filter === "All"
      ? issues
      : issues.filter((issue) => issue.status === filter);

  const filters = [
    "All",
    "Reported",
    "Verified",
    "In Progress",
    "Resolved",
  ];

  return (
    <div className="container">
      <section className="page-header">
        <div className="eyebrow">COMMUNITY ISSUES</div>

        <h1>Problems around the city</h1>

        <p>
          Explore problems reported by people in your community.
          Verify issues when you see the same problem yourself.
        </p>
      </section>

      <div className="filter-bar">
        {filters.map((item) => (
          <button
            key={item}
            className={filter === item ? "filter-active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="issue-grid large-grid">
        {filteredIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <div className="empty-state">
          <div>📭</div>
          <h3>No issues found</h3>
          <p>
            There are no reports matching this filter yet.
          </p>
        </div>
      )}
    </div>
  );
}