import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./SecondSection.scss";
import html from "../../../images/Html.png";
import css from "../../../images/Css.png";

export default function SecondSection() {
    const journeyCards = [
        {
            title: "First Step",
            content: (
                <>
                    My journey into programming began in <span className="highlight">2018</span> by chance. 
                    That sparked my <span className="highlight">curiosity</span>, and I started exploring 
                    programming on my own, even without access to a <span className="highlight">computer</span> at the time.
                </>
            ),
        },
        {
            title: "Official Learning",
            content: (
                <>
                    I officially began learning in <span className="highlight">2024</span> after finishing 
                    <span className="highlight"> high school</span>. I enrolled in the <span className="highlight">Satr platform </span> 
                    in Saudi Arabia, affiliated with the <span className="highlight">Ministry of Communications </span> 
                    and the <span className="highlight">Saudi Federation for Cybersecurity, Programming, and Drones</span>. 
                    I completed <span className="highlight">HTML</span> and <span className="highlight">CSS</span> courses there, 
                    building a solid foundation in front-end development.
                </>
            ),
        },
        {
            title: "Practical Skills",
            content: (
                <>
                    In <span className="highlight">2025</span>, I learned <span className="highlight">JavaScript </span> 
                    and <span className="highlight">React</span> through online courses. I use <span className="highlight">Stack Overflow </span>, 
                    <span className="highlight">W3Schools</span>, and AI tools like  <span className="highlight"> ChatGPT </span> 
                    to solve problems and improve my skills. I also learned to work with <span className="highlight">GitHub</span>, 
                    upload projects, and deploy them on <span className="highlight">Netlify</span>. 
                    This journey taught me that consistent practice, <span className="highlight">curiosity</span>, 
                    and persistence are the keys to mastering development skills.
                </>
            ),
        },
    ];

    return (
        <div className="second-section">
            <div className="container">
                <div className="title-second-section">
                    <p>
                        My <span>Journey</span>
                    </p>
                </div>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {journeyCards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="card">
                                <div className="title-card">
                                    <h3>{card.title}</h3>
                                    <p>{card.content}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="img-section-programming">
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                </div>

                <div className="end-text">
                    <p>Learning is a <span> journey</span> , not a destination</p>
                </div>
            </div>
        </div>
    );
}
