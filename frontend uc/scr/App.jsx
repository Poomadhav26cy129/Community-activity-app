import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Issues from "./pages/Issues";
import ReportIssue from "./pages/ReportIssue";
import IssueDetails from "./pages/IssueDetails";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/issues" element={<Issues />} />

        <Route
          path="/issues/:id"
          element={<IssueDetails />}
        />

        <Route
          path="/report"
          element={<ReportIssue />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />
      </Route>
    </Routes>
  );
}