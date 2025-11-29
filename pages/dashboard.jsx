import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [tokenPresent, setTokenPresent] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    } else {
      setTokenPresent(true);
    }
    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="app-shell">
        <main className="app-main">
          <p className="muted">Checking your session…</p>
        </main>
      </div>
    );
  }

  if (!tokenPresent) {
    return null;
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">Dashboard</h1>
        <p className="app-tagline">You are signed in.</p>
      </header>

      <main className="app-main">
        <div className="card">
          <h2>Next Steps</h2>
          <ul className="list">
            <li>This dashboard UI is live and working.</li>
            <li>
              Later, you can fetch real data from your backend (loads, messages, etc.) using the
              token in <code>localStorage</code>.
            </li>
            <li>Backend base URL is set in NEXT_PUBLIC_API_BASE_URL.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
