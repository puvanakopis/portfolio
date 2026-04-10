import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      id: 1,
      title: "GCE Advanced Level (Physical Science)",
      institution: "BT/PD/Kaluthavalai Maha Vidyalayam (National School)",
      period: "2019 – 2021",
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
      period: "Jun 2024 – present",
      side: "left"
    },
  ];

  return (
    <section className="w-full pb-[15vh] min-[1024px]:min-h-[85vh]" id="qualifications">
      <div className="z-[999] flex w-fit items-start justify-start pb-[15vh] [font-family:'Cormorant_Garamond',serif] text-[55px] font-extrabold text-[#4F4D4D] transition-all duration-300 max-lg:text-[3rem] max-[480px]:text-[2rem]">
        Qualifications
      </div>
      <div className="mx-auto max-w-[1000px] gap-12 px-8">

        {/* ---------------- Tabs for education and experience ---------------- */}
        <div className="mb-8 flex justify-center gap-4 max-[769px]:flex-col max-[769px]:items-center">
          <div
            className={`flex cursor-pointer items-center rounded-lg border-2 border-[#4F4D4D] px-6 py-[0.8rem] transition-all duration-300 max-[769px]:w-[80%] max-[769px]:justify-center ${activeTab === 'education' ? 'bg-[#4F4D4D] text-[#F8F9FA]' : 'bg-[#F8F9FA] text-[#4F4D4D] hover:bg-[#4F4D4D] hover:text-[#F8F9FA]'}`}
            onClick={() => setActiveTab('education')}
          >
            <FaGraduationCap className="mr-2 text-[1.2rem]" />
            <span>Education</span>
          </div>
          <div
            className={`flex cursor-pointer items-center rounded-lg border-2 border-[#4F4D4D] px-6 py-[0.8rem] transition-all duration-300 max-[769px]:w-[80%] max-[769px]:justify-center ${activeTab === 'experience' ? 'bg-[#4F4D4D] text-[#F8F9FA]' : 'bg-[#F8F9FA] text-[#4F4D4D] hover:bg-[#4F4D4D] hover:text-[#F8F9FA]'}`}
            onClick={() => setActiveTab('experience')}
          >
            <FaBriefcase className="mr-2 text-[1.2rem]" />
            <span>Experience</span>
          </div>
        </div>


        {/* ---------------- Content ---------------- */}
        <div>
          <div className="relative py-8 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:-translate-x-1/2 before:bg-[#4F4D4D] max-[769px]:py-0 max-[769px]:before:hidden">
            {activeTab === 'education' ? (
              educationData.map((item) => (
                <div key={item.id} className="relative mb-8 w-full before:absolute before:top-5 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-[#4F4D4D] before:left-1/2 before:-translate-x-2 max-[769px]:before:hidden">
                  <div className={`relative w-[45%] rounded-lg border-2 border-[#4F4D4D] bg-[#F8F9FA] p-6 shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 max-[769px]:ml-8 max-[769px]:w-[calc(100%-3rem)] max-[769px]:text-left ${item.side === 'left' ? 'ml-[-1.5rem] mr-auto text-left' : 'ml-auto mr-[-1.5rem] text-right'}`}>
                    <h3 className="mb-2 text-[1.2rem] text-[#4F4D4D]">{item.title}</h3>
                    <p className="mb-2 text-[1rem]">{item.institution}</p>
                    <div className={`mb-2 flex items-center text-[0.9rem] ${item.side === 'right' ? 'justify-end max-[769px]:justify-start' : 'justify-start'}`}>
                      <FaCalendarAlt className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              experienceData.map((item) => (
                <div key={item.id} className="relative mb-8 w-full before:absolute before:top-5 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-[#4F4D4D] before:left-1/2 before:-translate-x-2 max-[769px]:before:hidden">
                  <div className={`relative w-[45%] rounded-lg border-2 border-[#4F4D4D] bg-[#F8F9FA] p-6 shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-all duration-300 max-[769px]:ml-8 max-[769px]:w-[calc(100%-3rem)] max-[769px]:text-left ${item.side === 'left' ? 'ml-[-1.5rem] mr-auto text-left' : 'ml-auto mr-[-1.5rem] text-right'}`}>
                    <h3 className="mb-2 text-[1.2rem] text-[#4F4D4D]">{item.title}</h3>
                    <p className="mb-2 text-[1rem]">{item.company}</p>
                    <div className={`mb-2 flex items-center text-[0.9rem] ${item.side === 'right' ? 'justify-end max-[769px]:justify-start' : 'justify-start'}`}>
                      <FaCalendarAlt className="mr-2" />
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