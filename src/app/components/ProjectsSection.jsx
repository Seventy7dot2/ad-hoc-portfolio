"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HackNITR 5.0 Website",
    description:
      "HackNITR 5.0: Flagship Hackathon to solve real-world challenges by GDSC NIT Rourkela and OpenCode.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dscnitrourkela/project-oregano",
    previewUrl: "https://hacknitr.com",
  },
  {
    id: 2,
    title: "Coratia Website",
    description: "Website of Shark Tank India featured company",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Seventy7dot2/project-coratia",
    previewUrl: "https://coratia.com",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "The Grocery Store App is a user-friendly and efficient web application designed to streamline your grocery shopping experience",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Seventy7dot2/Grocery_Store",
    previewUrl: "https://ecomm.prasadpatra.dev",
  },
  {
    id: 4,
    title: "Boost: Motivational WhatsApp Bot",
    description: "A Whatsapp bot which sends motivational messages.",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "https://github.com/Seventy7dot2/whatsappbot",
    previewUrl: "https://devfolio.co/projects/boost-e7ef",
  },
  {
    id: 5,
    title: "IIT Madras Grade Predictor",
    description: "Grade Predictor for IITM BS students",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Seventy7dot2/iitm_calculator",
    previewUrl: "https://seventy7dot2.github.io/iitm_calculator/",
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
