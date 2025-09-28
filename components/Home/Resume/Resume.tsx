import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK SECTION */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="Developed responsive web applications using React, Node.js, and modern UI frameworks.
Built and integrated REST APIs with databases like MongoDB.
"
            />
            <ResumeCard
              Icon={FaReact}
              role="Front-End Developer"
              description="Built responsive and user-friendly web interfaces using React, JavaScript, and TypeScript.
Implemented modern UI designs with Material-UI, TailwindCSS, and shadcn/ui."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Back-End Developer"
              description="Developed secure and scalable server-side applications using Node.js and Express.js.
Designed and managed databases with MongoDB for efficient data handling."
            />
          </div>
        </div>
        {/* EDUCATION PART */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education </span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={BiBadge}
              role="Sathyabama Institute of Science and Technology"
              date="June 2020 - Aug 2024"
              description="B.E - ECE - 8.68"
            />
            <ResumeCard
              Icon={FaReact}
              role="Narayana Junior College"
              date="June 2018 - May 2020"
              description="Intermediate - MPC - 9.09"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Gauthami Techno School"
              date="May 2018"
              description="SSC - 9.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
