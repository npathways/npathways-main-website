import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page fade-in">
      <div className="container section">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-meta">Last Updated: January 03, 2026</p>

        <div className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>NPathways Global ("us", "we", or "our") operates the npathways.world website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          </section>

          <section>
            <h2>2. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            <h3>Types of Data Collected</h3>
            <ul>
              <li><strong>Personal Data</strong> Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City.</li>
              <li><strong>Usage Data</strong> Information on how the Service is accessed and used.</li>
            </ul>
          </section>

          <section>
            <h2>3. Use of Data</h2>
            <p>NPathways Global uses the collected data for various purposes</p>
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
            </ul>
          </section>

          <section>
            <h2>4. Security of Data</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
          </section>

          <section>
            <h2>5. Service Providers</h2>
            <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
