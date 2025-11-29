// pages/login.jsx
import Link from "next/link";

export default function Login() {
  return (
    <div className="app">
      <header className="header">
        <h1>LoadLink Login</h1>
        <p>Sign in to post or find loads.</p>
      </header>

      <main className="main">
        <div className="card">
          <form className="form">
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" />
            </label>
            <button type="button" className="btn primary">
              Sign In (UI only for now)
            </button>
          </form>
          <Link href="/" className="link">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
