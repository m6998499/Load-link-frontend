export default function Home() {
  return (
    <div style={{
      background: "#0d1117",
      color: "#fff",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        LoadLink Connect
      </h1>

      <p style={{ fontSize: "18px", opacity: 0.8 }}>
        Your frontend is live. Let’s build the real app.
      </p>

      <a
        href="/login"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#2563eb",
          borderRadius: "8px",
          color: "#fff",
          fontSize: "16px",
          textDecoration: "none"
        }}
      >
        Go to Login
      </a>
    </div>
  );
}
