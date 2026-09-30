import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import PathwayTopNav from "../../../components/services/PathwayTopNav";
import "./ServiceDetails.css";

const PathwayPrograms = () => {
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
            <span className="text-black font-medium">Pathway Programs</span>
          </nav>
          <h1>Pathway Programs (Bridge Courses)</h1>
        </div>
      </section>

      <PathwayTopNav />

      <div className="container">
        <div className="service-layout-grid">

          {/* Fixed Image Panel */}
          <div className="service-image-panel">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
              alt="Bridge Courses"
              className="grayscale"
            />
            <div className="image-panel-cta">
              <Button
                variant="premium"
                size="large"
                fullWidth
                onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}
              >
                Close Your Skill Gaps
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <main className="service-main-content">
            <section className="service-intro mb-12">
              <span className="badge-yellow mb-2 block text-xs font-bold uppercase tracking-wider text-amber-500">Bridge Courses</span>
              <h2>For the gap nobody names until it's already a problem.</h2>
              
              <div className="content-block my-6">
                <h3>What it is:</h3>
                <p className="text-xl text-gray-700">
                  Every major transition — school to college, board to competitive exam, India to a foreign campus, one stream to another — has a gap in it that standard schooling doesn't cover. Pathway Programs are short, focused bridge courses built to close exactly that gap, before it turns into a semester of catching up.
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
                  <span>Students moving from school into college or a new academic system</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0" style={{ display: "inline-flex", alignItems: "center", marginTop: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "2px" }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Anyone switching streams, boards, or exam tracks mid-journey</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0" style={{ display: "inline-flex", alignItems: "center", marginTop: "4px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ background: "var(--color-brand-tertiary, #FDBA31)", borderRadius: "4px", padding: "2px" }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>Students preparing for a foreign campus who need academic and readiness prep, not just visa paperwork</span>
                </li>
              </ul>
            </section>

            <section className="benefits-section mb-12">
              <h3>What we actually do:</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h4>Diagnose the Gap</h4>
                  <p>Diagnose the specific skill or knowledge gap for the student's next transition.</p>
                </div>
                <div className="benefit-card">
                  <h4>Targeted Bridge Coursework</h4>
                  <p>Deliver targeted bridge coursework — academic, language, or study-skills based.</p>
                </div>
                <div className="benefit-card">
                  <h4>Format Shift Preparation</h4>
                  <p>Prepare students for the format shift between systems (board exams vs. competitive exams vs. university coursework).</p>
                </div>
                <div className="benefit-card">
                  <h4>Precision Timing</h4>
                  <p>Time the program precisely so the gap is closed before it's needed, not after.</p>
                </div>
              </div>
            </section>

            <div className="quote-block bg-gray-100 p-6 rounded-lg italic border-l-4 border-amber-500 mb-8">
              "The plan doesn't fail at the big decision. It fails in the gap right after it. We built this pathway to close that gap before it opens."
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PathwayPrograms;
