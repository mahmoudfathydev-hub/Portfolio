import ContactSection from '@/Components/Home/ContactSection/ContactSection'
import "./ContactBody.scss"
import { FaGithub, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import React, { useState, useEffect } from 'react';

export default function ContactBody() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:youremail@example.com?subject=Message from ${formData.name}&body=${formData.message} (${formData.email})`;
    };
    return (
        <div className="contact-body">
            <div className="container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="sec1">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="send-btn">Send Message</button>
                </form>
                <div className="contact-links">
                    <a href="mailto:mahmoudfathy.dev@gmail.com" className="icon-btn"><span>Email</span></a>
                    <a href="https://github.com/mahmoudfathydev-hub" target="_blank" rel="noreferrer" className="icon-btn"><FaGithub /></a>
                    <a href="https://www.facebook.com/mahmoud.fathy.339613?locale=ar_AR" target="_blank" rel="noreferrer" className="icon-btn"><FaFacebookF /></a>
                    <a href="https://www.tiktok.com/@eng_ma7moud_fat7y?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="icon-btn"><SiTiktok /></a>
                    <a href="https://www.linkedin.com/in/mahmoud-fathy-439293391/" target="_blank" rel="noreferrer" className="icon-btn"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
    )
}
