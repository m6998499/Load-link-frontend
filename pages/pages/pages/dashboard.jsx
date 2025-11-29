import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function DashboardPage() {
  const router = useRouter();
  const [loads, setLoads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const backendUrl =
    process.env.NEXT_PUBLIC_API_URL || 'https://YOUR-BACKEND-URL.onrender.com';

  useEffect(() => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (!token) {
      router.replace('/');
      return;
    }

    async function fetchLoads() {
      try {
        const res = await fetch(`${backendUrl}/api/loads`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setError(data.error || 'Failed to load data');
          setLoading(false);
          return;
        }

        const data = await res.json();
        setLoads(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Network error');
        setLoading(false);
      }
    }

    fetchLoads();
  }, [backendUrl, router]);

  function handleLogout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('name');
    }
    router.push('/');
  }

  if (loading) {
    return (
      <div className="page">
        <div className="card">
          <p>Loading dashboard…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <div className="card">
          <p className="error">{error}</p>
          <button onClick={handleLogout}>Back to login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card">
        <div className="top-bar">
          <h1 className="title">LoadLink Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {loads.length === 0 ? (
          <p>No open loads yet.</p>
        ) : (
          <ul className="load-list">
            {loads.map(load => (
              <li key={load.id} className="load-item">
                <div>
                  <strong>
                    {load.originCity}, {load.originState} → {load.destCity},{' '}
                    {load.destState}
                  </strong>
                  <div className="meta">
                    Freight: {load.freightType} • Weight: {load.weight} lbs
                  </div>
                </div>
                <div className="status">
                  Status: <span>{load.status}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
