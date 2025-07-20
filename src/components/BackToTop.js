"use client";

import { useEffect, useRef } from 'react';

export default function BackToTop() {
    const scrollPathRef = useRef(null);

    useEffect(() => {
        const scrollPath = scrollPathRef.current;

        if (scrollPath) {
            // Initialize the scroll path
            const pathLength = scrollPath.getTotalLength();
            scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
            scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
            scrollPath.style.strokeDashoffset = pathLength;
            scrollPath.getBoundingClientRect();
            scrollPath.style.transition = scrollPath.style.WebkitTransition =
                "stroke-dashoffset 10ms linear";

            // Update scroll position
            const updateScroll = () => {
                const scroll = window.scrollY;
                const height = document.documentElement.scrollHeight - window.innerHeight;
                const scrollOffset = pathLength - (scroll * pathLength) / height;
                scrollPath.style.strokeDashoffset = scrollOffset;
            };

            updateScroll();
            window.addEventListener("scroll", updateScroll);

            // Add/remove active class based on scroll position
            const offset = 50;
            const scrollUp = document.querySelector(".scroll-up");
            const handleScroll = () => {
                if (window.scrollY > offset) {
                    scrollUp.classList.add("active-scroll");
                } else {
                    scrollUp.classList.remove("active-scroll");
                }
            };

            window.addEventListener("scroll", handleScroll);

            // Smooth scroll to top on click
            const handleClick = (event) => {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            };

            scrollUp.addEventListener("click", handleClick);

            // Cleanup event listeners
            return () => {
                window.removeEventListener("scroll", updateScroll);
                window.removeEventListener("scroll", handleScroll);
                scrollUp.removeEventListener("click", handleClick);
            };
        }
    }, []);

    return (
        <div className="scroll-up">
            <svg className="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    ref={scrollPathRef}
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                />
            </svg>
        </div>
    );
}