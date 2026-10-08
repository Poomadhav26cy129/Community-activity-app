import React, { createContext, useContext, useEffect, useState } from "react";

import { APP_CONFIG } from "../config";
import {
  mockIssues,
  mockProfile,
  mockBadges,
} from "../data/mockData";

import {
  getIssues,
  getProfile,
  getBadges,
  createIssue,
  verifyIssue,
} from "../services/api";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [issues, setIssues] = useState(mockIssues);
  const [profile, setProfile] = useState(mockProfile);
  const [badges, setBadges] = useState(mockBadges);
  const [loading, setLoading] = useState(false);

  async function loadData() {
    setLoading(true);

    if (APP_CONFIG.useMockData) {
      setIssues(mockIssues);
      setProfile(mockProfile);
      setBadges(mockBadges);
      setLoading(false);
      return;
    }

    try {
      const [issuesData, profileData, badgesData] =
        await Promise.all([
          getIssues(),
          getProfile(),
          getBadges(),
        ]);

      setIssues(issuesData);
      setProfile(profileData);
      setBadges(badgesData);
    } catch (error) {
      console.error("Unable to load API data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function addIssue(issue) {
    if (APP_CONFIG.useMockData) {
      const newIssue = {
        ...issue,
        id: `issue-${Date.now()}`,
        status: "Reported",
        createdAt: "Just now",
        author: profile.name,
        verifications: 0,
        points: 20,
      };

      setIssues((previous) => [newIssue, ...previous]);

      setProfile((previous) => ({
        ...previous,
        points: previous.points + 20,
        reports: previous.reports + 1,
      }));

      return newIssue;
    }

    const created = await createIssue(issue);

    setIssues((previous) => [created, ...previous]);

    return created;
  }

  async function verify(issueId) {
    if (APP_CONFIG.useMockData) {
      setIssues((previous) =>
        previous.map((issue) =>
          issue.id === issueId
            ? {
                ...issue,
                verifications: issue.verifications + 1,
              }
            : issue
        )
      );

      setProfile((previous) => ({
        ...previous,
        points: previous.points + 5,
        verifications: previous.verifications + 1,
      }));

      return;
    }

    await verifyIssue(issueId);

    await loadData();
  }

  return (
    <AppContext.Provider
      value={{
        issues,
        profile,
        badges,
        loading,
        addIssue,
        verify,
        refresh: loadData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}