import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    window.scrollTo(0, 0);

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
      desc: "We start with a deep dive into your strengths and EQ. This isn't just a test; it's your career foundation.",
    },
    {
      num: "02",
      icon: <FaMapMarkedAlt />,
      title: "Global Goal Mapping",
      desc: "Identifying the right countries and industry trends that align with your long-term residency and career goals.",
    },
    {
      num: "03",
      icon: <FaGraduationCap />,
      title: "University Matchmaking",
      desc: "Comparing curricula, research opportunities, and lifestyle to find your perfect academic home.",
    },
    {
      num: "04",
      icon: <FaChartLine />,
      title: "Skill Gap Analysis",
      desc: "If your profile lacks certain technical or soft skills, we fill them through our specialized bootcamps.",
    },
    {
      num: "05",
      icon: <FaPenNib />,
      title: "Story-Driven Applications",
      desc: "We help you craft SOPs that aren't just templates, but powerful narratives of your individual growth.",
    },
    {
      num: "06",
      icon: <FaFileInvoiceDollar />,
      title: "Financial Architecture",
      desc: "Navigating education loans, scholarships, and budgeting for a stress-free transition.",
    },
    {
      num: "07",
      icon: <FaPassport />,
      title: "The Visa Siege",
      desc: "Meticulous documentation and mock interviews to ensure your entry is seamless and successful.",
    },
    {
      num: "08",
      icon: <FaPlaneDeparture />,
      title: "Pre-Departure Orientation",
      desc: "Cultural hacks, banking setup, and survival skills for your first 30 days in a new country.",
    },
    {
      num: "09",
      icon: <FaHome />,
      title: "Settling In",
      desc: "Assistance with accommodation coordination and your first week of administrative hurdles.",
    },
    {
      num: "10",
      icon: <FaHandsHelping />,
      title: "On-Going Mentorship",
      desc: "We remain your partner throughout your degree and during your first job search abroad.",
    },
  ];

  return (
    <div className="how-it-works-page">
      {/* Hero Section */}
      <section className="road-hero">
        <div className="container">
          <span className="badge">The Roadmap</span>
          <h1>Your 10-Step Journey <br /> <span>To Global Success</span></h1>
          <p className="hero-desc">
            From the first spark of an idea to your first job in a new
            country, we are with you every single step of the way.
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
          <p>Join 10,000+ students who started their journey with us.</p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
