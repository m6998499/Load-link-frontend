export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      backgroundColor: "#17A2B8",   // Turquoise Blue
      padding: "15px 20px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <h1 style={{
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        margin: 0
      }}>
        LoadLink
      </h1>
    </nav>
  );
}
