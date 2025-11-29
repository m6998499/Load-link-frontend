export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column"
    }}>
      <h1>LoadLink Connect</h1>
      <p>Your frontend is now live.</p>

      <a href="/login" style={{ marginTop: "20px", fontSize: "18px" }}>
        Go to Login
      </a>
    </div>
  );
}
