// pages/login.jsx
import Head from "next/head";
import { useState } from "react";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://load-link-backend.onrender.com";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      setStatus("success");
      setMessage("Login successful. Redirecting…");
      // Later: router.push("/dashboard");
    } catch (err) {
      setStatus("error");
      setMessage("Login failed. Please check your email and password.");
    }
  };

  const statusColor =
    status === "success"
      ? "#22c55e"
      : status === "error"
      ? "#f97373"
      : "#94a3b8";

  return (
    <>
      <Head>
        <title>LoadLink – Login</title>
      </Head>

      <div
        style={{
          minHeight: "100vh",
          margin: 0,
          background:
            "radial-gradient(circle at top, #1e293b 0, #020617 40%, #000000 100%)",
          color: "#e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "rgba(15,23,42,0.96)",
            borderRadius: "18px",
            padding: "24px 20px 22px",
            boxShadow: "0 20px 45px rgba(0,0,0,0.7)",
            border: "1px solid rgba(148,163,184,0.25)",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "0.35rem",
            }}
          >
            LoadLink Login
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#9ca3af",
              marginBottom: "1.4rem",
            }}
          >
            Sign in to access your loads, carriers, and dashboard.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                fontWeight: 500,
                marginBottom: "0.25rem",
              }}
            >
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "0.6rem 0.75rem",
                borderRadius: "10px",
                border: "1px solid #1f2933",
                backgroundColor: "#020617",
                color: "#e5e7eb",
                fontSize: "0.9rem",
                outline: "none",
                marginBottom: "0.9rem",
              }}
              placeholder="you@example.com"
            />

            {/* Password */}
            <label
              style={{
                display: "block",
                fontSize: "0.8rem",
                fontWeight: 500,
                marginBottom: "0.25rem",
              }}
            >
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "0.6rem 0.75rem",
                borderRadius: "10px",
                border: "1px solid #1f2933",
                backgroundColor: "#020617",
                color: "#e5e7eb",
                fontSize: "0.9rem",
                outline: "none",
                marginBottom: "1.1rem",
              }}
              placeholder="••••••••"
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%",
                padding: "0.65rem",
                borderRadius: "999px",
                border: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: status === "loading" ? "default" : "pointer",
                background:
                  status === "loading"
                    ? "rgba(59,130,246,0.55)"
                    : "linear-gradient(135deg,#3b82f6,#2563eb)",
                color: "#f9fafb",
                boxShadow:
                  status === "loading"
                    ? "none"
                    : "0 12px 30px rgba(37,99,235,0.6)",
                transition: "filter 0.15s ease, transform 0.12s ease",
              }}
            >
              {status === "loading" ? "Signing in…" : "Sign in"}
            </button>
          </form>

          {/* Status message */}
          {status !== "idle" && message && (
            <p
              style={{
                marginTop: "0.9rem",
                fontSize: "0.8rem",
                color: statusColor,
              }}
            >
              {message}
            </p>
          )}

          {/* Footer links */}
          <div
            style={{
              marginTop: "1.4rem",
              fontSize: "0.8rem",
              color: "#94a3b8",
            }}
          >
            <p style={{ marginBottom: "0.35rem" }}>
              Don&apos;t have an account yet?{" "}
              <span style={{ color: "#e5e7eb" }}>Ask admin to create one.</span>
            </p>
            <p>
              <a
                href="/"
                style={{
                  color: "#60a5fa",
                  textDecoration: "none",
                }}
              >
                ← Back to LoadLink home
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
              }
