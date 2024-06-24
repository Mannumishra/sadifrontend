import React from 'react';
import '../dashboard/dashboard.css';

const Dashboard = () => {
  return (
    <div className="how-it-works">
      <h2>Quick Access</h2>
      <h1>How Bharat Matrimony Works</h1>
      <div className="steps">
        <div className="step">
          <span className="icon">👤</span>
          <h3>Create Biodata</h3>
          <p>You can easily create a biodata on Bharat matrimony completely free of cost within some steps.</p>
        </div>
        <div className="step">
          <span className="icon">🔍</span>
          <h3>Search Biodata</h3>
          <p>You can easily search biodata using many filters including age, location, profession, education qualification.</p>
        </div>
        <div className="step">
          <span className="icon">🔗</span>
          <h3>Contact with guardians</h3>
          <p>If someone likes your biodata or you like someone biodata you can directly contact their parent.</p>
        </div>
        <div className="step">
          <span className="icon">💍</span>
          <h3>Get married</h3>
          <p>If you like the biodata and conversation, on your own or jointly & get married according to Sunnah.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
