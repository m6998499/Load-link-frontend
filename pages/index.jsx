// pages/index.js

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const testBackend = async () => {
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://load-link-backend.onrender.com/");
      if (!res.ok) {
        throw new Error("Backend returned an error");
      }
      const data = await res.json();
      setStatus(data.message || "Backend responded, but no message field");
    } catch (err) {
      console.error(err);
      setStatus("Could not reach backend. Check Render service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: "0 16px",
        background: "#020617",
        color: "#e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "#020617",
          borderRadius: "18px",
          padding: "24px 24px 20px",
          boxShadow: "0 24px 60px rgba(15,23,42,0.95)",
          border: "1px solid rgba(148,163,184,0.2)",
        }}
      >
        <header style={{ marginBottom: "20px" }}>
          <h1
            style={{
              fontSize: "26px",
              fontWeight: 700,
              margin: 0,
              color: "#e5e7eb",
            }}
          >
            LoadLink Connect
          </h1>
          <p
            style={{
              marginTop: "6px",
              marginBottom: 0,
              fontSize: "14px",
              color: "#9ca3af",
            }}
          >
            Frontend is live on <strong>loadlink.one</strong>.  
            Use the button below to check that your backend is responding.
          </p>
        </header>

        {/* Backend test card */}
        <section
          style={{
            marginTop: "14px",
            padding: "18px 18px 16px",
            borderRadius: "14px",
            background: "#020617",
            border: "1px solid rgba(55,65,81,0.9)",
          }}
        >
          <button
            onClick={testBackend}
            disabled={loading}
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "none",
              cursor: loading ? "default" : "pointer",
              fontSize: "14px",
              fontWeight: 600,
              background: loading ? "#1f2937" : "#2563eb",
              color: "#f9fafb",
              boxShadow: loading
                ? "none"
                : "0 12px 25px rgba(37,99,235,0.55)",
              transition: "background 0.15s ease, transform 0.1s ease",
            }}
          >
            {loading ? "Checking backend..." : "Test Backend Connection"}
          </button>

          <div
            style={{
              marginTop: "14px",
              padding: "10px 12px",
              borderRadius: "10px",
              background: status
                ? "#022c22"
                : "linear-gradient(90deg,#020617,#020617)",
              border: status ? "1px solid #059669" : "1px dashed #374151",
              fontSize: "13px",
              color: status ? "#bbf7d0" : "#6b7280",
              minHeight: "36px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {status ? (
              <>
                <span style={{ fontWeight: 600, marginRight: 4 }}>
                  Backend says:
                </span>
                <span>{status}</span>
              </>
            ) : (
              <>Click the button to see your backend status.</>
            )}
          </div>
        </section>

        {/* Simple nav to future pages */}
        <footer
          style={{
            marginTop: "18px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          <span>Next step: build real app screens (login, dashboard, etc.).</span>
          <span style={{ display: "flex", gap: "10px" }}>
            <Link href="/login" style={{ color: "#93c5fd", textDecoration: "none" }}>
              Login
            </Link>
            <span style={{ opacity: 0.5 }}>|</span>
            <Link
              href="/dashboard"
              style={{ color: "#a5b4fc", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </span>
        </footer>
      </div>
    </div>
  );
}
