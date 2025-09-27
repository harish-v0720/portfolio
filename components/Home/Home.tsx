"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAos();
  }, []);

  return (
    <div className="overflow-hidden">
      <section id="#">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Project />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
