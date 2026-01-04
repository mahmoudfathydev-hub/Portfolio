import React from 'react'
import logoimg from "../../../images/logo.png"
import { FaGithub, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { MdEmail } from "react-icons/md";
import './Footer.scss'
export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="top-footer">
                    <div className="col1">
                        <div className="logo">
                            <img src={logoimg} alt="logo" />
                            <h2 className='name'>
                                Mahmoud <br />
                                Fathy
                            </h2>
                        </div>
                        <div className="text">
                            <p>Learning is a habit… <span>success</span> is its result</p>
                        </div>
                        <div className="links">
                            <div className="contact-links">
                                <a href="mailto:mahmoudfathy.dev@gmail.com" className="icon-btn"><MdEmail /></a>
                                <a href="https://github.com/mahmoudfathydev-hub" target="_blank" rel="noreferrer" className="icon-btn"><FaGithub /></a>
                                <a href="https://www.facebook.com/mahmoud.fathy.339613?locale=ar_AR" target="_blank" rel="noreferrer" className="icon-btn"><FaFacebookF /></a>
                                <a href="https://www.tiktok.com/@eng_ma7moud_fat7y?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="icon-btn"><SiTiktok /></a>
                                <a href="https://www.linkedin.com/in/mahmoud-fathy-439293391/" target="_blank" rel="noreferrer" className="icon-btn"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col3">
                        <h3>Contact Info</h3>
                        <ul>
                            <li><FaPhoneAlt style={{ marginRight: "8px" }} /> +20 120 048 1281</li>
                            <li><FaMapMarkerAlt style={{ marginRight: "8px" }} /> El Beheira, Egypt</li>
                            <li>Email: <a href="mailto:mahmoudfathy.dev@gmail.com">mahmoudfathy.dev@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-footer" style={{ textAlign: "center", marginTop: "40px", fontSize: "0.85rem", color: "var(--white-400)" }}>
                    © 2026 Mahmoud Fathy. All rights reserved.
                </div>
            </div>
        </div>
    )
}
