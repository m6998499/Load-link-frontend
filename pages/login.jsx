import { useState } from "react";
import { useRouter } from "next/router";

const API_BASE = "https://load-link-backend.onrender.com";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(API_BASE + "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setLoading(false);
        return;
      }

      // Save token so we can use it on the dashboard
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role || "");
        localStorage.setItem("name", data.name || "");
      }

      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Network error. Try again.");
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
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: 24
      }}
    >
      <div
        style={{
          background: "#0f172a",
          borderRadius: 16,
          padding: 24,
          maxWidth: 480,
          width: "100%",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        }}
      >
        <h1 style={{ fontSize: 24, marginBottom: 8 }}>LoadLink Login</h1>
        <p style={{ color: "#9ca3af", marginBottom: 16 }}>
          Sign in with your LoadLink account.
        </p>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <label style={{ fontSize: 14 }}>
            Email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                marginTop: 4,
                width: "100%",
                padding: "8px 10px",
                borderRadius: 8,
                border: "1px solid #334155",
                background: "#020617",
                color: "#e5e7eb"
              }}
            />
          </label>

          <label style={{ fontSize: 14 }}>
            Password
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                marginTop: 4,
                width: "100%",
                padding: "8px 10px",
                borderRadius: 8,
                border: "1px solid #334155",
                background: "#020617",
                color: "#e5e7eb"
              }}
            />
          </label>

          {error && (
            <div
              style={{
                marginTop: 4,
                padding: 8,
                borderRadius: 8,
                background: "#3f1d1d",
                border: "1px solid #ef4444",
                fontSize: 13
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 8,
              padding: "10px 18px",
              borderRadius: 999,
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: 600,
              cursor: loading ? "default" : "pointer"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{ marginTop: 16, fontSize: 12, color: "#9ca3af" }}>
          Tip: use the admin user from your backend seed (admin@example.com / Admin123!)
        </p>
      </div>
    </div>
  );
}
