import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaCompass, 
  FaMapMarkedAlt, 
  FaGraduationCap, 
  FaChartLine, 
  FaPenNib, 
  FaFileInvoiceDollar, 
  FaPassport, 
  FaPlaneDeparture, 
  FaHome, 
  FaHandsHelping,
  FaPlane
} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import "./HowItWorks.css";

const HowItWorks = () => {
  const roadRef = useRef(null);
  const [planePosition, setPlanePosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.state && typeof location.state.activeStep === 'number') {
      const stepIndex = location.state.activeStep;
      setTimeout(() => {
        const element = document.getElementById(`milestone-${stepIndex}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add("is-visible");
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      if (!roadRef.current) return;
      
      const road = roadRef.current;
      const rect = road.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the road has passed through the center of the screen
      const totalDist = rect.height;
      const progress = Math.max(0, Math.min(1, (viewportHeight / 2 - rect.top) / totalDist));
      
      setPlanePosition(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const milestones = document.querySelectorAll(".road-milestone");
    milestones.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const steps = [
    {
      num: "01",
      icon: <FaCompass />,
      title: "Clarity Compass™ Assessment",
      desc: "We start with a deep dive into your strengths, interests, and EQ. This isn't just a test — it's the foundation every decision after this one gets built on.",
    },
    {
      num: "02",
      icon: <FaMapMarkedAlt />,
      title: "Pathway Goal Mapping",
      desc: "Identifying the right destination for you — a competitive exam, a top Indian university, a course abroad, or a career direction you haven't considered yet — aligned to your long-term goals, not the default everyone else picked.",
    },
    {
      num: "03",
      icon: <FaGraduationCap />,
      title: "Best-Fit Matchmaking",
      desc: "Comparing curricula, boards, institutions, and career tracks — in India or abroad — to find the fit that actually matches how you think and where you want to end up.",
    },
    {
      num: "04",
      icon: <FaChartLine />,
      title: "Skill Gap Analysis",
      desc: "If your profile is missing something — technical, academic, or soft skills — we close the gap through our bootcamps and bridge programs before it becomes a bottleneck.",
    },
    {
      num: "05",
      icon: <FaPenNib />,
      title: "Story-Driven Applications",
      desc: "Whether it's an SOP, a college application, or an exam-prep portfolio, we help you build a narrative that's genuinely yours — not a template everyone else is also submitting.",
    },
    {
      num: "06",
      icon: <FaFileInvoiceDollar />,
      title: "Financial Architecture",
      desc: "Navigating scholarships, education loans, and budgeting — for a course in India or a degree abroad — so the plan is stress-free, not just ambitious.",
    },
    {
      num: "07",
      icon: <FaPassport />,
      title: "The Gauntlet",
      desc: "Meticulous prep and mock interviews for whatever gate stands between you and your goal — a board exam, a competitive entrance test, a college interview, or a visa. We drill for the one that's actually yours.",
    },
    {
      num: "08",
      icon: <FaPlaneDeparture />,
      title: "Pre-Launch Orientation",
      desc: "The practical playbook for your next transition — new city, new campus, new country — banking, logistics, and the survival skills for your first 30 days wherever that is.",
    },
    {
      num: "09",
      icon: <FaHome />,
      title: "Settling In",
      desc: "Support through accommodation, orientation, and the first week of administrative hurdles — whether that's a hostel in another state or an apartment in another country.",
    },
    {
      num: "10",
      icon: <FaHandsHelping />,
      title: "On-Going Mentorship",
      desc: "We stay your partner through the degree, the first job search, or the next fork in the road — because a pathway isn't done the day you get in. It's done when you're actually living it.",
    },
  ];

  return (
    <div className="how-it-works-page">
      {/* Hero Section */}
      <section className="road-hero">
        <div className="container">
          <span className="badge">The Roadmap</span>
          <h1>Your 10-Step Journey <br /> <span>To a Life You Actually Chose</span></h1>
          <p className="hero-desc">
            From the first spark of an idea to the day you're living the plan you built, we're with you every single step of the way — whether that plan ends in Delhi, Bangalore, Boston, or Berlin.
          </p>
        </div>
      </section>

      {/* Road Layout Section */}
      <section className="road-layout-section">
        <div className="container">
          <div className="road-container" ref={roadRef}>
            {/* The Central Road Line */}
            <div className="road-line">
              <div 
                className="moving-plane"
                style={{ top: `${planePosition}%` }}
              >
                <IoAirplane />
              </div>
              <div className="road-progress"></div>
            </div>

            {steps.map((step, index) => (
              <div 
                key={index} 
                id={`milestone-${index}`}
                className={`road-milestone ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div className="milestone-dot">
                  <span className="milestone-num">{step.num}</span>
                </div>
                
                <div className="milestone-card">
                  <div className="milestone-icon">{step.icon}</div>
                  <div className="milestone-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-text">
              <span className="badge">Our Philosophy</span>
              <h2>Beyond Admissions</h2>
              <p>
                Most consultants stop after the visa sticker is on your
                passport. At NPathways, that's only step 7. We believe our true
                value is proven when you successfully integrate into your new
                life and career.
              </p>
            </div>
            <div className="philosophy-features">
              <div className="feat-item">
                <h4>✓ Transparent Pricing</h4>
                <p>No hidden charges or university kickbacks that bias our advice.</p>
              </div>
              <div className="feat-item">
                <h4>✓ Ethics Over Profit</h4>
                <p>We only recommend universities that truly fit your profile and budget.</p>
              </div>
              <div className="feat-item">
                <h4>✓ Mentorship for Life</h4>
                <p>Join an exclusive alumni network of students already thriving abroad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="road-final-cta">
        <div className="container">
          <h2>Ready to take Step 01?</h2>
          <Link to="/services/career-assessments" className="btn btn-premium btn-large">
            Start Your Assessment
          </Link>
          <p style={{ textAlign: "center" }}>Join 10,000+ students who started their journey with us.</p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
