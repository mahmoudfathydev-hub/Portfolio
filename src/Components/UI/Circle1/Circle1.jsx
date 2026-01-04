import React, { useEffect, useRef } from "react";
import "./Circle1.scss";

export default function Circle() {
    const containerRef = useRef(null);
    const starsRef = useRef([]);
    const mouse = useRef({ x: -1000, y: -1000 });

    const STAR_COUNT = 240;
    const REPEL_RADIUS = 100;
    const REPEL_FORCE = 0.08;

    useEffect(() => {
        const container = containerRef.current;
        const stars = Array.from(container.children);

        starsRef.current = stars.map(() => {
    const speed = Math.random() * 0.3 + 0.05; // حركة بطيئة لكن واضحة
    const angle = Math.random() * 2 * Math.PI;

    // توزيع عشوائي كامل داخل العرض والارتفاع
    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight;

    return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
    };
});

        const onMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        container.addEventListener("mousemove", onMouseMove);

        const animate = () => {
            starsRef.current.forEach((star, i) => {
                const dx = star.x - mouse.current.x;
                const dy = star.y - mouse.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < REPEL_RADIUS) {
                    const force = (REPEL_RADIUS - dist) * REPEL_FORCE;
                    star.vx += (dx / dist) * force;
                    star.vy += (dy / dist) * force;
                }

                star.x += star.vx;
                star.y += star.vy;

                // انعكاس عند حدود container
                if (star.x < 0 || star.x > container.offsetWidth) star.vx *= -1;
                if (star.y < 0 || star.y > container.offsetHeight) star.vy *= -1;

                stars[i].style.transform = `translate(${star.x}px, ${star.y}px)`;
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            container.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div className="stars-bg" ref={containerRef}>
            {Array.from({ length: STAR_COUNT }).map((_, i) => (
                <span key={i} className="star" />
            ))}
        </div>
    );
}
