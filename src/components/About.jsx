import React from 'react'

const About = () => {
    return (
        <section id="about">
            <div className='max-w-7xl flex flex-col gap-10'>
                <div className='flex flex-col items-center gap-2'>
                    <div className='text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent' >About me</div>
                    <div className='text-[#94a2b8]'>Get to know more about my journey and expertise</div>
                </div>
                <div className='py-10 px-8 rounded-3xl text-[#cad4e0] text-lg backdrop-blur-sm shadow-2xl border border-[#202a3c] bg-[#11192b]' >
                    I'm a passionate software engineer with expertise in full-stack development. I love turning complex problems into simple, beautiful, and intuitive solutions. My goal is to build applications that not only meet technical requirements but also provide exceptional user experiences. <br /><br />
                    With a strong foundation in both frontend and backend technologies, I specialize in building scalable web applications, designing efficient databases, and implementing modern development practices. I'm constantly learning and adapting to new technologies to stay at the forefront of software development.
                </div>
            </div>
        </section>
    )
}

export default About