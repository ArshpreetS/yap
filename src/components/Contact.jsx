import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faInbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className='max-w-7xl flex flex-col justify-center items-center gap-10'>
                <div className=' flex flex-col justify-center items-center'>
                    <div className='leading-relaxed text-5xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                        Let's Work Together
                    </div>
                    <div className='text-[#cad4e0] text-lg text-center'>
                        I'm always interested in hearing about new projects and opportunities. <br />
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </div>
                </div>
                <button className='px-8 py-4 rounded-2xl text-lg font-semibold bg-linear-to-r from-blue-500 to-purple-500'>
                    <FontAwesomeIcon icon={faEnvelope} /> Send Message
                </button>
                <div className="flex gap-4 text-2xl">
                    <button className="rounded-2xl p-4 bg-[#11192b] border border-[#334156]"><FontAwesomeIcon icon={faGithub} /></button>
                    <button className="rounded-2xl p-4 bg-[#11192b] border border-[#334156]"><FontAwesomeIcon icon={faLinkedinIn} /></button>
                    <button className="rounded-2xl p-4 bg-[#11192b] border border-[#334156]"><FontAwesomeIcon icon={faInbox} /></button>
                </div>
            </div>
        </section>
    )
}

export default Contact