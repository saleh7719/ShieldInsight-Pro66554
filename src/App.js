import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>ShieldForce</h2>
        <div className="nav-item active">Overview</div>
        <div className="nav-item">Analytics</div>
        <div className="nav-item">Security Assets</div>
        <div className="nav-item">Compliance</div>
        <div className="nav-item">Settings</div>
      </aside>

      <main className="main-content">
        <div className="header-bar">
          <h1>Security Operations</h1>
          <button style={{background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer'}}>
            Export Report
          </button>
        </div>

        <div className="grid-stats">
          <div className="card-stat">
            <p>Active Scans</p>
            <h3>12</h3>
          </div>
          <div className="card-stat">
            <p>Threats Blocked</p>
            <h3>2,841</h3>
          </div>
          <div className="card-stat">
            <p>Risk Score</p>
            <h3 style={{color: '#16a34a'}}>Good</h3>
          </div>
          <div className="card-stat">
            <p>Integrity</p>
            <h3>99.9%</h3>
          </div>
        </div>

        <div className="data-section">
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Status</th>
                <th>Last Update</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Payment Gateway API</td>
                <td><span style={{color: '#16a34a'}}>● Stable</span></td>
                <td>2m ago</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>User Authentication</td>
                <td><span style={{color: '#dc2626'}}>● At Risk</span></td>
                <td>14m ago</td>
                <td style={{fontWeight: 'bold'}}>Critical</td>
              </tr>
              <tr>
                <td>Database Cluster A</td>
                <td><span style={{color: '#16a34a'}}>● Stable</span></td>
                <td>1h ago</td>
                <td>Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;