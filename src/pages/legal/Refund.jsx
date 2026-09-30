import './Legal.css';

const Refund = () => {
  return (
    <div className="legal-page fade-in">
      <div className="container section">
        <h1 className="legal-title">Refund and Cancellation Policy</h1>
        <p className="legal-meta">Last Updated: January 03, 2026</p>

        <div className="legal-content">
          <section>
            <h2>1. Digital Products</h2>
            <p>Due to the nature of digital products, we generally do not offer refunds once the product has been sent or accessed.</p>
            <p className="highlight-box">
              <strong>"Sent" Logic</strong> A product is considered "sent" when the secure download link has been emailed to the address provided during checkout, or when the file becomes accessible in your User Dashboard.
            </p>
            <p>Exceptions may be made under the following circumstances:</p>
            <ul>
              <li>The file is corrupted and cannot be opened despite technical support assistance.</li>
              <li>You purchased the same product twice by mistake.</li>
            </ul>
          </section>

          <section>
            <h2>2. Consultancy Services</h2>
            <p>For booked consultancy sessions</p>
            <ul>
              <li><strong>Cancellations</strong> You may cancel a session up to 24 hours before the scheduled time for a full refund.</li>
              <li><strong>Rescheduling</strong> You may reschedule a session up to 12 hours before without penalty.</li>
              <li><strong>No-Shows</strong> Failure to attend a scheduled session without prior notice will result in forfeiture of the session fee.</li>
            </ul>
          </section>

          <section>
            <h2>3. Processing of Refunds</h2>
            <p>If your refund request is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
          </section>

          <section>
            <h2>4. Contact Us</h2>
            <p>If you have any questions about our Returns and Refunds Policy, please contact us at billing@npathways.global.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refund;
