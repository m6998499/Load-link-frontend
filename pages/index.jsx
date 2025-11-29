// pages/index.jsx
import Link from "next/link";
import "../styles.css";

export default function Home() {
  return (
    <div className="app">
      <header className="header">
        <h1>LoadLink Connect</h1>
        <p>Simple, fast load posting and matching.</p>
      </header>

      <main className="main">
        <div className="card">
          <h2>Welcome</h2>
          <p>Choose how you want to use LoadLink.</p>
          <div className="button-row">
            <Link href="/login" className="btn primary">
              Shipper / Carrier Login
            </Link>
            <Link href="/dashboard" className="btn secondary">
              View Demo Dashboard
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <span>Backend status will go here later.</span>
      </footer>
    </div>
  );
}
