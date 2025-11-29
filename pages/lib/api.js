const API_BASE = "https://YOUR_BACKEND_URL_HERE";

export async function apiRequest(path, options = {}) {
  const token = typeof window !== "undefined"
    ? localStorage.getItem("token")
    : null;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  const res = await fetch(API_BASE + path, {
    ...options,
    headers
  });

  return res.json();
}
