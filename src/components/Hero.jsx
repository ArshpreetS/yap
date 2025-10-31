import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    // Hero badge blinking animation
    gsap.to("#hero-badge", {
      opacity: 0.4,
      duration: 1,
      repeat: -1,
      delay: 0.5,
      ease: "power2.in",
      yoyo: true,
    });

    // Hero asset scaling animation
    gsap.from("#hero-asset", {
      scale: 0,
      delay: 0.5,
      duration: 1,
      ease: "bounce.out",
    });

    // Hero content fade-top animation
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.from(".available-badge", {
      opacity: 0,
      y: -30,
      delay: 0.6,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="hero">
      <div className="max-w-7xl pt-50 md:pt-0 w-full grid md:grid-cols-2 relative gap-12">
        {/* Content Section */}
        <div className="flex flex-col gap-6">
          <div className="available-badge  bg-[#0A142F] text-white w-fit rounded-3xl px-4 py-2 flex justify-center items-center gap-2 border border-[#152F5F]">
            <div
              id="hero-badge"
              className="h-2 w-2 bg-green-300 rounded-full"
            ></div>
            Available for work
          </div>
          <div className="hero-content flex flex-col gap-8">
            <div className="text-blue-400 font-semibold text-lg tracking-wide">
              HELLO, I'm Arshpreet Singh
            </div>
            <h1 className="text-5xl md:text-7xl leading-tight">
              <span className="text-white font-bold">Software</span>
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400  hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 bg-clip-text text-transparent font-bold">
                Engineer
              </span>
            </h1>
            <div className="text-xl text-slate-300 leading-relaxed">
              Building innovative solutions with modern technologies. Passionate
              about creating seamless user experiences and scalable
              applications.
            </div>
            <div className="flex gap-4">
              <a
                href={"#contact"}
                className="px-8 py-4 font-bold rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 duration-300 hover:scale-110"
              >
                Get In Touch
              </a>
              <a
                href={"#about"}
                className="px-8 py-4 font-bold rounded-2xl bg-slate-900 border border-[#334156] hover:scale-110 duration-300 hover:border-blue-600"
              >
                View work
              </a>
            </div>
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
        </div>
        {/* Asset Section */}
        <div id="hero-asset" className="flex justify-center items-center">
          <div className="relative">
            <div className="h-80 w-80 rounded-full p-1 bg-linear-to-br from-blue-400 via-purple-400 to-pink-400 flex justify-center items-center">
              {/* TODO (Arshpreet): Get proper icons instead of < and > */}
              <div className="flex justify-center items-center h-full w-100 rounded-full bg-slate-900 text-8xl font-bold text-[#60A5FA]">
                &lt; &gt;
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full blur-2xl bg-pink-400/30"></div>
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full blur-2xl bg-blue-400/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
