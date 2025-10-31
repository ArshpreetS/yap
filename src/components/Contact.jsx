import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    gsap.from(".heading", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 70%",
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: "power2.inOut",
    });
  });
  return (
    <section id="contact">
      <div className="max-w-7xl flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <div className="heading leading-relaxed text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </div>
          <div className="text-[#cad4e0] text-lg text-center">
            I'm always interested in hearing about new projects and
            opportunities. <br />
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </div>
        </div>
        <button className="px-8 py-4 rounded-2xl text-lg font-semibold bg-linear-to-r from-blue-500 to-purple-500">
          <FontAwesomeIcon icon={faEnvelope} /> Send Message
        </button>
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.github.com/arshpreets"
            className="social-box rounded-2xl p-4 bg-[#11192b] border border-[#334156]"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/arshpreets2807/"
            className="social-box rounded-2xl p-4 bg-[#11192b] border border-[#334156]"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="mailto:arshpreets2807@gmail.com"
            className="social-box rounded-2xl p-4 bg-[#11192b] border border-[#334156]"
          >
            <FontAwesomeIcon icon={faInbox} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
