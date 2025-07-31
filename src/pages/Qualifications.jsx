// Importing styles and icons
import './Qualifications.css';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      id: 1,
      title: "GCE Advanced Level",
      institution: "BT/PD/Kaluthavalai Maha Vidyalayam (National School)",
      period: "2018 – 2020",
      side: "right"
    },
    {
      id: 2,
      title: "BSc (Hons) in Software Engineering",
      institution: "Sabaragamuwa University of Sri Lanka",
      period: "2023 – present",
      side: "left"
    },
  ];

  const experienceData = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Fiverr",
      period: "Jun 2023 – Aug 2023",
      side: "left"
    },
  ];

  return (
    <section className="qualifications" id="qualifications">
      <div className="qualifications-container">
        
        {/* ---------------- Tabs for education and experience ---------------- */}
        <div className="qualifications-tabs">
          <div
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <FaGraduationCap className="tab-icon" />
            <span>Education</span>
          </div>
          <div
            className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FaBriefcase className="tab-icon" />
            <span>Experience</span>
          </div>
        </div>


        {/* ---------------- Content ---------------- */}
        <div className="qualifications-content">
          <div className="timeline">
            {activeTab === 'education' ? (
              educationData.map((item) => (
                <div key={item.id} className={`timeline-item ${item.side}`}>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p className="institution">{item.institution}</p>
                    <div className="timeline-period">
                      <FaCalendarAlt className="calendar-icon" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              experienceData.map((item) => (
                <div key={item.id} className={`timeline-item ${item.side}`}>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p className="company">{item.company}</p>
                    <div className="timeline-period">
                      <FaCalendarAlt className="calendar-icon" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;