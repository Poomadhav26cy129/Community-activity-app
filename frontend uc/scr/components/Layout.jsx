import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-icon">🌍</div>

          <div>
            <div className="brand-name">Community Activity</div>
            <div className="brand-subtitle">
              Make your city better, together.
            </div>
          </div>
        </div>

        <nav className="desktop-nav">
          <NavLink to="/" end>
            Dashboard
          </NavLink>

          <NavLink to="/issues">Issues</NavLink>

          <NavLink to="/report">Report Issue</NavLink>

          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <nav className="mobile-nav">
        <NavLink to="/" end>
          <span>🏠</span>
          Home
        </NavLink>

        <NavLink to="/issues">
          <span>📍</span>
          Issues
        </NavLink>

        <NavLink to="/report">
          <span>➕</span>
          Report
        </NavLink>

        <NavLink to="/profile">
          <span>👤</span>
          Profile
        </NavLink>
      </nav>
    </div>
  );
}