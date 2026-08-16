import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import PathwayTopNav from "../../../components/services/PathwayTopNav";
import "./ServiceDetails.css";

const CurricularBasedPathways = () => {
  return (
    <div className="service-detail-page fade-in">
      {/* Hero / Breadcrumb */}
      <section className="service-hero bg-gray">
        <div className="container text-center">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Pathways</Link>
            <span>/</span>
            <span className="text-black font-medium">Curricular-Based Pathways</span>
          </nav>
          <h1>Curricular-Based Pathways</h1>
        </div>
      </section>

      <PathwayTopNav />

      <div className="container">
        <div className="service-layout-grid">

          {/* Fixed Image Panel */}
          <div className="service-image-panel">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
              alt="Curricular Strategy"
              className="grayscale"
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
              >
                Plan Your Curriculum
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <main className="service-main-content">
            <section className="service-intro mb-12">
              <span className="badge-yellow mb-2 block text-xs font-bold uppercase tracking-wider text-amber-500">Every Board. One Strategy.</span>
              <h2>For the decision that gets made two years too early — board and subject choice, whichever board you're on.</h2>
              
              <div className="content-block my-6">
                <h3>What it is:</h3>
                <p className="text-xl text-gray-700">
                  Long before "which college," there's a quieter decision that shapes everything after it: which board, and which subjects. Curricular-Based Pathways is board-specific strategy — CBSE, ICSE, State Boards, IB, IGCSE/Cambridge, and NIOS — built around where the student is actually headed, not just what their current syllabus happens to allow.
                </p>
              </div>

              <h3>Who it's for:</h3>
              <ul className="check-list space-y-4 mb-10">
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0" style={{ display: "inline-flex", alignItems: "center", marginTop: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "2px" }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Students at the 9th-to-10th or 10th-to-11th fork, choosing subjects or streams — on any board</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0" style={{ display: "inline-flex", alignItems: "center", marginTop: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "2px" }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Families weighing a board switch (including into or out of IB/IGCSE) and unsure what it actually changes</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0" style={{ display: "inline-flex", alignItems: "center", marginTop: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "2px" }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Students mid-board who need an internal-assessment, IA, or exam strategy that fits their target course</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0" style={{ display: "inline-flex", alignItems: "center", marginTop: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "2px" }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>International-school and NRI families navigating a board system that's unfamiliar to them</span>
                </li>
              </ul>
            </section>

            <section className="benefits-section mb-12">
              <h3>What we actually do:</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h4>Board Selection Trade-offs</h4>
                  <p>Advise on board selection and board-switch trade-offs across all major systems — Indian and international.</p>
                </div>
                <div className="benefit-card">
                  <h4>Subject-Combination Strategy</h4>
                  <p>Build subject-combination strategy aligned to the student's eventual academic or career goal, regardless of board.</p>
                </div>
                <div className="benefit-card">
                  <h4>Specific Assessment Strategy</h4>
                  <p>Design board-specific exam and assessment strategy — board exams, IB IAs and EE, IGCSE coursework — not generic study tips.</p>
                </div>
                <div className="benefit-card">
                  <h4>Eligibility Translation</h4>
                  <p>Translate how each board's system actually converts into competitive-exam or university eligibility later, in India and abroad.</p>
                </div>
              </div>
            </section>

            <div className="quote-block bg-gray-100 p-6 rounded-lg italic border-l-4 border-amber-500 mb-8">
              "The board doesn't decide the outcome. The strategy underneath it does — and that strategy shouldn't change just because the board is unfamiliar to us. It isn't."
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CurricularBasedPathways;
