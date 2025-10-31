import {
  faCode,
  faGears,
  faLaptop,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      technologies: [
        "React",
        "Flutter",
        "HTML",
        "Tailwindcss",
        "CSS",
        "JavaScript",
      ],
      icon: faLaptop,
    },
    {
      category: "Backend Development",
      technologies: ["Golang", "Grpc", "BigTable", "Node.js"],
      icon: faCode,
    },
    {
      category: "DevOps & Cloud",
      technologies: [
        "Apache Airflow",
        "Kubernetes",
        "Gcloud",
        "Github workflows",
      ],
      icon: faGears,
    },
    {
      category: "Tools & Platforms",
      technologies: ["Web3", "Solana", "VS Code", "Postman", "Linux"],
      icon: faWrench,
    },
  ];

  useGSAP(() => {
    gsap.from(".sectionTitle", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.from("#skills .group", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 60%",
      },
      opacity: 0,
      y: -40,
      delay: 0.2,
      duration: 0.6,
      ease: "power2.inOut",
    });
  });

  return (
    <section id="skills">
      <div className="max-w-7xl max-w flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col items-center">
          <h2 className="sectionTitle">Skills & Expertise</h2>
          <div className="text-[#94a2b8] text-center">
            Technologies and tools I work with
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:px-6 lg:px-0 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            // <div className="px-4 py-2">
            <div
              key={index}
              className="group hover:scale-105 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 bg-slate-800/30 backdrop-blur-sm px-14 py-10 border-slate-700/50 flex flex-col items-center justify-between gap-2 rounded-3xl border"
            >
              <div className="bg-blue-500 group-hover:scale-110 flex justify-center item-center w-min p-6 rounded-3xl text-2xl">
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <h3 className="font-bold text-white text-lg text-center">
                {skill.category}
              </h3>
              <p className="text-center">{skill.technologies.join(", ")}</p>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
