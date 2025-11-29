// pages/dashboard.jsx
import Link from "next/link";

const dummyLoads = [
  { id: 1, origin: "Baltimore, MD", destination: "Atlanta, GA", rate: "$2.85 / mile" },
  { id: 2, origin: "Richmond, VA", destination: "Chicago, IL", rate: "$2.40 / mile" },
  { id: 3, origin: "Newark, NJ", destination: "Charlotte, NC", rate: "$2.70 / mile" },
];

export default function Dashboard() {
  return (
    <div className="app">
      <header className="header">
        <h1>LoadLink Dashboard</h1>
        <p>Lightweight demo of available loads.</p>
      </header>

      <main className="main">
        <div className="card">
          <h2>Available Loads</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Origin</th>
                <th>Destination</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {dummyLoads.map((load) => (
                <tr key={load.id}>
                  <td>{load.origin}</td>
                  <td>{load.destination}</td>
                  <td>{load.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link href="/" className="link">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
