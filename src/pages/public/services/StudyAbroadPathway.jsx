import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Button from "../../../components/common/Button";
import PathwayTopNav from "../../../components/services/PathwayTopNav";
import toast from "react-hot-toast";

// Import Data
import destinationsData from "../../../data/destinations.json";

// Import Icons
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
  FaHandsHelping
} from "react-icons/fa";
import {
  FiBookOpen,
  FiUserCheck,
  FiAward,
  FiPhoneCall,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

import "../Home.css"; // Reuse the Home page styling for accordions, masonry, and globe

const studentSupportData = [
  {
    num: "01",
    title: "Career Discovery",
    subtitle: "Psychometric & Ikigai mapping",
    bgImg: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1200&q=80",
    desc: "Most students choose a country before they've chosen a direction. We start the other way around. Every NPathways journey begins with the Clarity Compass — a psychometric and aptitude diagnostic built around the idea of Ikigai: the place where what you're good at, what you enjoy, what the world needs, and what's actually viable for you all meet. In a single guided session, we map your natural strengths, genuine interests, and real-world readiness — not just your grades. The result isn't a generic report; it's a working answer to the question underneath every application: what am I actually building toward? For some students that means research. For others, industry, entrepreneurship, or a creative path nobody suggested before. Once that's clear, every decision after — which country, which course, which university — has something solid to stand on. This is the one step other consultancies skip. We think it's the one that matters most."
  },
  {
    num: "02",
    title: "Admissions",
    subtitle: "Expert university shortlisting",
    bgImg: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
    desc: "A university list built on rankings alone is a list built for someone else. Once your direction is clear, our admissions team builds a shortlist around what actually fits you — your academic profile, your budget, your career goals, and the kind of environment you'll genuinely thrive in, not just the one that looks best on paper. We look past headline rankings to the things that decide your actual experience: department strength in your specific field, faculty and research opportunities, curriculum fit, industry connections, and realistic admission chances given your profile. From there, we work with you end-to-end — refining personal statements, coordinating recommendation letters, tracking every deadline — so your application reflects your strongest, most honest case for admission. The goal isn't the most prestigious name you can get in front of. It's the university where your specific goals actually have room to grow."
  },
  {
    num: "03",
    title: "Visa Success",
    subtitle: "98% success rate in filing",
    bgImg: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    desc: "A strong admission means nothing without a strong visa file — and this is where most delays and rejections quietly happen, often over paperwork that could have been caught early. Our visa team has built a 98% success rate by treating every filing like it's the only one that matters: document-by-document review, country-specific requirement checks, financial proof structured the way that specific embassy expects it, and mock interviews before the real one. We track policy shifts as they happen — visa rules change more often than students expect — so your file is built against the current requirement, not last year's. And we stay with you past the approval stamp: guidance on arrival formalities, work-rights rules on your visa, and what to do if anything needs renewing later. Getting in is the milestone everyone celebrates. We think getting there safely and correctly is the part that actually deserves the effort."
  },
  {
    num: "04",
    title: "Your Journey",
    subtitle: "Guided by us, decided by you",
    bgImg: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80",
    desc: "Studying abroad isn't one decision — it's a sequence of them, and every student's sequence looks different. For college students, we work directly with you, in person, taking the time to actually understand you before we map anything out. For school students and minors, we work through your parents at every step, so the family stays informed and involved throughout. Either way, the decisions are always yours to make — ours is to guide, explain, and stand beside you while you make them. From your first clarity conversation through direction-setting, university and country selection, applications, visas, pre-departure preparation, arrival, and settling in — every stage has a defined, supported step, built around who you actually are, not a template everyone gets. No two journeys here look the same, because no two students do. This is what \"beyond borders into purpose\" actually looks like in practice — a journey that speaks for itself."
  }
];

const parentSupportData = [
  {
    num: "01",
    title: "Travel & Stay",
    subtitle: "with them, every step of the way",
    bgImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    desc: "For many parents, the hardest part isn't the paperwork — it's not being there when your child takes their first steps into a new country. If you choose to travel with them for the first move, we handle it as carefully as we handle the student's own visa: accompanying-parent visa guidance, help sourcing accommodation near campus, and a clear day-by-day itinerary for the visit — what to set up first, which offices to visit, what can wait. If a follow-up visit is on your mind later — orientation day, a graduation, just checking in — we can help plan that too, from paperwork to logistics. You shouldn't have to choose between being present for your child's biggest moment and knowing how to actually navigate a country you've never seen. We'd rather you spend that time being a parent, not a logistics manager."
  },
  {
    num: "02",
    title: "Financial Clarity",
    subtitle: "plan the full cost, not just the fees",
    bgImg: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    desc: "Tuition is only ever part of the number. Living costs, currency shifts, one-time visa and travel costs, part-time work rules that affect what your child can actually earn there — these are the details that quietly break budgets built only around a university's advertised fee. We sit down with families early and build a realistic, full-picture cost plan: total program cost (not per-year guesses), city-specific living expenses, scholarship and loan options you actually qualify for, and a currency-risk conversation most consultancies skip entirely. You'll know what this really costs, and what happens to your budget if the exchange rate moves against you mid-program — before you're already committed. No pressure, no upsell. Just the numbers a parent actually needs to say yes with confidence, not just hope."
  },
  {
    num: "03",
    title: "The Parent Circle",
    subtitle: "you're not doing this alone",
    bgImg: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    desc: "Somewhere between the acceptance letter and the actual goodbye, most parents realize they know exactly one other family going through this — if that. The Parent Circle is a community of NPathways parents, past and current, who've stood exactly where you're standing. Ask the questions that feel too small for a formal consultation — what to pack, how the first phone call home usually goes, what nobody tells you about the first month. We host regular meet-ups, both online and in person, where experienced parents and new ones simply talk — no agenda, no pitch, just people who understand. Some of the most useful advice a parent will get isn't from us. It's from another parent who did this eighteen months ago and remembers exactly what they wish someone had told them."
  },
  {
    num: "04",
    title: "Our Global Family Network",
    subtitle: "easing the distance",
    bgImg: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    desc: "We built this around the idea that distance shouldn't mean disconnection. Beyond regular updates on how your child is settling in, we're building partnerships with international student communities and other consultancies abroad, so families here can host visiting international students for a day or two — a genuine, warm, cultural exchange that gives you a small version of the connection you're missing, and gives a student far from home a taste of it too. We also run seasonal meet-and-greets and community events for parents locally, so the people who understand this exact transition aren't strangers on a screen but people you actually know. Your child moved abroad for their purpose. That doesn't mean your role in their life got smaller — just further away. We're here to shorten that distance wherever we can."
  }
];

const landmassPoints = [
  // North America
  { lat: 70, lon: -160 }, { lat: 70, lon: -140 }, { lat: 70, lon: -120 }, { lat: 70, lon: -100 },
  { lat: 70, lon: -80 }, { lat: 70, lon: -60 }, { lat: 65, lon: -150 }, { lat: 60, lon: -140 },
  { lat: 58, lon: -135 }, { lat: 55, lon: -125 }, { lat: 50, lon: -125 }, { lat: 45, lon: -125 },
  { lat: 40, lon: -122 }, { lat: 35, lon: -120 }, { lat: 30, lon: -115 }, { lat: 50, lon: -110 },
  { lat: 45, lon: -110 }, { lat: 40, lon: -105 }, { lat: 35, lon: -105 }, { lat: 30, lon: -100 },
  { lat: 25, lon: -98 }, { lat: 48, lon: -100 }, { lat: 43, lon: -95 }, { lat: 38, lon: -90 },
  { lat: 33, lon: -85 }, { lat: 28, lon: -82 }, { lat: 48, lon: -70 }, { lat: 45, lon: -70 },
  { lat: 43, lon: -75 }, { lat: 40, lon: -75 }, { lat: 35, lon: -80 }, { lat: 30, lon: -80 },
  { lat: 25, lon: -80 }, { lat: 25, lon: -105 }, { lat: 22, lon: -105 }, { lat: 20, lon: -100 },
  { lat: 18, lon: -95 }, { lat: 15, lon: -95 }, { lat: 12, lon: -85 }, { lat: 9, lon: -80 },
  // Greenland
  { lat: 80, lon: -40 }, { lat: 75, lon: -50 }, { lat: 75, lon: -30 }, { lat: 70, lon: -45 },
  { lat: 70, lon: -35 }, { lat: 65, lon: -45 }, { lat: 65, lon: -40 },
  // South America
  { lat: 10, lon: -75 }, { lat: 10, lon: -70 }, { lat: 8, lon: -65 }, { lat: 5, lon: -60 },
  { lat: 2, lon: -55 }, { lat: -2, lon: -50 }, { lat: -5, lon: -45 }, { lat: -5, lon: -40 },
  { lat: -8, lon: -35 }, { lat: -12, lon: -38 }, { lat: -16, lon: -39 }, { lat: -20, lon: -42 },
  { lat: -23, lon: -45 }, { lat: -26, lon: -48 }, { lat: -30, lon: -50 }, { lat: -35, lon: -55 },
  { lat: -40, lon: -60 }, { lat: -45, lon: -65 }, { lat: -50, lon: -70 }, { lat: -5, lon: -80 },
  { lat: -10, lon: -78 }, { lat: -15, lon: -75 }, { lat: -20, lon: -70 }, { lat: -25, lon: -70 },
  { lat: -30, lon: -72 }, { lat: -35, lon: -73 }, { lat: -40, lon: -75 }, { lat: -45, lon: -75 },
  { lat: -50, lon: -75 }, { lat: -53, lon: -72 },
  // Africa
  { lat: 35, lon: -5 }, { lat: 35, lon: 0 }, { lat: 35, lon: 5 }, { lat: 35, lon: 10 },
  { lat: 35, lon: 15 }, { lat: 35, lon: 20 }, { lat: 32, lon: 25 }, { lat: 31, lon: 30 },
  { lat: 28, lon: -5 }, { lat: 28, lon: 5 }, { lat: 28, lon: 15 }, { lat: 28, lon: 25 },
  { lat: 20, lon: -10 }, { lat: 20, lon: 0 }, { lat: 20, lon: 10 }, { lat: 20, lon: 20 },
  { lat: 20, lon: 30 }, { lat: 15, lon: -15 }, { lat: 12, lon: -15 }, { lat: 8, lon: -10 },
  { lat: 5, lon: -5 }, { lat: 5, lon: 0 }, { lat: 5, lon: 5 }, { lat: 5, lon: 10 },
  { lat: 0, lon: 10 }, { lat: 0, lon: 15 }, { lat: 0, lon: 20 }, { lat: 0, lon: 25 },
  { lat: -5, lon: 15 }, { lat: -5, lon: 20 }, { lat: -5, lon: 25 }, { lat: -10, lon: 15 },
  { lat: -10, lon: 25 }, { lat: -15, lon: 15 }, { lat: -15, lon: 25 }, { lat: -20, lon: 18 },
  { lat: -20, lon: 25 }, { lat: -25, lon: 20 }, { lat: -25, lon: 28 }, { lat: -30, lon: 22 },
  { lat: -30, lon: 28 }, { lat: -34, lon: 25 }, { lat: -15, lon: 47 }, { lat: -20, lon: 48 },
  { lat: -25, lon: 46 }, { lat: 10, lon: 40 }, { lat: 5, lon: 42 }, { lat: 0, lon: 40 },
  { lat: -5, lon: 38 }, { lat: -10, lon: 39 }, { lat: 15, lon: 38 }, { lat: 12, lon: 43 },
  { lat: 10, lon: 47 }, { lat: 8, lon: 48 }, { lat: 22, lon: 36 }, { lat: 25, lon: 34 },
  // Europe
  { lat: 38, lon: -9 }, { lat: 40, lon: -8 }, { lat: 42, lon: -5 }, { lat: 48, lon: 0 },
  { lat: 50, lon: 5 }, { lat: 52, lon: 10 }, { lat: 52, lon: 15 }, { lat: 50, lon: 20 },
  { lat: 55, lon: -2 }, { lat: 57, lon: -4 }, { lat: 42, lon: 13 }, { lat: 40, lon: 16 },
  { lat: 38, lon: 22 }, { lat: 38, lon: 24 }, { lat: 60, lon: 10 }, { lat: 62, lon: 12 },
  { lat: 65, lon: 15 }, { lat: 68, lon: 20 }, { lat: 70, lon: 25 }, { lat: 60, lon: 20 },
  { lat: 62, lon: 22 }, { lat: 65, lon: 22 }, { lat: 45, lon: 25 }, { lat: 48, lon: 30 },
  { lat: 50, lon: 35 }, { lat: 52, lon: 40 }, { lat: 55, lon: 35 }, { lat: 55, lon: 45 },
  // Russia / Siberia
  { lat: 70, lon: 40 }, { lat: 70, lon: 60 }, { lat: 70, lon: 80 }, { lat: 70, lon: 100 },
  { lat: 70, lon: 120 }, { lat: 70, lon: 140 }, { lat: 70, lon: 160 }, { lat: 60, lon: 40 },
  { lat: 60, lon: 50 }, { lat: 60, lon: 60 }, { lat: 60, lon: 70 }, { lat: 60, lon: 80 },
  { lat: 60, lon: 90 }, { lat: 60, lon: 100 }, { lat: 60, lon: 110 }, { lat: 60, lon: 120 },
  { lat: 60, lon: 130 }, { lat: 60, lon: 140 }, { lat: 60, lon: 150 }, { lat: 60, lon: 160 },
  { lat: 50, lon: 50 }, { lat: 50, lon: 60 }, { lat: 50, lon: 70 }, { lat: 50, lon: 80 },
  { lat: 50, lon: 90 }, { lat: 50, lon: 100 }, { lat: 50, lon: 110 }, { lat: 50, lon: 120 },
  { lat: 50, lon: 130 }, { lat: 50, lon: 140 }, { lat: 50, lon: 150 },
  // Middle East & Central Asia
  { lat: 30, lon: 40 }, { lat: 30, lon: 45 }, { lat: 25, lon: 45 }, { lat: 20, lon: 45 },
  { lat: 15, lon: 48 }, { lat: 15, lon: 52 }, { lat: 20, lon: 55 }, { lat: 25, lon: 55 },
  { lat: 40, lon: 50 }, { lat: 40, lon: 60 }, { lat: 45, lon: 70 }, { lat: 40, lon: 70 },
  { lat: 40, lon: 80 }, { lat: 45, lon: 80 }, { lat: 35, lon: 65 }, { lat: 35, lon: 75 },
  // India / South Asia
  { lat: 32, lon: 75 }, { lat: 28, lon: 77 }, { lat: 26, lon: 80 }, { lat: 22, lon: 70 },
  { lat: 20, lon: 73 }, { lat: 16, lon: 74 }, { lat: 12, lon: 76 }, { lat: 9, lon: 77 },
  { lat: 10, lon: 79 }, { lat: 13, lon: 80 }, { lat: 17, lon: 82 }, { lat: 22, lon: 85 },
  { lat: 22, lon: 89 },
  // China / East Asia
  { lat: 35, lon: 90 }, { lat: 35, lon: 100 }, { lat: 35, lon: 110 }, { lat: 30, lon: 100 },
  { lat: 30, lon: 110 }, { lat: 30, lon: 115 }, { lat: 25, lon: 105 }, { lat: 25, lon: 112 },
  { lat: 22, lon: 110 }, { lat: 22, lon: 115 }, { lat: 38, lon: 116 }, { lat: 40, lon: 120 },
  { lat: 43, lon: 125 },
  // SE Asia & Indonesia
  { lat: 18, lon: 102 }, { lat: 14, lon: 105 }, { lat: 10, lon: 105 }, { lat: 5, lon: 102 },
  { lat: 3, lon: 101 }, { lat: 0, lon: 102 }, { lat: -3, lon: 104 }, { lat: -6, lon: 107 },
  { lat: -7, lon: 112 }, { lat: 0, lon: 113 }, { lat: 2, lon: 114 }, { lat: -3, lon: 114 },
  { lat: 15, lon: 120 }, { lat: 10, lon: 122 }, { lat: 6, lon: 125 }, { lat: 1, lon: 122 },
  { lat: -2, lon: 120 }, { lat: -3, lon: 135 }, { lat: -4, lon: 140 },
  // Japan
  { lat: 32, lon: 130 }, { lat: 35, lon: 135 }, { lat: 38, lon: 139 }, { lat: 43, lon: 142 },
  // Australia / NZ
  { lat: -22, lon: 115 }, { lat: -25, lon: 113 }, { lat: -30, lon: 115 }, { lat: -34, lon: 116 },
  { lat: -12, lon: 125 }, { lat: -12, lon: 131 }, { lat: -12, lon: 136 }, { lat: -15, lon: 141 },
  { lat: -20, lon: 147 }, { lat: -25, lon: 151 }, { lat: -30, lon: 152 }, { lat: -35, lon: 150 },
  { lat: -38, lon: 145 }, { lat: -34, lon: 125 }, { lat: -34, lon: 135 }, { lat: -37, lon: 140 },
  { lat: -42, lon: 146 }, { lat: -37, lon: 175 }, { lat: -41, lon: 175 }, { lat: -45, lon: 170 },
  { lat: -46, lon: 167 }
];

const GlobeWidget = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [zoomFactor, setZoomFactor] = useState(1);
  const [rotationSpeed, setRotationSpeed] = useState(0.003);
  const rotationRef = useRef(0);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const autocompleteList = [
    "United States", "United Kingdom", "Canada", "Australia", "Germany",
    "Ireland", "France", "Netherlands", "New Zealand", "Singapore", 
    "Sweden", "Switzerland", "Italy", "Spain", "Austria"
  ];

  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length > 0) {
      const filtered = autocompleteList.filter(country =>
        country.toLowerCase().includes(val.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (country) => {
    setSearchQuery(country);
    setSuggestions([]);
    setShowSuggestions(false);
    setTimeout(() => {
      triggerSubmit(country);
    }, 50);
  };

  const matchCountry = (query) => {
    const q = query.toLowerCase().trim();
    const exactMatches = {
      "usa": "usa",
      "us": "usa",
      "uk": "uk",
      "aus": "australia",
      "can": "canada",
      "ger": "germany",
    };
    if (exactMatches[q]) return exactMatches[q];

    if (q === "united states" || q === "united states of america" || q === "america") return "usa";
    if (q === "united kingdom" || q === "england" || q === "britain" || q === "great britain") return "uk";
    if (q === "canada") return "canada";
    if (q === "australia" || q === "austrilia") return "australia";
    if (q === "germany" || q === "germani" || q === "deutschland") return "germany";

    const tokens = q.split(/\s+/);
    if (tokens.includes("usa") || tokens.includes("america") || tokens.includes("states")) return "usa";
    if (tokens.includes("uk") || tokens.includes("kingdom") || tokens.includes("england") || tokens.includes("britain")) return "uk";
    if (tokens.includes("canada")) return "canada";
    if (tokens.includes("australia") || tokens.includes("austrilia")) return "australia";
    if (tokens.includes("germany") || tokens.includes("germani")) return "germany";

    return null;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = (canvas.width / 2.6) * zoomFactor;

      rotationRef.current += rotationSpeed;

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.stroke();

      for (let lat = -60; lat <= 60; lat += 30) {
        const r = radius * Math.cos((lat * Math.PI) / 180);
        const y = cy + radius * Math.sin((lat * Math.PI) / 180);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.beginPath();
        ctx.ellipse(cx, y, Math.abs(r), Math.abs(r * 0.2 * Math.sin(rotationRef.current)), 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      for (let lon = 0; lon < 360; lon += 45) {
        const angle = (lon * Math.PI) / 180 + rotationRef.current;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.beginPath();
        ctx.ellipse(cx, cy, Math.abs(radius * Math.cos(angle)), radius, 0, 0, 2 * Math.PI);
        ctx.stroke();
      }

      landmassPoints.forEach(pt => {
        const radLat = (pt.lat * Math.PI) / 180;
        const radLon = (pt.lon * Math.PI) / 180 + rotationRef.current;

        const x = cx + radius * Math.cos(radLat) * Math.sin(radLon);
        const y = cy - radius * Math.sin(radLat);
        const z = Math.cos(radLat) * Math.cos(radLon);

        if (z > 0) {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.15 * z})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.8 * z, 0, 2 * Math.PI);
          ctx.fill();
        }
      });

      const dots = [
        { lat: 38, lon: -97, label: "USA" },
        { lat: 55, lon: -3, label: "UK" },
        { lat: 56, lon: -106, label: "Canada" },
        { lat: -25, lon: 133, label: "Australia" },
        { lat: 51, lon: 10, label: "Germany" }
      ];

      dots.forEach(dot => {
        const radLat = (dot.lat * Math.PI) / 180;
        const radLon = (dot.lon * Math.PI) / 180 + rotationRef.current;
        
        const x = cx + radius * Math.cos(radLat) * Math.sin(radLon);
        const y = cy - radius * Math.sin(radLat);
        const z = Math.cos(radLat) * Math.cos(radLon);

        if (z > 0) {
          ctx.fillStyle = "#e0a52b";
          ctx.beginPath();
          ctx.arc(x, y, 5 * z, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.font = "bold 9px monospace";
          ctx.fillText(dot.label, x + 7, y + 3);
        } else {
          ctx.fillStyle = "rgba(253, 186, 49, 0.2)";
          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
          ctx.font = "italic 8px monospace";
          ctx.fillText(dot.label, x + 5, y + 2);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [zoomFactor, rotationSpeed]);

  const triggerSubmit = (query) => {
    if (!query.trim()) return;

    setIsAnimating(true);
    setRotationSpeed(0.08);

    let currentZoom = 1;
    const interval = setInterval(() => {
      currentZoom += 0.06;
      setZoomFactor(currentZoom);
      if (currentZoom >= 1.8) {
        clearInterval(interval);
        
        const matchedId = matchCountry(query);
        if (matchedId) {
          toast.success(`Zooming to Study in ${matchedId.toUpperCase()}!`);
          setTimeout(() => {
            navigate(`/destinations/${matchedId}`);
            setIsAnimating(false);
            setZoomFactor(1);
            setRotationSpeed(0.003);
            setSearchQuery("");
          }, 500);
        } else {
          toast(`Opening Enquiry for "${query}"`, { icon: '✈️' });
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent('open-quick-enquiry', { detail: { country: query } }));
            setIsAnimating(false);
            setZoomFactor(1);
            setRotationSpeed(0.003);
            setSearchQuery("");
          }, 500);
        }
      }
    }, 25);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerSubmit(searchQuery);
  };

  return (
    <div className="globe-widget-card">
      <div className="globe-circle-wrap">
        <canvas ref={canvasRef} width="180" height="180" className="globe-canvas" />
      </div>
      <div className="globe-widget-details">
        <h4>Explore Other Destinations</h4>
        <p>Search any country to start your journey.</p>
        <form onSubmit={handleSubmit} className="globe-search-form" style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Where do you want to fly? (e.g. Germany)"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => { if (searchQuery.trim()) setShowSuggestions(true); }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            disabled={isAnimating}
            className="globe-search-input"
          />
          <button type="submit" className="globe-search-submit" disabled={isAnimating}>
            ✈
          </button>
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <div className="globe-suggestions-pills">
            {suggestions.map((country, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSuggestion(country)}
                className="globe-suggestion-pill"
              >
                {country}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const StudyAbroadPathway = () => {
  const [activeStudentPanel, setActiveStudentPanel] = useState(0);
  const [activeParentPanel, setActiveParentPanel] = useState(0);
  const studentIndexRef = useRef(0);
  const parentIndexRef = useRef(0);
  const location = useLocation();

  const scrollToPanel = (sectionClass, index) => {
    const wrapper = document.querySelector(`.${sectionClass} .support-accordion`);
    if (wrapper) {
      const rect = wrapper.getBoundingClientRect();
      const wrapperTop = rect.top + window.scrollY;
      const wrapperHeight = rect.height;

      const targetCenterInWrapper = (index + 0.5) * (wrapperHeight / 4);
      const targetScrollY = wrapperTop + targetCenterInWrapper - window.innerHeight / 2;

      if (sectionClass.includes("student")) {
        studentIndexRef.current = index;
        setActiveStudentPanel(index);
      } else {
        parentIndexRef.current = index;
        setActiveParentPanel(index);
      }

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth"
      });
    }
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace("#", "");
      let targetElement = null;
      if (hashId === "student-support") {
        targetElement = document.querySelector(".student-support");
      } else if (hashId === "parent-support") {
        targetElement = document.querySelector(".parent-support");
      } else if (hashId === "destinations") {
        targetElement = document.querySelector(".destinations-section");
      } else if (hashId === "explore-destinations") {
        targetElement = document.querySelector(".globe-widget-card");
      }

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const studentWrapper = document.querySelector(".student-support .support-accordion");
      const viewportCenter = window.innerHeight / 2;

      if (studentWrapper) {
        const rect = studentWrapper.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const progress = (viewportCenter - rect.top) / rect.height;
          const clamped = Math.max(0, Math.min(0.99, progress));
          const index = Math.floor(clamped * 4);
          if (studentIndexRef.current !== index) {
            studentIndexRef.current = index;
            setActiveStudentPanel(index);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="study-abroad-pathway-page service-detail-page fade-in">
      {/* Hero / Breadcrumb */}
      <section className="service-hero bg-gray">
        <div className="container text-center">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Pathways</Link>
            <span>/</span>
            <span className="text-black font-medium">Study Abroad Pathway</span>
          </nav>
          <h1>Study Abroad Pathway</h1>
          <p className="hero-desc" style={{ maxWidth: '800px', margin: '1rem auto 0 auto', color: '#666666' }}>
            When the plan points beyond India, we take you the whole way. From psychometric clarity to university shortlisting, documentation, parent alignment, and final arrival logistics.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Button variant="premium" onClick={() => window.dispatchEvent(new Event('open-quick-enquiry'))}>
              Plan Your Journey Abroad
            </Button>
          </div>
        </div>
      </section>

      <PathwayTopNav />

      {/* Complete Student Support Section (Accordion) */}
      <section id="student-support" className="home-support-section student-support" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #F3F3F3' }}>
        <div className="container">
          <div className="section-header-premium text-center">
            <span className="badge">For Students</span>
            <h2>Complete Student Support</h2>
            <p className="section-subtitle">
              How we guide college and school students from clarity to transition.
            </p>
          </div>

          <div className="support-accordion">
            {studentSupportData.map((card, i) => (
              <div
                key={i}
                className={`support-panel ${activeStudentPanel === i ? "active" : ""}`}
                style={{ backgroundImage: `url(${card.bgImg})` }}
                onClick={() => scrollToPanel("student-support", i)}
                onMouseMove={handleMouseMove}
              >
                <div className="support-panel-overlay"></div>
                <div className="support-panel-glass">
                  <div className="support-card-header">
                    <span className="support-card-number">{card.num}</span>
                    <div className="support-card-titles">
                      <h3>{card.title}</h3>
                    </div>
                  </div>
                  <p className="support-card-desc">{card.desc}</p>
                  <div className="support-card-indicator">
                    <span>Scroll to see details</span>
                    <span className="indicator-arrow">↓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link to="/services/study-abroad/student-support">
              <Button variant="premium" size="large">
                Explore Student Support Details →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Complete Parents Support Section */}
      <section id="parent-support" className="home-support-section parent-support" style={{ backgroundColor: '#fbfbfb', borderBottom: '1px solid #F3F3F3' }}>
        <div className="container">
          <div className="section-header-premium text-center">
            <span className="badge">For Parents</span>
            <h2>Complete Parents Support</h2>
            <p className="section-subtitle">
              Total financial clarity, travel logistics, and community networks built for families.
            </p>
          </div>

          <div className="parent-support-grid">
            {parentSupportData.map((card, i) => (
              <div
                key={i}
                className="parent-grid-card"
                style={{ backgroundImage: `url(${card.bgImg})` }}
                onMouseMove={handleMouseMove}
              >
                <div className="support-panel-overlay"></div>
                <div className="support-panel-glass">
                  <div className="support-card-header">
                    <span className="support-card-number">{card.num}</span>
                    <div className="support-card-titles">
                      <h3>{card.title}</h3>
                    </div>
                  </div>
                  <p className="support-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link to="/services/study-abroad/parent-support">
              <Button variant="premium" size="large">
                Explore Parents Support Details →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations - Masonry Style */}
      <section id="destinations" className="destinations-section" style={{ backgroundColor: '#ffffff', padding: '8rem 0' }}>
        <div className="container">
          <div className="section-header-premium text-center">
            <span className="badge">Explore</span>
            <h2>Popular Destinations</h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: '#666666' }}>
              Select a country to discover detailed application timelines, visa insights, and student guidebooks.
            </p>
          </div>
          <div className="destinations-masonry">
            {destinationsData.map((dest, i) => {
              const CardContent = (
                <>
                  <img src={dest.img} alt={dest.name} />
                  <div className="dest-overlay">
                    <h3>{dest.name}</h3>
                    {dest.hasGuide && <span className="dest-guide-hint">View Guide →</span>}
                  </div>
                </>
              );

              if (dest.hasGuide) {
                return (
                  <Link key={i} to={`/destinations/${dest.id}`} className={`dest-card ${dest.size} dest-card-interactive`}>
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div key={i} className={`dest-card ${dest.size}`}>
                  {CardContent}
                </div>
              );
            })}
            <div id="explore-destinations" className="dest-card medium globe-card">
              <GlobeWidget />
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link to="/services/study-abroad/destinations">
              <Button variant="premium" size="large">
                Explore Country Guides & Search →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadPathway;
