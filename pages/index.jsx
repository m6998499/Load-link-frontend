import Link from 'next/link';

export default function Home() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">LoadLink Connect</h1>
        <p className="app-tagline">Simple, neutral load board for shippers & carriers.</p>
      </header>

      <main className="app-main">
        <div className="card">
          <h2>Welcome</h2>
          <p>Log in to post loads, view lanes, and chat in real time.</p>
          <div className="button-row">
            <Link href="/login" className="btn-primary">
              Login
            </Link>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p className="footnote">
          Disclaimer: This platform does not arrange freight or act as a transportation broker.
        </p>
      </footer>
    </div>
  );
}
