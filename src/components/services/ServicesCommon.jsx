import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import './ServicesCommon.css';

/**
 * Common Data Section shared between Parents and Schools
 */
export const CommonDataSection = () => (
  <section className="section common-data-section">
    <div className="container">
      <div className="grid grid-2">
        <div className="philosophy-content">
          <h2 className="mb-6">Our Philosophy</h2>
          <p className="text-lg text-gray-700 mb-6">
            At NPathways Global, we believe that education is not just about admission; it's about 
            <strong> alignment</strong>. We focus on readiness across three dimensions: Clarity, 
            Capability, and Global Exposure.
          </p>
          <ul className="philosophy-list">
            <li><strong>Clarity</strong> Knowing the 'Why' before the 'Where'.</li>
            <li><strong>Capability</strong> Building the skills required for global success.</li>
            <li><strong>Connection</strong> Leveraging an ecosystem of global industry and academic partners.</li>
          </ul>
        </div>
        <div className="outcomes-content">
          <h2 className="mb-6">Student Outcomes</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our framework is designed for long-term success, ensuring students are not just admitted 
            but thrive in their chosen careers.
          </p>
          <div className="outcome-metrics">
            <div className="metric-item">
              <span className="metric-value">98%</span>
              <span className="metric-label">Placement Satisfaction</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">40+</span>
              <span className="metric-label">Industry Domains</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/**
 * Digital Catalogue Card for Parent/Institutional resources
 */
export const CatalogueItem = ({ category, items }) => (
  <div className="catalogue-category">
    <h3 className="mb-4">{category}</h3>
    <div className="catalogue-grid">
      {items.map((item, index) => (
        <Card key={index} className="catalogue-card" hoverable>
          <div className="catalogue-type">{item.type}</div>
          <h4>{item.title}</h4>
          <p className="text-sm text-gray-600">{item.description}</p>
          <button className="text-link mt-4">View Resource →</button>
        </Card>
      ))}
    </div>
  </div>
);

/**
 * Readiness Framework Component
 */
export const ReadinessFramework = () => (
  <div className="readiness-framework bg-black text-white p-12 rounded-3xl">
    <h2 className="text-center mb-12">The NPathways Readiness Framework</h2>
    <div className="grid grid-3 gap-8">
      <div className="framework-pillar">
        <div className="pillar-index">01</div>
        <h3>Career Clarity</h3>
        <p>Removing confusion through scientific assessments and discovery sessions.</p>
      </div>
      <div className="framework-pillar">
        <div className="pillar-index">02</div>
        <h3>Skill Readiness</h3>
        <p>Bridging the gap between academic knowledge and industry requirements.</p>
      </div>
      <div className="framework-pillar">
        <div className="pillar-index">03</div>
        <h3>Global Exposure</h3>
        <p>Curated interactions with international mentors and universities.</p>
      </div>
    </div>
  </div>
);
