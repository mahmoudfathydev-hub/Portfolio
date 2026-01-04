import Button from '@/Components/UI/Button/Button';
import React from 'react';
import { FaTiktok } from "react-icons/fa";
import './FourthSection.scss';


export default function FourthSection() {
    return (
        <div className="fourth-section">
            <div className="container">
                <div className="title-section">
                    <p>Community &<span> Content </span></p>
                </div>
                <div className="content">
                    <p>
                        I actively share my learning journey and front-end projects on <span className="highlight">TikTok</span>, where I create short-form content focused on <span className="highlight">clean code</span>, <span className="highlight">UI development</span>, and practical <span className="highlight">front-end techniques</span>.
                        <br /><br />
                        My content has reached over <span className="highlight">75,000 views</span>, with my most-watched video gaining more than <span className="highlight">23,000 views</span> in just a few minutes—demonstrating strong audience engagement and interest in <span className="highlight">real-world coding processes</span>.
                        <br /><br />
                        Through content creation, I aim to document my progress, <span className="highlight">inspire other beginners</span>, and contribute to the <span className="highlight">developer community</span> by sharing practical insights and hands-on examples.
                    </p>
                </div>
                <div className="btn-community">
                    <Button
                        name="View My Account"
                        className='button-community'
                        Icon={FaTiktok}
                        url="https://www.tiktok.com/@eng_ma7moud_fat7y?is_from_webapp=1&sender_device=pc"
                    />
                </div>
            </div>
        </div>
    );
}
