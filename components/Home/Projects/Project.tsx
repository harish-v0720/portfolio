import Image from "next/image";
import React from "react";

const Project = () => {
  const Projects = [
    {
      id: 1,
      name: "Modern Finance Dashboard UI",
      subname: "Apps , UI/UX",
      image: "/images/p1.jpg",
      aos: "fade-up",
      anchor: "top-center",
      delay: "0",
    },
    {
      id: 2,
      name: "Portfolio Website for Creatives",
      subname: "Branding, Motion",
      image: "/images/p2.jpg",
      aos: "fade-up",
      anchor: "top-center",
      delay: "100",
    },
    {
      id: 3,
      name: "Brand Identity for Startups",
      subname: "Branding , UI/UX",
      image: "/images/p3.jpg",
      aos: "fade-up",
      anchor: "top-center",
      delay: "200",
    },
    {
      id: 4,
      name: "Saas Dashboard Development",
      subname: "Apps , UI/UX",
      image: "/images/p4.jpg",
      aos: "fade-up",
      anchor: "top-center",
      delay: "300",
    },
  ];

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-300">projects</span>{" "}
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {Projects.map((project) => (
          <div
            data-aos={project.aos}
            data-aos-anchor-placement={project.anchor}
            data-aos-delay={project.delay}
            key={project.id}
          >
            <Image
              src={project.image}
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
              {project.name}
            </h1>
            <h1 className="pt-2 font-medium text-white/80">
              {project.subname}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
