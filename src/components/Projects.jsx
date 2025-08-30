import React from "react";
import hospitalImage from "../assets/hospital.jpg"; // replace with actual image
import civicSenseImage from "../assets/civicsense.png"; // replace with actual image
import iiitiansNetworkImage from "../assets/iiitiansnetwork.jpg"; // replace with actual image

const projects = [
  {
    id: 1,
    name: "Hospital Management System",
    technologies: "MERN Stack, TailwindCSS",
    image: hospitalImage,
    demo: "https://github.com/netacodes69/Hospital-Management", // replace with actual hosted link
  },
  {
    id: 2,
    name: "CivicSense",
    technologies: "React, Express, MongoDB",
    image: civicSenseImage,
    demo: "https://civic-pulse-gilt.vercel.app/", // replace with actual hosted link
  },
  {
    id: 3,
    name: "IIITians Network",
    technologies: "React, Node.js, Firebase, TailwindCSS",
    image: iiitiansNetworkImage,
    demo: "https://iiitians-connect-network.vercel.app/", // already hosted
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg transition duration-300 
                         transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>

              {/* Tech stack badges */}
              <p className="flex flex-wrap gap-2 mb-4">
                {project.technologies.split(",").map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 px-2 py-1 text-sm rounded-full"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </p>

              {/* Hosted Link Button */}
              <a
                href={project.demo}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 
                           text-white px-4 py-2 rounded-full transition duration-300 
                           hover:from-blue-500 hover:to-green-400 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
