export default function Login() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh"
    }}>
      <div style={{
        width: "350px",
        background: "#161b22",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
      }}>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Log In</button>
      </div>
    </div>
  );
}
