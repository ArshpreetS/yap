const Hero = () => {
  return (
    <section id="hero">
      <div className="max-w-7xl w-full grid grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="bg-[#0A142F] text-white w-fit rounded-3xl px-4 py-2 flex justify-center items-center gap-2 border border-[#152F5F]">
            <div className="h-2 w-2 bg-green-300 rounded-full"></div>
            Available for work
          </div>
          <div className="text-blue-400 font-semibold text-lg tracking-wide">
            HELLO, I'M
          </div>
          <div>Software Engineer</div>
          <div>
            Building innovative solutions with modern technologies. Passionate
            about creating seamless user experiences and scalable applications.
          </div>
          <div>
            <button>Get in touch</button>
            <button>View work</button>
          </div>
          <div>
            <button>github</button>
            <button>linkedin</button>
            <button>email</button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative">
            <div className="h-80 w-80 rounded-full p-1 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex justify-center items-center">
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
