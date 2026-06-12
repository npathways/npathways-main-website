import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page fade-in">
      <div className="container section">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-meta">Last Updated: June 12, 2026</p>

        <div className="legal-content">
          <p>
            At NPathways Global, safeguarding your privacy is a top priority. We have established this Privacy Policy to explain our methods for gathering, utilizing, and protecting your data. We encourage you to review these guidelines to understand how we handle your information.
          </p>

          <section style={{ marginTop: '2rem' }}>
            <h2>Gathering and Utilizing Personal Data</h2>
            <p>
              Personal data refers to any specific details that can be used to identify or contact an individual.
            </p>
            <p>
              When you interact with the NPathways Global website (npathways.world), we may request certain details from you. This generally includes your full name, physical mailing address, email address, telephone number, and communication preferences.
            </p>
            <p>
              We rely on this information to keep you informed about NPathways Global's latest news, service offerings, partner university updates, and upcoming events. Furthermore, analyzing this data enables us to refine our advertising efforts, enhance website content, and elevate the overall quality of our services.
            </p>
          </section>

          <section>
            <h2>Data Sharing and Third-Party Disclosure</h2>
            <p>
              Occasionally, NPathways Global may share specific personal details with trusted educational institutions and strategic partners who assist us in delivering services or marketing our offerings to students.
            </p>
            <p>
              We will only transmit your personal data to external parties under the following circumstances:
            </p>
            <ul>
              <li>We have received your direct and explicit permission to do so.</li>
              <li>The sharing is absolutely essential to fulfill a service or provide a product you requested.</li>
              <li>We are legally obligated to disclose the information due to litigation, legal procedures, or official requests from government authorities, whether within or outside of India.</li>
            </ul>
          </section>

          <section>
            <h2>Modifications and Trademark Acknowledgment</h2>
            <p>
              NPathways Global reserves the right to modify this Privacy Policy as needed. Should any substantial changes occur, we will publish a notification on our website alongside the revised policy document.
            </p>
            <p>
              Any trademarks displayed on this website remain the exclusive property of their rightful owners.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
