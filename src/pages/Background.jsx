// ParticlesBackground.js
import React, { useEffect } from "react";
import './Background.css';
import { FaArrowRight } from "react-icons/fa";
import Countdown from './Countdown';

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      const particleCount = window.innerWidth < 768 ? 200 : 400;

      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: particleCount,
            density: { enable: true, value_area: 1000 },
          },
          color: { value: "#ff0000" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
          },
          opacity: {
            value: 0.5,
            random: false,
          },
          size: {
            value: 4,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ff0000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <span>
      <div id="particles-js" className="particles-container"></div>
      <div className="content-container">
        <img src="\Home\iwauy6uo.png" alt="Description" className="center-image" />
        <p className="date">26th October 2024</p>
      </div>
      <section className="countdown-section">
        <Countdown />
      </section>
      
      {/* Second Section */}
<span className="second-section">
  <span className="background-overlay"></span>
  <img src="\Home\tvlrewnf.png" alt="Descriptive text" className="section-image" />
  <span className="section-content">
    <h2 className="section-title">POWER OF <span style={{color: 'red'}}>PERSISTENCE</span></h2>
    <p className="section-paragraph">The theme <span style={{color: 'red'}}>"Power of Persistence"</span> represents the strength and dedication needed to overcome obstacles and achieve greatness.</p>
    <button className="btn-1">
      <FaArrowRight className="arrow-icon" /> Learn More
    </button>
  </span>
</span>
    </span>
  );
};

export default ParticlesBackground;