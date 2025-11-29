import { useState } from "react";

const API_BASE = "https://load-link-backend.onrender.com";

export default function Home() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function testBackend() {
    setLoading(true);
    setError("");
    setStatus("");

    try {
      const res = await fetch(API_BASE + "/");
      if (!res.ok) {
        setError("Backend responded, but with an error status.");
        setLoading(false);
        return;
      }

      const text = await res.text();
      setStatus(text || "Backend is running, but returned no text.");
    } catch (e) {
      console.error(e);
      setError("Could not reach backend. Check URL or CORS.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#e5e7eb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: 24
      }}
    >
      <div
        style={{
          background: "#0f172a",
          borderRadius: 16,
          padding: 24,
          maxWidth: 600,
          width: "100%",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>LoadLink Connect</h1>
        <p style={{ color: "#9ca3af", marginBottom: 16 }}>
          Frontend is live. Click the button below to test connection to your backend.
        </p>

        <button
          onClick={testBackend}
          disabled={loading}
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            border: "none",
            background: "#2563eb",
            color: "white",
            fontWeight: 600,
            cursor: loading ? "default" : "pointer",
            marginBottom: 16
          }}
        >
          {loading ? "Contacting backend..." : "Test Backend Connection"}
        </button>

        {status && (
          <div
            style={{
              marginTop: 8,
              padding: 12,
              borderRadius: 12,
              background: "#022c22",
              border: "1px solid #16a34a",
              fontSize: 14
            }}
          >
            <strong>Backend says:</strong>
            <div>{status}</div>
          </div>
        )}

        {error && (
          <div
            style={{
              marginTop: 8,
              padding: 12,
              borderRadius: 12,
              background: "#3f1d1d",
              border: "1px solid #ef4444",
              fontSize: 14
            }}
          >
            <strong>Error:</strong>
            <div>{error}</div>
          </div>
        )}
      </div>
    </div>
  );
}
