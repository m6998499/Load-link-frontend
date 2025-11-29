export default function Home() {
  return (
    <div className="page-wrapper">
      <header className="top-bar">
        <div className="brand">
          <span className="logo-dot" />
          <span className="brand-text">LoadLink Connect</span>
        </div>
      </header>

      <main className="center-wrap">
        <div className="card main-card">
          <h1 className="title">Non-Broker Load Board</h1>
          <p className="subtitle">
            Simple, transparent space for shippers and carriers to connect
            directly — no brokerage, no hidden assignments.
          </p>

          <div className="button-row">
            <button className="primary-btn">I’m a Shipper</button>
            <button className="secondary-btn">I’m a Carrier</button>
          </div>

          <p className="hint">
            This is your live frontend. You can later link these buttons to real
            pages like <code>/shipper</code> and <code>/carrier</code>.
          </p>
        </div>
      </main>

      <footer className="footer-mini">
        <span>© {new Date().getFullYear()} LoadLink Connect</span>
        <span className="footer-muted">
          “This platform does not arrange freight or act as a transportation broker.”
        </span>
      </footer>
    </div>
  );
}
