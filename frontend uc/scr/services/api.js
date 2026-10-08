import { APP_CONFIG } from "../config";

const API_URL = APP_CONFIG.apiBaseUrl;

async function request(endpoint, options = {}) {
  if (!API_URL || API_URL === "YOUR_CLOUD_RUN_API_URL") {
    throw new Error("Cloud Run API URL is not configured.");
  }

  const controller = new AbortController();

  const timeout = setTimeout(
    () => controller.abort(),
    APP_CONFIG.apiTimeout
  );

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

// ------------------------------------------------------------
// Issues
// ------------------------------------------------------------

export async function getIssues() {
  return request("/issues");
}

export async function getIssue(id) {
  return request(`/issues/${id}`);
}

export async function createIssue(issue) {
  return request("/issues", {
    method: "POST",
    body: JSON.stringify(issue),
  });
}

export async function verifyIssue(issueId) {
  return request(`/issues/${issueId}/verify`, {
    method: "POST",
  });
}

// ------------------------------------------------------------
// User
// ------------------------------------------------------------

export async function getProfile() {
  return request("/profile");
}

export async function getBadges() {
  return request("/badges");
}

// ------------------------------------------------------------
// Health check
// ------------------------------------------------------------

export async function healthCheck() {
  return request("/health");
}