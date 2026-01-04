import React, { useRef, useEffect, useState } from "react";
import { FaCss3Alt, FaJs, FaReact, FaGithub, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFigma, SiAdobeillustrator, SiReactquery } from "react-icons/si";
import "./LogoLoop.scss";

export default function LogoLoop() {
  const logos = [
    { icon: <FaCss3Alt />, color: "#1572B6", name: "css" },
    { icon: <FaJs />, color: "#F7DF1E", name: "js" },
    { icon: <FaReact />, color: "#61DAFB", name: "react" },
    { icon: <SiTailwindcss />, color: "#38B2AC", name: "tailwind" },
    { icon: <SiVite />, color: "#646CFF", name: "vite" },
    { icon: <FaGithub />, color: "#FFFFFF", name: "github" },
    { icon: <SiReactquery />, color: "#FF4154", name: "reactquery" },
    { icon: <SiAdobeillustrator />, color: "#FF9A00", name: "ai" },
    { icon: <FaHtml5 />, color: "#E34F26", name: "html" },
    { icon: <SiFigma />, color: "#F24E1E", name: "figma" },
  ];

  const trackRef = useRef();
  const [animationDuration, setAnimationDuration] = useState(20);

  useEffect(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth / 2;
      const speed = 50; // pixels per second
      setAnimationDuration(trackWidth / speed);
    }
  }, []);

  return (
    <div className="ticker-container">
      <div
        className="ticker-track"
        style={{ animationDuration: `${animationDuration}s` }}
        ref={trackRef}
      >
        {[...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="ticker-item"
            style={{ "--logo-color": logo.color }}
          >
            {logo.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
